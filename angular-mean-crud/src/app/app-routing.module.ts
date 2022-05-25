import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmpDetailComponent } from './components/emp-detail/emp-detail.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-employee' },
  { path: 'emp-list', component: EmpListComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'edit-emp/:id', component: EmpDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
