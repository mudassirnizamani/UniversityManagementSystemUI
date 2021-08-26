import { Component, OnInit } from '@angular/core';
import { SignoutService } from 'src/app/core/services/signout/signout.service';

@Component({
  selector: 'student-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class StudentSidebarComponent implements OnInit {
  constructor(private signoutService: SignoutService) {}

  ngOnInit(): void {}

  signout() {
    this.signoutService.signout();
  }
}
