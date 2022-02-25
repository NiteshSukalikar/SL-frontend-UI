import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-audit-log-modal',
  templateUrl: './audit-log-modal.component.html',
  styleUrls: ['./audit-log-modal.component.scss'],
})
export class AuditLogModalComponent implements OnInit {
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}
  close(): void {
    console.log('this.modalRef', this.modalRef);
    this.modalRef?.hide();
  }
}
