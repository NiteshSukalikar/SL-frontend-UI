import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AuditLogModalComponent } from '../audit-log-modal/audit-log-modal.component';

@Component({
  selector: 'app-message-center',
  templateUrl: './message-center.component.html',
  styleUrls: ['./message-center.component.scss'],
})
export class MessageCenterComponent implements OnInit {
  messageItem = [0, 0, 0, 0, 0, 0, 0];
  favourite = false;
  modalRef?: BsModalRef;
  auditLogModalComponent = AuditLogModalComponent;
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}
  favouriteHandler() {
    this.favourite = !this.favourite;
  }
  openModal() {
    this.modalRef = this.modalService.show(this.auditLogModalComponent, {
      class: 'modal-xlg record-msg-modal',
    });
  }
}
