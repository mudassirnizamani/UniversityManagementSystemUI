import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IDean } from 'src/app/core/models/IDean.interface';
import { IDepartment } from 'src/app/core/models/IDepartment.interface';
import { IFaculty } from 'src/app/core/models/IFaculty.interface';
import { DepartmentService } from 'src/app/core/services/department/department.service';
import { FacultyService } from 'src/app/core/services/faculty/faculty.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { IAddDepartmentToFaculty } from '../../models/IAddDepartmentToFaculty';

@Component({
  selector: 'app-faculty-edit',
  templateUrl: './faculty-edit.component.html',
  styleUrls: ['./faculty-edit.component.scss'],
})
export class FacultyEditComponent implements OnInit {
  id: string;
  faculty: IFaculty;
  departments: IDepartment[];
  facultyDepartments: IDepartment[];
  display: boolean = false;
  departmentId: string;
  dean: IDean;

  constructor(
    private route: ActivatedRoute,
    private facultyService: FacultyService,
    private departmentService: DepartmentService,
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.facultyService.getFacultyById(this.id).subscribe(
      (res: any) => {
        this.faculty = res;
        this.userService.GetUserById(this.faculty.deanId).subscribe(
          (res: any) => {
            this.dean = res;
          },
          (error: any) => {}
        );
      },
      (error: any) => {}
    );

    this.departmentService.getDepartments().subscribe((res: any) => {
      this.departments = res;
      console.log(res);
    });

    this.departmentService.getDepartmentsOfFaculty(this.id).subscribe(
      (res: any) => {
        this.facultyDepartments = res;
      }
    )
  }

  onDelete() {
    this.facultyService.deleteFacultyById(this.faculty.id).subscribe(
      (res: any) => {
        this.toastr.success('Successfully Deleted');
        this.router.navigateByUrl('/itadministrator/faculties');
      },
      (err: any) => {
        this.toastr.success('Successfully Deleted');
        this.router.navigateByUrl('/itadministrator/faculties');
      }
    );

  }

  onDisplay() {
    this.display = true;
  }

  addDepartment() {
    var model: IAddDepartmentToFaculty = {
      departmentId: this.departmentId,
      facultyId: this.id,
    };
    this.departmentService.addDepartmentToFaculty(model).subscribe(
      (res: any) => {
        this.display = false;
        this.toastr.success('Added Successfully');
      },
      (err: any) => {
        this.display = false;
        this.toastr.success('Added Successfully');
      }
    );
  }
}
