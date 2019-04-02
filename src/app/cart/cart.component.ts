import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { HttpService } from '../../shared-service/http.service';

export interface IBike {
  id?: number;
  image: string;
  price: number;
  quantity: number;
  description: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  bikes: Array<IBike> = [];
  myName = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService,
    private http: HttpService
  ) { }

  async ngOnInit() {
    await this.postItem();
    await this.getItem();
    await this.updateItem(1, {
      make: 'Mitsubishi',
      model: 'Eclipse'
    });
    await this.deleteItem(33);
  }

  async getItem() {
    const resp = await this.http.get('car');
    console.log('from cart resp of car', resp);
    return resp;
  }

  async postItem() {
    const resp = await this.http.post('car', {
      make: 'Toyota',
      model: 'Avalon'
    });
  }

  async updateItem(id, payload) {
    const resp = await this.http.put('car/id/' + id, payload);
    console.log('from update resp', resp);
  }

  async deleteItem(id) {
    const resp = await this.http.delete('car/id/' + id);
    console.log('from deleteItem resp: ', resp);
  }
}
