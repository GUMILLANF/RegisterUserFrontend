import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-sent',
  templateUrl: './email-sent.component.html',
  styleUrls: ['./email-sent.component.css']
})
export class EmailSentComponent implements OnInit {

  public emailAddress: string;
  public seconds: number = 10;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.emailAddress = localStorage.getItem("email");
    localStorage.removeItem("email");
    this.setContador();
  }

  setContador() {
    setInterval(() => {
      --this.seconds;
      if (this.seconds === 0) {
        this.router.navigate(['login']);
      }
    }, 1000);
  }

}
