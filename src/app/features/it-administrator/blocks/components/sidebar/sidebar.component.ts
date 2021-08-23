import { Component, OnInit } from '@angular/core';
import { SignoutService } from 'src/app/core/services/signout/signout.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class ItAdministratorSidebarComponent implements OnInit {
  constructor(private signoutService: SignoutService) {}

  ngOnInit(): void {}

  signout() {
    this.signoutService.signout();
  }
}
