import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  
  constructor(private http:HttpClient) { }
  status:boolean = false
  private url = 'http://13.232.66.207:8080/employee/'

  getAll = async (cid:string) => {
    var num = new Number(cid);
    const res = await this.http.get(this.url + 'getAllEmployeesByCID/' + num.toString()).toPromise();
    console.log(res)
    return res;
  }

  addEmployee = async (data) => {
    const body = {
   name:data.name,
     gender:data.gender,
     address:data.address,
     dob:data.dob,
     doj:data.doj,
     username:data.username,
     password:data.password,
     companyId: 53
    }
    try{
      const res:any = await this.http.post(this.url + 'addEmployee',body).toPromise();
    }
    catch(err){
      return window.alert("created")
    }
    
  }

  deleteEmployee = async(id: number) =>  {
    var num = new Number(id)
    try{
      const res:any = await this.http.delete(this.url +  'delEmployee/' + num.toString()).toPromise();
    }
    catch(err){
      return "deleted"
    }
    return "done";
  }
}
