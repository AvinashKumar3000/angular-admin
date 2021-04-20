import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  private url = 'http://13.232.66.207:8080/post'

  get = async () => {
    const res = await this.http.get(this.url).toPromise();
    return res;
  }
  set = async (data) => {
    const body ={
      "id":1,
      "auther": data.auther,
      "description": data.description,
      "shortDesc": data.shortDesc,
      "time":data.time
    }
    const res = await this.http.put(this.url,body).toPromise();
    return res;
  }
}
