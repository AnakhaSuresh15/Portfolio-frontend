import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor(private http: HttpClient) {}

  isDarkMode = false;
  private apiUrl = 'http://localhost:5000/send';

  setIsDarkMode(val: boolean) {
    this.isDarkMode = val;
  }

  getIsDarkMode() {
    return this.isDarkMode;
  }

  sendMessage(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}
