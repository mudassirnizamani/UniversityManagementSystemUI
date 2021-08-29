import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IDepartment } from 'src/app/core/models/IDepartment.interface';
import { IUser } from 'src/app/core/models/IUser.interface';
import { DepartmentService } from 'src/app/core/services/department/department.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.scss'],
})
export class DepartmentEditComponent implements OnInit {
  id: string;
  department: IDepartment;
  courseAdviser: IUser;
  hod: IUser;

  constructor(
    private route: ActivatedRoute,
    private departmentService: DepartmentService,
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.departmentService.getDepartmentById(this.id).subscribe(
      (res: any) => {
        this.department = res;
        this.userService.GetUserById(this.department.courseAdvicerId).subscribe(
          (res: any) => {
            this.courseAdviser = res;
          },
          (error: any) => {}
        );
        this.userService
          .GetUserById(this.department.headOfDepartmentId)
          .subscribe(
            (res: any) => {
              this.hod = res;
            },
            (error: any) => {}
          );
      },
      (error: any) => {}
    );
  }

  onDelete() {
    this.departmentService.deleteDepartmentById(this.department.id).subscribe(
      (res: any) => {
        this.toastr.success('Successfully Deleted');
        this.router.navigateByUrl('/itadministrator/departments');
      },
      (err: any) => {
        this.toastr.success('Successfully Deleted');
        this.router.navigateByUrl('/itadministrator/departments');
      }
    );
  }
}
