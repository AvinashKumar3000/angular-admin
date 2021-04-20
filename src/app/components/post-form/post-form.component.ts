import { PostService } from './../../service/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor(private service:PostService) { }

  ngOnInit(): void {
    this.getData();
  }

  auther = ""
  shortDesc = ""
  desc = ""
  time = ""

  async getData() {
    const data:any = await this.service.get();
    this.auther = data.auther
    this.time = data.time
    this.desc = data.description
    this.shortDesc = data.shortDesc
  }
  setValue() {
    document.getElementById("")
  }
  async updateData() {
    console.log("updating the data")
    const data = {
      id:1,
      auther:this.auther,
      description:this.desc,
      shortDesc:this.shortDesc,
      time:this.time
    }
    const res:any = await this.service.set(data);
    console.log(res)
  }
}
