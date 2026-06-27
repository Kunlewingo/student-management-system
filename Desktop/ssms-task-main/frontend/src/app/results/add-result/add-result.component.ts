import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-result',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './add-result.component.html'
})
export class AddResultsComponent {

  studentName = '';

  course = '';

  score = 0;

  grade = '';

  results: any[] = [];

  calculateGrade() {

    if (this.score >= 80) {

      this.grade = 'A';

    } else if (this.score >= 70) {

      this.grade = 'B';

    } else if (this.score >= 60) {

      this.grade = 'C';

    } else if (this.score >= 50) {

      this.grade = 'D';

    } else {

      this.grade = 'F';
    }
  }

  addResult() {

    this.calculateGrade();

    const result = {

      studentName: this.studentName,
      course: this.course,
      score: this.score,
      grade: this.grade
    };

    const existingResults =
      JSON.parse(localStorage.getItem('results') || '[]');

    existingResults.push(result);

    localStorage.setItem(
      'results',
      JSON.stringify(existingResults)
    );

    alert('Result Added Successfully');

    this.studentName = '';
    this.course = '';
    this.score = 0;
    this.grade = '';
  }
}