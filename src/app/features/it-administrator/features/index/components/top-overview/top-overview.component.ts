import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DepartmentService } from 'src/app/core/services/department/department.service';
import { FacultyService } from 'src/app/core/services/faculty/faculty.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-top-overview',
  templateUrl: './top-overview.component.html',
  styleUrls: ['./top-overview.component.scss'],
})
export class TopOverviewComponent implements OnInit {
  usersCount: number;
  facultiesCount: number;
  departmentsCount: number;

  constructor(
    private userService: UserService,
    private facultyService: FacultyService,
    private departmentService: DepartmentService
  ) {}

  ngOnInit(): void {
    this.userService.getUsersCount().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.usersCount = res.count;
        }
      },
      (error: any) => {}
    );

    this.facultyService.getFacultiesCount().subscribe(
      (res: any) => {
        this.facultiesCount = res;
      },
      (error: any) => {}
    );

    this.departmentService.getDepartmentsCount().subscribe((res: any) => {
      this.departmentsCount = res;
    });
  }
}
