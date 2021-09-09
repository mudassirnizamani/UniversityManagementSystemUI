import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IDepartment } from 'src/app/core/models/IDepartment.interface';
import { ISubject } from 'src/app/core/models/ISubject.interface';
import { IUser } from 'src/app/core/models/IUser.interface';
import { DepartmentService } from 'src/app/core/services/department/department.service';
import { SubjectService } from 'src/app/core/services/subject/subject.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { IAddSubjectToDepartment } from '../../models/IAddSubjectToDepartment';

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
  subjects: ISubject[];
  departmentSubjects: ISubject[];
  display: boolean = false;
  subjectId: string;

  constructor(
    private route: ActivatedRoute,
    private departmentService: DepartmentService,
    private subjectService: SubjectService,
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

    this.subjectService.getSubjects().subscribe(
      (res: any) => {
        this.subjects = res;
      },
      (error) => {}
    )

    this.subjectService.getSubjectsOfDepartment(this.id).subscribe(
      (res: any) => {
        this.departmentSubjects = res;
        console.log(res)
      },
      (error: any) => {}
    ) 
  }

  onDisplay() {
    this.display = true;
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

  addSubject() {
    var model: IAddSubjectToDepartment = {
      departmentId: this.department.id,
      subjectId: this.subjectId,
    };
    this.subjectService.addSubjectToDepartment(model).subscribe(
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
