import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { Subject } from 'rxjs';
import { HttpService } from '../../shared-service/http.service';

export interface IUser {
  id?: number;
  username: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: IUser = { username: null, password: null };
  constructor(
    private router: Router,
    private toastService: ToastService,
    private http: HttpService
  ) {
  }

  ngOnInit() {

  }

  async login() {
    const test = {
      email: 'lphan@shift3tech.com',
      password: 'abc123'
    };

    const user = await this.http.post('user/login', test);
    console.log('from login user...', user.token);
    if (user) {
      localStorage.setItem('id_token', user.token);
      this.router.navigate(['']);
    }
  }

}
