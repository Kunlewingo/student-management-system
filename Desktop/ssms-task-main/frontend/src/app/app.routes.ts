import { Routes } from '@angular/router';

// Dashboard
import { DashboardComponent } from './dashboard/dashboard.component';

// Students
import { AddStudentComponent } from './students/add-student/add-student.component';
import { ViewStudentComponent } from './students/view-student/view-student.component';

// Results
import { AddResultsComponent } from './results/add-result/add-result.component';
import { ViewResultsComponent } from './results/view-result/view-result.component';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  {
    path: 'dashboard',
    component: DashboardComponent
  },

  {
    path: 'add-student',
    component: AddStudentComponent
  },

  {
    path: 'view-student',
    component: ViewStudentComponent
  },

  {
    path: 'add-result',
    component: AddResultsComponent
  },

  {
    path: 'view-result',
    component: ViewResultsComponent
  },

  {
    path: '**',
    redirectTo: 'dashboard'
  }

];