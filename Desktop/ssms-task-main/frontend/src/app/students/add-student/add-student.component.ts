import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-student.component.html'
})
export class AddStudentComponent {

  student = {
    name: '',
    email: '',
    phone: '',
    course: '',
    dateRegistered: ''
  };

  constructor(private router: Router) {}

  addStudent(): void {

    const students = JSON.parse(localStorage.getItem('students') || '[]');

    students.push({
      ...this.student
    });

    localStorage.setItem('students', JSON.stringify(students));

    alert('Student added successfully.');

    this.student = {
      name: '',
      email: '',
      phone: '',
      course: '',
      dateRegistered: ''
    };

    this.router.navigate(['/view-student']);
  }

}