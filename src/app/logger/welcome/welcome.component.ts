import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  username = '';

  constructor( private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.username = this.router.snapshot.params.username;
  }

}
