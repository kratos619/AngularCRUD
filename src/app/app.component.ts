import { DataService } from './services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  //users: string[];
  data: any[] = [];

  constructor(public datasservice: DataService) {
    //this.users = this.datasservice.getUser();
    this.datasservice.getData().subscribe(data => {
      console.log(data);
      this.data.push(data);
    });
  }
}
