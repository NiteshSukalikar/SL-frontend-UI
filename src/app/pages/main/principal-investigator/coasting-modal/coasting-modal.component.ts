import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-coasting-modal',
  templateUrl: './coasting-modal.component.html',
  styleUrls: ['./coasting-modal.component.scss']
})
export class CoastingModalComponent implements OnInit {
  modalRef?: BsModalRef;
  constructor() { }

  ngOnInit(): void { }
  closeDialog(): void {
    this.modalRef?.hide();
  }

}
