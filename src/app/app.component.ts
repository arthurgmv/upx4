import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {Card01Component} from './card01/card01.component';
import {Card02Component} from './card02/card02.component';
import {Card03Component} from './card03/card03.component';
import {Card04Component} from './card04/card04.component';
import {FooterComponent} from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, Card01Component, Card02Component, Card03Component, Card04Component, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UPX4';
}
