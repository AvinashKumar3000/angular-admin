import { AppComponent } from './../../app.component';
import { AdminService } from './../../service/admin.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private service: AdminService) { }

  ngOnInit(): void {
  }

  authData: any = {
    id:'',
    username: "",
    password: ""
  }

  @Output()
  changeStatus = new EventEmitter();

  onAuthDataChange(event, id: string) {
    this.authData[id] = event.target.value;
  }
  async onAuthSubmit() {
    if (this.authData.username === "" || this.authData.password === "") {
      window.alert("input field is empty")
    }
    else {
      console.log(this.authData)
      const output = await this.service.auth(this.authData.id,this.authData.username, this.authData.password)
      if (output) {
        this.service.status = true;
        localStorage.setItem("companyId",this.authData.id)
        this.changeStatus.emit()
      } else {
        window.alert('authentication failed')
      }
    }

  }
}
