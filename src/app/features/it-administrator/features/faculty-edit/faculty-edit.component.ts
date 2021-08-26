import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IDean } from 'src/app/core/models/IDean.interface';
import { IFaculty } from 'src/app/core/models/IFaculty.interface';
import { FacultyService } from 'src/app/core/services/faculty/faculty.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-faculty-edit',
  templateUrl: './faculty-edit.component.html',
  styleUrls: ['./faculty-edit.component.scss'],
})
export class FacultyEditComponent implements OnInit {
  id: string;
  faculty: IFaculty;
  dean: IDean;
  constructor(
    private route: ActivatedRoute,
    private facultyService: FacultyService,
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
            console.log(res);
          },
          (error: any) => {}
        );
      },
      (error: any) => {}
    );
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
}
