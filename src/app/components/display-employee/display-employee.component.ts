import { EmployeeService } from './../../service/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

  constructor(private service:EmployeeService) { }

  ngOnInit(): void {
    this.getAll();
  }

  employees:any = [];

  async getAll(){
    this.employees = await this.service.getAll(localStorage.getItem('companyId'));
    console.log(this.employees)
  } 

  async delete(id:number){
    const state = window.confirm("Are you sure you want to delete ?")
    if(state) {
      const res = await this.service.deleteEmployee(id);
      window.alert(res)
      this.getAll();
    }
  }
}
