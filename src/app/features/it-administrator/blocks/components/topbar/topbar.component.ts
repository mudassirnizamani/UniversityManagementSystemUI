import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user/user.service';

// Declaring some javascript functions - Mudasir Ali
declare const toggle_sidebar_2: any;

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class ItAdministratorTopbarComponent implements OnInit {
  profilePic: string;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    toggle_sidebar_2();
    this.userService.getAuthenticatedUser().subscribe(
      (res: any) => {
        this.profilePic = res.profilePic;
      },
      (err) => {}
    );
  }
}
