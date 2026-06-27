import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AddStudentComponent } from './students/add-student/add-student.component';
import { ViewStudentComponent } from './students/view-student/view-student.component';

import { AddCourseComponent } from './courses/add-course/add-course.component';
import { ViewCourseComponent } from './courses/view-course/view-course.component';

import { AddResultsComponent } from './results/add-result/add-result.component';
import { ViewResultsComponent } from './results/view-result/view-result.component';

export const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  { path: 'dashboard', component: DashboardComponent },

  { path: 'add-student', component: AddStudentComponent },

  { path: 'view-student', component: ViewStudentComponent },

  { path: 'add-course', component: AddCourseComponent },

  { path: 'view-course', component: ViewCourseComponent },

  { path: 'add-result', component: AddResultsComponent },

  { path: 'view-result', component: ViewResultsComponent },

  { path: '**', redirectTo: 'login' }

];