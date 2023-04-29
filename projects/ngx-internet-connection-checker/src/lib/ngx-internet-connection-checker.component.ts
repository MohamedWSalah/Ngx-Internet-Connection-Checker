import { Component, Input, OnInit } from '@angular/core';
import { ConnectionCheckerService } from '../services/connection-checker.service';
import { tap } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { wifi, wifiOff } from './svgicons';
@Component({
  selector: 'ngx-internet-connection-checker',
  template: `
    <ng-container *ngIf="connectionStatusMessage && !isConnected">
      <div class="icc-popup" [ngClass]="{ restored: statusStyle }">
        <span
          class="icon"
          [innerHTML]="statusStyle ? wifiImg : wifiOffImg"
        ></span>
        <span>{{ connectionStatusMessage }}</span>
      </div>
    </ng-container>
  `,
  styleUrls: ['./ngx-internet-connection-checker.css'],
})
export class NgxInternetConnectionCheckerComponent implements OnInit {
  @Input() offlineText: string = 'Internet Connection Lost';
  @Input() onlineText: string = 'Internet Connection Restored';
  public isConnected: boolean = false;
  public statusStyle: boolean = false;
  public connectionStatusMessage: string | null = null;
  public wifiImg: any;
  public wifiOffImg: any;

  constructor(
    private connectionCheckerService: ConnectionCheckerService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.initializeIcons();
    this.subscribeToConnectionStatus();
  }

  initializeIcons(): void {
    this.wifiImg = this.sanitizer.bypassSecurityTrustHtml(wifi);
    this.wifiOffImg = this.sanitizer.bypassSecurityTrustHtml(wifiOff);
  }

  subscribeToConnectionStatus(): void {
    let timeoutId: any;
    this.connectionCheckerService
      .getConnectionStatus()
      .pipe(
        tap((status) => {
          if (!status) {
            clearTimeout(timeoutId);
            this.statusStyle = false;
            this.connectionStatusMessage = this.offlineText;
            this.isConnected = false;
          } else {
            this.statusStyle = true;
            this.connectionStatusMessage = this.onlineText;
            timeoutId = setTimeout(() => {
              this.isConnected = true;
            }, 5000);
          }
        })
      )
      .subscribe();
  }
}
