import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  consultarUser(login: String): Observable<any> {
    const url = `${AppConstants.baseUser}/${login}`;
    return this.http.get<User>(url);
  }

  salvarUser(user): Observable<any> {
    const url = `${AppConstants.baseNewUser}`;
    return this.http.post<any>(url, user);
  }

  resendEmail(user): Observable<any> {
    const url = `${AppConstants.baseUser}/resendemail/${user.id}`;
    return this.http.put<any>(url, user);
  }

  validarUser(login: String): Observable<any> {
    const url = `${AppConstants.baseUser}/validation/${login}`;
    return this.http.put<any>(url, null);
  }

}
