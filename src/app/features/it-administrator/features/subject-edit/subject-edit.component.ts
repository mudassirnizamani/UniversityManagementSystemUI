import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IDepartment } from 'src/app/core/models/IDepartment.interface';
import { ISubject } from 'src/app/core/models/ISubject.interface';
import { DepartmentService } from 'src/app/core/services/department/department.service';
import { SubjectService } from 'src/app/core/services/subject/subject.service';

@Component({
  selector: 'app-subject-edit',
  templateUrl: './subject-edit.component.html',
  styleUrls: ['./subject-edit.component.scss'],
})
export class SubjectEditComponent implements OnInit {
  id: string;
  department: IDepartment;
  subject: ISubject;

  constructor(
    private route: ActivatedRoute,
    private subjectService: SubjectService,
    private departmentService: DepartmentService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.subjectService.getSubjectById(this.id).subscribe(
      (res: any) => {
        this.subject = res;
      },
      (error: any) => {}
    );
  }

  onDelete() {
    this.subjectService.deleteSubjectById(this.subject.id).subscribe(
      (res: any) => {
        this.toastr.success('Successfully Deleted');
        this.router.navigateByUrl('/itadministrator/subjects');
      },
      (err: any) => {
        this.toastr.success('Successfully Deleted');
        this.router.navigateByUrl('/itadministrator/subjects');
      }
    );
  }
}
