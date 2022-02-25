import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CoastingModalComponent } from '../coasting-modal/coasting-modal.component';

@Component({
  selector: 'app-clinical-visit2',
  templateUrl: './clinical-visit2.component.html',
  styleUrls: ['./clinical-visit2.component.scss']
})
export class ClinicalVisit2Component implements OnInit {

  modalRef?: BsModalRef;
  CoastingModalComponent = CoastingModalComponent;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }
  openModal() {
    this.modalRef = this.modalService.show(
      this.CoastingModalComponent,
      {
        class: 'modal-lg modal-flat modal-tabs',
      }
    );
  }
}
