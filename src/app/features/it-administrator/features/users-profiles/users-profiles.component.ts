import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-profiles',
  templateUrl: './users-profiles.component.html',
  styleUrls: ['./users-profiles.component.scss'],
})
export class UsersProfilesComponent implements OnInit {
  userName: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userName = this.route.snapshot.params['username'];
  }
}
