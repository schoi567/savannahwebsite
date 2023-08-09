import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  { path: '',component:MainpageComponent},
  { path: 'about',component:AboutComponent},
  { path: 'careers',component:CareersComponent},
  { path: 'contacts',component:ContactsComponent},
  { path: 'events',component:EventsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
