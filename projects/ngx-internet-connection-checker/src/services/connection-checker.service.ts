import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConnectionCheckerService {
  private connectionStatus: Observable<boolean>;

  constructor() {
    this.connectionStatus = new Observable<boolean>((observer) => {
      window.addEventListener('online', () => observer.next(true));
      window.addEventListener('offline', () => observer.next(false));
    });
  }

  getConnectionStatus(): Observable<boolean> {
    return this.connectionStatus;
  }
}
