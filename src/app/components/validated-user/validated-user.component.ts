import { Component, Input } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-validated-user',
  templateUrl: './validated-user.component.html',
  styleUrls: ['./validated-user.component.css']
})
export class ValidatedUserComponent {

  @Input() public user: User;

}
