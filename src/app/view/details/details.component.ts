import { AdminService } from './../../service/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private service:AdminService) {
    this.data = {
      id: localStorage.getItem('companyId'),
      yourname: "",
      username: "",
      pass: "",
      websiteLink: "",
      location: "",
      startDate: "",
      ceo: "",
      profileLink: "",
      groupId: ""
    } 
  }

  ngOnInit(): void {
    this.get()
  }

  data:any
  repeat:string = ""

  get = async () => {
      const companyId:any = localStorage.getItem("companyId");
      const res = await this.service.getData(companyId);
      this.data = res
  }

  update = async () => {
    // update code
    const res = this.service.updateData(this.data)
    window.alert("data updated")
  }

  resetPass = () => {
    // reset password
    if( this.data.pass === this.repeat ){
      const res = this.service.updateData(this.data);
      window.alert("password changed")
    }else{
      window.alert("repeat password incorrect")
    }
  }

}

