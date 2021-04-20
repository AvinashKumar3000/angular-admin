import { AdminService } from './service/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor (private service:AdminService){ }

  ngOnInit() {
  }
  status:boolean = false
  tabs = [true,false,false,false]
  value = 0
  
  onTabClick = (idx:number) => {
    if( this.value !== idx ){
      var li =[false,false,false,false]
      li[idx] = true
      this.tabs = li
      document.getElementById("tab-"+0).style.backgroundColor="white";
      document.getElementById("tab-"+1).style.backgroundColor="white";
      document.getElementById("tab-"+2).style.backgroundColor="white";
      document.getElementById("tab-"+3).style.backgroundColor="white";
      document.getElementById("tab-"+idx).style.backgroundColor="#EEEEEE";
      this.value = idx
    }
  }

  changeStatus = () => {
    this.status = true;
  }
}
