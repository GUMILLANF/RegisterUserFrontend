import { Component, OnInit } from '@angular/core';
import { AuthTokenService } from '../../services/auth-token.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user: User;

  constructor(private authTokenService: AuthTokenService,
    private userService: UsuarioService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userService.consultarUser(this.authTokenService.decodePayloadJWT().sub)
      .subscribe((user: User) => {
        this.user = user;
      })
  }

  validatedUser(): boolean {
    return (this.user.status === 'VALIDADO' ? true : false);
  }

}
