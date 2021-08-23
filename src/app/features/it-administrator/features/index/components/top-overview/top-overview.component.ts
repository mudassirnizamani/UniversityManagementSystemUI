import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-top-overview',
  templateUrl: './top-overview.component.html',
  styleUrls: ['./top-overview.component.scss'],
})
export class TopOverviewComponent implements OnInit {
  usersCount: number;

  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.userService.getUsersCount().subscribe(
      (res: any) => {
        console.log(res)
        if (res.succeeded) {
          this.usersCount = res.count;
        }
      },
      (error: any) => {
        console.log(error)
      }
    );
  }
}
