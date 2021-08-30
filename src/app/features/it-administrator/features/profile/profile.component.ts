import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/models/IUser.interface';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userData: IUser;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAuthenticatedUser().subscribe(
      (res: any) => {
        this.userData = res;
      }
    )
  }

}
