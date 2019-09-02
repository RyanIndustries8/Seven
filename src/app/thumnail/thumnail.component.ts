import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thumnail',
  templateUrl: './thumnail.component.html',
  styleUrls: ['./thumnail.component.css']
})
export class ThumnailComponent implements OnInit {

  constructor( private route: ActivatedRoute, private router: Router, private http: HttpClient, public sanitizer: DomSanitizer ) {
    this.sanitizer = sanitizer;
  }

  modelwork: any;

  ngOnInit() {
    this.http.get<any>('./assets/json/cards.json').subscribe(
      data => {
        this.modelwork = data;
    });
  }

}
