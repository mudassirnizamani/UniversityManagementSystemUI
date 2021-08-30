import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/core/models/IUser.interface';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-users-profiles',
  templateUrl: './users-profiles.component.html',
  styleUrls: ['./users-profiles.component.scss'],
})
export class UsersProfilesComponent implements OnInit {
  userName: string;
  userData: IUser;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userName = this.route.snapshot.params['username'];

    this.userService
      .getUserByUserName(this.userName)
      .subscribe((res: any) => {
        this.userData = res.user;
        console.log(this.userData)
      });
  }
}
