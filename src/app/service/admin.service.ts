import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  status:boolean = false
  private url = 'http://13.232.66.207:8080/admin/'

  auth = async (id:number,username:string, password:string) => {
    const body = {
      id:id,
      username:username,
      pass:password
    }
    const res = await this.http.post('http://13.232.66.207:8080/authentication',body).toPromise();
    if(res === true)
      return true
    return false;
  }

  getData = async (id:any) => {
    var num = new Number(id)
    const res = await this.http.get(this.url + num.toString()).toPromise();
    return res
  }

  updateData = async (data) => {
    const res = await this.http.put(this.url,data).toPromise();
    return res
  }
}
