import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-record-message-modal',
  templateUrl: './record-message-modal.component.html',
  styleUrls: ['./record-message-modal.component.scss'],
})
export class RecordMessageModalComponent implements OnInit {
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}
  close(): void {
    console.log('this.modalRef', this.modalRef);
    // this.modalRef?.hide();
  }
}
