import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {

  constructor(private http:HttpClient) { }

  private url = 'http://13.232.66.207:8080/podcast'

  get = async () => {
    const res = await this.http.get(this.url).toPromise();
    console.log(res)
    return res;
  }
  set = async (data) => {
    console.log("updating")
    const res = await this.http.put(this.url,data).toPromise();
    return res;
  }
}
