import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IDepartment } from 'src/app/core/models/IDepartment.interface';
import { IUser } from 'src/app/core/models/IUser.interface';
import { DepartmentService } from 'src/app/core/services/department/department.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { ICourseAdviserAuth } from 'src/app/features/auth/models/ICourseAdviserAuth.interface';
import { IAddDepartment } from '../../models/IAddDepartment.interface';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss'],
})
export class DepartmentsComponent implements OnInit {
  departments: IDepartment[];
  display: boolean = false;
  name: string;
  hods: IUser[];
  hodId: string;
  courseAdviserId: string;
  courseAdvisers: IUser[];

  constructor(
    private departmentService: DepartmentService,
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe(
      (res: any) => {
        this.departments = res;
      },
      (err: any) => {}
    );

    this.userService.getCourseAdvisers().subscribe(
      (res: any) => {
        this.courseAdvisers = res;
      },
      (error: any) => {}
    );

    this.userService.getHeadOfDepartments().subscribe(
      (res: any) => {
        this.hods = res;
      },
      (error: any) => {}
    );
  }

  showDialog() {
    this.display = true;
    console.log(this.courseAdviserId);
    console.log(this.hodId);
  }

  addDepartment() {
    var model: IAddDepartment = {
      courseAdvicerId: this.courseAdviserId,
      headOfDepartmentId: this.hodId,
      name: this.name,
    };
    console.log(model);
    console.log(this.courseAdviserId);
    console.log(this.hodId);
    this.departmentService.addDepartment(model).subscribe(
      (res: any) => {
        this.display = false;
        this.toastr.success('Faculty added Successfully');
      },
      (error: any) => {
        this.display = false;
        this.toastr.success('Faculty added Successfully');
      }
    );
  }
}
