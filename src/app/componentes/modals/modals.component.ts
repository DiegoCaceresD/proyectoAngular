import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {

  constructor(public modal:NgbModal) { }

  ngOnInit(): void {

  }

  onSubmit(values: any ) {
    console.log('Form values', values )
  }
}
