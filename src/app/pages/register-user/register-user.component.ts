import { Component } from '@angular/core';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {

  user = new User();

  constructor(
    private router: Router,
    private userService: UsuarioService) { }

  salvarUser() {
    this.userService.salvarUser(this.user).subscribe(data => {
      localStorage.setItem("email", this.user.email);
      this.router.navigate(['registered']);
    });
  }

}
