import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IDean } from 'src/app/core/models/IDean.interface';
import { IFaculty } from 'src/app/core/models/IFaculty.interface';
import { FacultyService } from 'src/app/core/services/faculty/faculty.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { IAddFaculty } from '../../models/IAddFaculty.inteface';

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.scss'],
})
export class FacultiesComponent implements OnInit {
  faculties: IFaculty[];
  display: boolean = false;
  Name: string;
  deans: IDean[];
  deanId: string;

  constructor(
    private facultyService: FacultyService,
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.facultyService.getFaculties().subscribe(
      (res: any) => {
        this.faculties = res;
      },
      (error) => {}
    );

    this.userService.gerDeans().subscribe(
      (res: any) => {
        console.log(res);
        this.deans = res;
      },
      (error: any) => {}
    );
  }
  showDialog() {
    this.display = true;
  }

  addFaculty() {
    var model: IAddFaculty = {
      deanId: this.deanId,
      name: this.Name,
    };
    this.facultyService.addFaculty(model).subscribe(
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
