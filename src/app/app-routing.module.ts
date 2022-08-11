import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeComponent } from './pages/add-employe/add-employe.component';
import { EditEmployeComponent } from './pages/edit-employe/edit-employe.component';
import { TableEmployeesComponent } from './pages/table-employees/table-employees.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    component: TableEmployeesComponent
  },
  {
    path: "new",
    component: AddEmployeComponent
  },
  {
    path: "edit/:id",
    component: EditEmployeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
