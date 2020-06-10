import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AuthTokenService } from 'src/app/services/auth-token.service';

@Component({
  selector: 'app-validating-user',
  templateUrl: './validating-user.component.html',
  styleUrls: ['./validating-user.component.css']
})
export class ValidatingUserComponent implements OnInit {

  public seconds: number = 10;
  public token: string;
  public login: string;
  public enablePage: boolean = false;
  public message: string = '';

  constructor(private route: ActivatedRoute, private authTokenService: AuthTokenService,
    private userService: UsuarioService,private router: Router) { 
      this.route.params.subscribe(params => this.token = params['token']);
      localStorage.setItem('token', this.token);
      this.login = this.authTokenService.decodePayloadJWT().sub
  }

  setContador() {
    setInterval(() => {
      --this.seconds;
      if (this.seconds === 0) {
        this.router.navigate(['home']);
      }
    } , 1000);
  }

  ngOnInit(): void {
    this.validarUser();
  }

  validarUser() {
    this.userService.validarUser(this.login).subscribe(data => {
      this.setContador();
      this.enablePage = true;
    }, () => this.message = 'Link Inválido ou Expirado. Faça o login e envie um novo email com link de validação.');
  }

}
