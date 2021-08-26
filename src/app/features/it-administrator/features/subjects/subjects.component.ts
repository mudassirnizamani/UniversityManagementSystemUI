import { Component, OnInit } from '@angular/core';
import { ISubject } from 'src/app/core/models/ISubject.interface';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
  subjects: ISubject[];
  constructor() { }

  ngOnInit(): void {
    
  }

}
