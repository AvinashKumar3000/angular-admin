import { EmployeeService } from './service/employee.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EmployeesComponent } from './view/employees/employees.component';
import { DetailsComponent } from './view/details/details.component';
import { PostComponent } from './view/post/post.component';
import { PodcastComponent } from './view/podcast/podcast.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PodcastFormComponent } from './components/podcast-form/podcast-form.component';
import { AuthComponent } from './view/auth/auth.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { DisplayEmployeeComponent } from './components/display-employee/display-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    EmployeesComponent,
    DetailsComponent,
    PostComponent,
    PodcastComponent,
    PostFormComponent,
    PodcastFormComponent,
    AuthComponent,
    CreateEmployeeComponent,
    DisplayEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})

export class AppModule { }
