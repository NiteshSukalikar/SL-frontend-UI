import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { RecordMessageModalComponent } from './record-message-modal/record-message-modal.component';
import { DatabaseModalComponent } from './database-modal/database-modal.component';
@Component({
  selector: 'app-edit-participant',
  templateUrl: './edit-participant.component.html',
  styleUrls: ['./edit-participant.component.scss'],
})
export class EditParticipantComponent implements OnInit {
  recordMessageModal = RecordMessageModalComponent;
  databaseModal = DatabaseModalComponent;

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}
  openRecordMessageModal() {
    this.modalRef = this.modalService.show(this.recordMessageModal, {
      class: 'modal-md record-msg-modal',
    });
  }
  openDatabaseModal() {
    this.modalRef = this.modalService.show(this.databaseModal, {
      class: 'modal-lg database-modal',
    });
  }
}
