import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/models/IUser.interface';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  user: IUser;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAuthenticatedUser().subscribe(
      (res: any) => {
        this.user = res;
      },
      (error: any) => {}
    );
  }
}
