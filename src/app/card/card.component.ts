import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-card',
  animations: [
    trigger('clickevent', [
      transition(':enter', [
        style({transform: 'translateX(0)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: .75}))
      ]),
      transition(':leave', [
          style({transform: 'translateX(0)', opacity: .75}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 0}))
        ])
    ])
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  menu = true;
  arts = false;
  menuOpen = false;
  history = false;
  sins = false;

  modelwork: any;
  his: any;
  liturature: any;

  constructor( private route: ActivatedRoute, private router: Router, private http: HttpClient, public sanitizer: DomSanitizer ) {
    this.sanitizer = sanitizer;
  }

  ngOnInit(): void {

    // Cards
    this.http.get<any>('./assets/json/cards.json').subscribe(
      data => {
        this.modelwork = data;
    })

    // History
    this.http.get<any>('./assets/json/history.json').subscribe(
      data => {
        this.his = data;
    })

    // Liturature
    this.http.get<any>('./assets/json/lit.json').subscribe(
      data => {
        this.liturature = data;
    })

  }

  rotateCards() {
    // x & y positioning of boxes
    const windowW = window.innerWidth;
    const windowH = window.innerHeight;

    const winWidthAdjustment = windowW - 360;
    const winHeightAdjustment = windowH - 360;

    const randWidth = Math.floor(Math.random() * winWidthAdjustment);
    const randHeight = Math.floor(Math.random() * winHeightAdjustment);

    // Boolean for whether the number is positive or negative
    const randSign = Math.random() < 0.5 ? -1 : 1;

    // Randomize rotate degree
    const randRotation = Math.random() * 60 * randSign;
    const styles = {
      left: randWidth + 'px',
      top: randHeight + 'px',
      transform: 'rotate(' + randRotation + 'deg)'
    };

    return styles;

  }


  toggleMenu() {
    this.menuOpen = false;
    this.menu = true;
    this.history = false;
    this.arts = false;
    this.sins = false;
  }

  toggleSin() {
    this.menuOpen = true;
    this.menu = false;
  }

  toggleHistory() {
    this.menuOpen = true;
    this.menu = false;
    this.history = true;
  }

  toggleArts() {
    this.menuOpen = true;
    this.menu = false;
    this.arts = true;
  }

  viewSin() {
    this.sins = true;
  }

}
