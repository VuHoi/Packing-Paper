import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  callContact(form: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    // tslint:disable-next-line:max-line-length
    return this.http.post('https://script.google.com/macros/s/AKfycbxPhugwiyFKLlivW16DmDRw6G-glo_nGhIFq0Gcc5E8SM0NAug/exec', { email: 'toilahoi@gmail.com' }, httpOptions)
      .subscribe((e) => {
        console.log(e);
      }, err => console.log(err));
  }
}
