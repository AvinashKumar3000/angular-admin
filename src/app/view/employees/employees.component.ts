import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  btnName:string = "create New Employee";
  btnStatus:boolean = false;

  changeBtnStatus = (event) => {

    if(this.btnStatus) {
      this.btnName = "create New Employee"
    }else{
      this.btnName = "back"
    }
    
    this.btnStatus = !this.btnStatus
  }
}
