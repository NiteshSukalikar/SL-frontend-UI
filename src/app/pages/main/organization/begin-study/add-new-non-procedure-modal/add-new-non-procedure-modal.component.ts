import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-new-non-procedure-modal',
  templateUrl: './add-new-non-procedure-modal.component.html',
  styleUrls: ['./add-new-non-procedure-modal.component.scss'],
})
export class AddNewNonProcedureModalComponent implements OnInit {
  modalRef?: BsModalRef;
  constructor() { }

  ngOnInit(): void { }
  closeDialog(): void {
    this.modalRef?.hide();
  }
}
