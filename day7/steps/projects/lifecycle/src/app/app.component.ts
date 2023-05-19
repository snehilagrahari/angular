import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 style="text-align:center; color : red;">Reqres.in Users</h1>
    <hr />
    <app-child></app-child>
  `,
  styles: []
})

export class AppComponent {
  title = 'lifecycle';
}
