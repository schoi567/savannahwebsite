import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';


const routes: Routes = [
  { path: '',component:MainpageComponent},
  { path: 'about',component:AboutComponent},
  { path: 'careers',component:CareersComponent},
  { path: 'contacts',component:ContactsComponent},
  { path: 'events',component:EventsComponent},
  { path: 'login',component:LoginComponent},
  { path: 'thankyou',component:ThankyouComponent}, 
  { path: 'admin',component:AdminComponent}, 
  { path: 'adminlogin',component:AdminloginComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
