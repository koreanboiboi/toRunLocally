import { Component, OnInit, Output } from '@angular/core';

import { SpotifyAuthService } from './spotify-auth.service';
import { SpotifyService } from './spotify.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private spotAuthSvc: SpotifyAuthService, private spotSvc: SpotifyService){}

  ngOnInit(): void {
    this.spotAuthSvc.requestAccessToken();

  }



  paypalMe(){
    window.open('https://www.paypal.me/koreanboiboi','_blank')
  }

}
