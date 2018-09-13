import { DataService } from './services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  issedit: boolean = false;
  user = {
    id: '',
    name: '',
    email: '',
    phone: ''
  };
  //title = 'app';
  //users: string[];
  data: any[] = [];
  users: any[];
  constructor(public datasservice: DataService) {
    //this.users = this.datasservice.getUser();
    // this.datasservice.getData().subscribe(data => {
    //   console.log(data);
    //   this.data.push(data);
    // });
    this.datasservice.getuserjson().subscribe(users => {
      this.users = users;
      console.log(users);
    });
  }

  onSubmit(issedit) {
    if (issedit) {
      this.datasservice.updateUser(this.user).subscribe(user => {
        for (let i = 0; i < this.users.length; i++) {
          if (this.users[i].id == this.user.id) {
            this.users.splice(i, 1);
          }
        }
        this.users.unshift(this.user);
      });
    } else {
      this.datasservice.addUsers(this.user).subscribe(user => {
        this.users.unshift(user);
      });
    }
  }

  onDeleteClick(id) {
    this.datasservice.deleteUser(id).subscribe(res => {
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id == id) {
          this.users.splice(i, 1);
        }
      }
    });
  }

  onUpdateClick(user) {
    this.issedit = true;
    this.user = user;
  }
}
