import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  url = "http://tindiostag.tindio.com/api/home";
  items_per_page = 24;
  constructor(private http: HttpClient) { }
  getData(id, items_per_page) {
    return this.http.get(this.url, {
      params: {
        items_per_page: items_per_page,
        page: id
      }
    })
  }
}
