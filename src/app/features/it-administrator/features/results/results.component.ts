import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ICreateResult } from 'src/app/core/models/ICreateResult.interface';
import { IDepartment } from 'src/app/core/models/IDepartment.interface';
import { IResult } from 'src/app/core/models/IResult.interface';
import { IStudent } from 'src/app/core/models/IStudent.interface';
import { ISubject } from 'src/app/core/models/ISubject.interface';
import { DepartmentService } from 'src/app/core/services/department/department.service';
import { ResultService } from 'src/app/core/services/result/result.service';
import { SubjectService } from 'src/app/core/services/subject/subject.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  results: IResult[];
  display: boolean = false;

  semester: string;
  year: string;
  marks: string;
  percentage: string;
  grade: string;
  student: IStudent;
  department: IDepartment;
  subject: ISubject;

  students: IStudent[];
  departments: IDepartment[];
  subjects: ISubject[];

  constructor(
    private resultService: ResultService,
    private userService: UserService,
    private departmentService: DepartmentService,
    private subjectService: SubjectService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.resultService.getResults().subscribe((res: any) => {
      this.results = res;
    });

    this.userService.getStudents().subscribe((res: any) => {
      this.students = res;
    });

    this.departmentService.getDepartments().subscribe((res: any) => {
      this.departments = res;
    });

    this.subjectService.getSubjects().subscribe((res: any) => {
      this.subjects = res;
    });
  }

  showDialog() {
    this.display = true;
  }

  addResult() {
    var model: ICreateResult = {
      departmentId: this.department.id,
      departmentName: this.department.name,
      grade: this.grade,
      marks: this.marks,
      percentage: this.percentage,
      semester: this.semester,
      studentId: this.student.id,
      studentName: this.student.userName,
      subjectId: this.subject.id,
      subjectName: this.subject.name,
      year: this.year,
    };
    this.resultService.addResult(model).subscribe(
      (res: any) => {
        this.display = false;
        this.toastr.success('Department added Successfully');
      },
      (error: any) => {
        this.display = false;
        this.toastr.success('Department added Successfully');
      }
    );
  }
}
