import { EmployeeService } from './../../service/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private service:EmployeeService) { }

  ngOnInit(): void {
  }
  data:any = {
    name:"",
    gender:"",
    dob:new Date,
    doj:new Date,
    address:"",
    username:"",
    password:""
  }
  repeat:string = ""
  onKeyChange(event,keyId) {
    this.data[keyId] = event.target.value;
  }
  onKeyRepeat(event){
    this.repeat = event.target.value;
  }
  onSubmit(){
    var keyItems = Object.keys(this.data)
    for (let i = 0; i< keyItems.length ; i++) {
      if (this.data[keyItems[i]] === ""){
        window.alert("input is empty")
        break;
      }
    }
    if(this.repeat !== this.data.password) {
      window.alert("repeat password is wrong, try again.")
      return 0
    }
    try{

      this.service.addEmployee(this.data)
    }catch(err){
      console.log(err)
    }
  }
}
