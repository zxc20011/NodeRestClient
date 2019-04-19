import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { HttpService } from '../../shared-service/http.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  constructor(
    private router: Router,
    private toastService: ToastService,
    private http: HttpService
  ) { }

  ngOnInit() {
  }

  showAbout() {
    this.toastService.showToast('success', 7000, 'This application was created by Zhihong Liang (C).');
    this.http.testing();
  }

}
