import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddNewNonProcedureModalComponent } from './add-new-non-procedure-modal/add-new-non-procedure-modal.component';

@Component({
  selector: 'app-begin-study',
  templateUrl: './begin-study.component.html',
  styleUrls: ['./begin-study.component.scss'],
})
export class BeginStudyComponent implements OnInit {
  modalRef?: BsModalRef;
  AddNewNonProcedureModalComponent = AddNewNonProcedureModalComponent;
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}
  openModal() {
    this.modalRef = this.modalService.show(
      this.AddNewNonProcedureModalComponent,
      {
        class: 'modal-md',
      }
    );
  }
}
