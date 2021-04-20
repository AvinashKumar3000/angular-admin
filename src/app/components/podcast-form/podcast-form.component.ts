import { PodcastService } from './../../service/podcast.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-podcast-form',
  templateUrl: './podcast-form.component.html',
  styleUrls: ['./podcast-form.component.css']
})
export class PodcastFormComponent implements OnInit {

  constructor(private service:PodcastService) { }

  ngOnInit(): void {
    this.getData();
  }

  audioLink = ""
  about = ""
  time = ""

  async getData() {
    const data:any = await this.service.get();
    this.audioLink = data.audioLink
    this.time = data.time
    this.about = data.about
  }

  async updateData() {
    const data = {
      id:1,
      audioLink:this.audioLink,
      about:this.about,
      time:this.time
    }
    const res:any = await this.service.set(data);
  }
}
