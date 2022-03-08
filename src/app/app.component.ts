import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularportfolio';

  // call function
  data = 'my codes';
  num = 900456539370;
  subTitle = 'Property Binding & Interpolation';
  name = 'Toufiq';

  getName(myName: any) {
    alert(myName);
  }
  // call function End

  // Important Event
  myEvent(evt: any) {
    console.log(evt);
  }

  disabledBox = true;
  // Property Binding
  enbleBox() {
    this.disabledBox = false;
  }

  // Condition statement
  // if condition
  firstShow = true;
  secondShow = 'one';
  thirdShow = 123;

  // else condition
  elsecondition = false;

  // Multiple Conditions
  textcolor = 'blue';
  // textcolor="Red";
  // textcolor="Red";

  // switch case
  mycolor = 'bhdfhdfgh';

  // loop
  employee = [
    'Mushfiq',
    'Nadeem',
    'Toufiq',
    'Aasif',
    'Mudasir',
    'wasiq',
    'mufeez',
    'Ibrahim',
  ];
  
  employeeDetails = [
    {
      empid: 2201,
      name: 'Toufiq',
      email: 'toufiq@tss.in',
      phone: 9005868888,
    },
    {
      empid: 2202,
      name: 'Nadeem',
      email: 'nadeem@tss.in',
      phone: 8888888888,
    },
    {
      empid: 2203,
      name: 'Mushfiq',
      email: 'mushfiq@tss.in',
      phone: 55555555555,
    },
    {
      empid: 2204,
      name: 'Aasif',
      email: 'aasif@tss.in',
      phone: 999999999,
    },

  ];
}
