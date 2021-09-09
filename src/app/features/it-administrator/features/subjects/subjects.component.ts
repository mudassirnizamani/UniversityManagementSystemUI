import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ISubject } from 'src/app/core/models/ISubject.interface';
import { SubjectService } from 'src/app/core/services/subject/subject.service';
import { IAddSubject } from '../../models/IAddSubject.interface';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
})
export class SubjectsComponent implements OnInit {
  subjects: ISubject[];
  display: boolean = false;
  name: string;

  constructor(
    private subjectService: SubjectService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.subjectService.getSubjects().subscribe(
      (res: any) => {
        this.subjects = res;
      },
      (error: any) => {}
    );
  }

  showDialog() {
    this.display = true;
  }

  addSubject() {
    var model: IAddSubject = {
      name: this.name,
    };
    this.subjectService.addSubject(model).subscribe(
      (res: any) => {
        this.display = false;
        this.toastr.success('Subject added Successfully');
      },
      (error: any) => {
        this.display = false;
        this.toastr.success('Subject added Successfully');
      }
    );
  }
}
