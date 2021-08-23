import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/models/IUser.interface';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-sidebar-user-card',
  templateUrl: './sidebar-user-card.component.html',
  styleUrls: ['./sidebar-user-card.component.scss'],
})
export class SidebarUserCardComponent implements OnInit {
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
