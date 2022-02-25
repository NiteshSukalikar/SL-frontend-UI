import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerLinks } from 'src/app/shared/constants/routerLinks';
import { sponsorConstant } from 'src/app/shared/constants/sponsorConstant';
import { encryption } from 'src/app/shared/genericFunctions/encryptionFun';
import { HttpStatusCode } from 'src/app/shared/models/HttpStatusCode';
import { NotificationService } from 'src/app/utilities/_services/notification.service';
import { SponsorService } from 'src/app/utilities/_services/sponsor.service';

@Component({
  selector: 'app-manage-sponsor',
  templateUrl: './manage-sponsor.component.html',
  styleUrls: ['./manage-sponsor.component.scss']
})
export class ManageSponsorComponent implements OnInit {
  tempItem: any;
  p: number = 1;
  collection: any[];

  constructor(private router: Router, private sponsorService: SponsorService, private notificationService: NotificationService) { }

  ngOnInit() {
    this.getSponsorList();
  }

  getSponsorList() {
    this.sponsorService.GetSponsorList().subscribe(res => {
      if (res) {
        if (res.data && res.statusCode.toString() == HttpStatusCode.StatusCode200) {
          this.tempItem = res.data.organizations
        }
      }
    })
  }

  onSearchSponsor(event: any): void {
    this.sponsorService.searchOrganization(event.target.value).subscribe(res => {
      if (res) {
        if (res.statusCode.toString() == HttpStatusCode.StatusCode200) {
          this.tempItem = res.data.organizations
        }
      }
    })
  }

  addSponsorToList() {
    this.router.navigate(['user/add-sponsor'])
  }

  edit(item: any) {
    // this.sponsorService.setSponsor(item);
    let EncryptedID = encryption(item.organizationID)
    this.router.navigate([routerLinks.AddSponsor, EncryptedID, "Edit"]);
  }

  view(item: any) {
    let EncryptedID = encryption(item.organizationID)
    this.router.navigate([routerLinks.AddSponsor, EncryptedID, "View"]);
  }

  delete(item: any) {
    this.sponsorService.deleteSponsor(item.organizationID).subscribe(res => {
      if (res) {
        this.notificationService.success(sponsorConstant.sponsorIsDeleted);
        this.getSponsorList();
      }
    })
  }
}

