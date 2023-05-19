import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from './user.service';
 
@Component({
  selector: 'app-child',
  template: `
    <div class="container">
      <table class="table table-hover table-sm table-responsive">
        <thead class="table-dark">
          <tr>
            <th>Sl#</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Profile</th>
            <th>EmailID</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor='let user of data.data;index as idx'>
            <td>{{ idx+1 }}</td>
            <td>{{ user.first_name }}</td>
            <td>{{ user.last_name }}</td>
            <td>
              <img [src]="user.avatar" width="70" [alt]="user.first_name">
            </td>
            <td>{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: [
  ]
})
export class ChildComponent implements OnInit{
  data : any = {};

  constructor(private userService : UserService){
    //empty
  }
  ngOnInit(){
    this.userService.getData().subscribe(res => this.data = res);
  }
}