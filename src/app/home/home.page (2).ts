import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myBD = new Date().toLocaleDateString();
  age: number;
  myMonths: number;
  myDays: number;
  months: number[] = [31, 28, 31, 30, 31, 30, 31,
    31, 30, 31, 30, 31];

  // think about life days , months and years to showup

  constructor(private renderer: Renderer2) { }
  toggleTheme(ev) {
    console.log(ev);
    if (ev.detail.checked) {
      this.renderer.setAttribute(document.body, 'color-theme', 'dark');
      // document.body.setAttribute('color-theme', 'dark');
    } else {
      this.renderer.setAttribute(document.body, 'color-theme', 'light');

      // document.body.setAttribute('color-theme', 'light')
    }
  }
  calc() {
    //  For Current Date
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let day = new Date().getDay();

    //  For Birth Date
    const birthYear = new Date(this.myBD).getFullYear();
    const birthMonth = new Date(this.myBD).getMonth() + 1;
    const birthDay = new Date(this.myBD).getDay();


    if (birthDay > day) {
      month -= 1;
      day = day + this.months[birthMonth - 1];
    }
    if (birthMonth > month) {
      year -= 1;
      month += 12;
    }
    // if (this.myMonths < 0 || (this.myDays < 0 && this.myMonths === 0)) {
    //   this.age = this.age - 1;
    // }

    //  For Calculations
    this.myDays = (day - birthDay);
    this.myMonths = month - birthMonth;
    this.age = year - birthYear;
    // // for more sure
    // if (this.myMonths < 0) {
    //   this.myMonths += 12;
    // }

    // if (this.myDays < 0) {
    //   this.myDays += 30;
    //   this.myMonths -= 1;
    // }
  }
}
