import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sins',
  templateUrl: './sins.component.html',
  styleUrls: ['./sins.component.css']
})
export class SinsComponent implements OnInit {

  chosenIndex: any;
  cards: any;


  constructor( private route: ActivatedRoute, private router: Router, private http: HttpClient, public sanitizer: DomSanitizer ) {
    this.sanitizer = sanitizer;
 }

  public ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
          this.chosenIndex = params['id'];

          this.http.get<any>('./assets/json/cards.json').subscribe(data => {
            this.cards = data.filter(d => d['id'] === this.chosenIndex);
          });
        });
  }

}
