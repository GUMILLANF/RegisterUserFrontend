import { Component, Input } from '@angular/core';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-unverified-user',
  templateUrl: './unverified-user.component.html',
  styleUrls: ['./unverified-user.component.css']
})
export class UnverifiedUserComponent {

  @Input() public user: User;
  public informEmail: boolean;

  constructor(private router: Router, private userService: UsuarioService) {

  }

  enableEmail() {
    this.informEmail = !this.informEmail;
  }

  resendEmail() {
    this.userService.resendEmail(this.user).subscribe(data => {
      localStorage.clear();
      this.router.navigate(['login']);
    });
  }

}
