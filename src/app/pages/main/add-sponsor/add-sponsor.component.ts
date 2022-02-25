import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationMessages } from 'src/app/shared/constants/notificationMessages';
import { routerLinks } from 'src/app/shared/constants/routerLinks';
import { sponsorConstant } from 'src/app/shared/constants/sponsorConstant';
import { decryption } from 'src/app/shared/genericFunctions/encryptionFun';
import { HttpStatusCode } from 'src/app/shared/models/HttpStatusCode';
import { CommonService } from 'src/app/utilities/_services/common.service';
import { MasterService } from 'src/app/utilities/_services/master.service';
import { NotificationService } from 'src/app/utilities/_services/notification.service';
import { SponsorService } from 'src/app/utilities/_services/sponsor.service';

@Component({
  selector: 'app-add-sponsor',
  templateUrl: './add-sponsor.component.html',
  styleUrls: ['./add-sponsor.component.scss']
})
export class AddSponsorComponent implements OnInit {

  AdminForm: FormGroup;
  SponsorForm: FormGroup;

  activeTab: boolean = true;
  submitted: boolean = false;
  submittedForAdmin: boolean = false;

  isEditSponsor: boolean = false;

  //Upload files variables
  multiFileListForLogo: any[];
  multiFileListForFab: any[];
  dataURL: any;
  fileList: any;
  ext: any;

  imagePreviewForLogo: any;
  imagePreviewForFab: any;

  uploadedfileForLogo: any;
  uploadedfileForFab: any;

  testListForLogo: any[] = [];
  testListForFab: any[] = [];

  isUploadForLogo: boolean = false;
  isUploaddoneForLogo: boolean = true;
  isUploadForFab: boolean = false;
  isUploaddoneForFab: boolean = true;
  organizationId: any;
  editedSponsorID: string | null;
  isStateDisabled: boolean = true;
  StateList: any;
  CountryList: any;
  getLogoFile: any;
  getFavFile: any;
  type: string | null;
  IsViewOnly: boolean = true;

  constructor(private sponsorService: SponsorService, private commonService: CommonService, private notificationService: NotificationService,private masterService: MasterService,
    private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {   
    this.init();
    this.adminInit();
    this.getCountryData();
    this.activatedRoute.paramMap.subscribe(params => {
      this.editedSponsorID = params.get('Id');
      this.type = params.get('Type');
      if (this.editedSponsorID) {
        this.editedSponsorID = decryption(this.editedSponsorID);        
      }
      if (this.editedSponsorID !== null) {
        let obj: any = this.sponsorService.GetSponsor(this.editedSponsorID).subscribe(res => {
          if (res){
            if (res.statusCode === HttpStatusCode.StatusCode200){
              this.updateProfile(res.data,this.type);
              this.getLogoFile = res.data.logoName;
              this.getFavFile = res.data.faviconName;
            }
          }
        });
      }
    });
  }

  updateProfile(obj: any,type:any) {
    if (type == "Edit") {
      this.isEditSponsor = true;
      this.isStateDisabled = false;    
    }
    else
    {
      this.IsViewOnly = false;
      this.isStateDisabled = true;   
      this.SponsorForm.disable();      
    }  

    this.isUploadForLogo = true;
    this.isUploaddoneForLogo = false;
    this.isUploadForFab = true;
    this.isUploaddoneForFab = false;
    
    this.masterService.GetState(obj.countryID).subscribe((result: any) => {
      if (result != null) {
        this.StateList = result.data;
      }
    })
  
    this.SponsorForm.patchValue({
      organizationName: obj.organizationName,
      businessName: obj.businessName,
      emailAddress: obj.emailAddress,
      primaryContactNumber: obj.primaryContactNumber,
      secondaryContactNumber: obj.secondaryContactNumber == null ? "" : obj.secondaryContactNumber,
      address: obj.address,
      stateName: obj.stateName,
      countryID: obj.countryID,
      cityName: obj.cityName
    });
    this.imagePreviewForLogo = obj.logoNameBase64;
    this.imagePreviewForFab = obj.faviconNameBase64;
  }

  adminInit() {
    this.AdminForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      emailAddress: new FormControl('', [Validators.required])
    });
  }

  init(): void {
    this.SponsorForm = new FormGroup({
      organizationName: new FormControl('', Validators.required),
      businessName: new FormControl('', Validators.required),
      emailAddress: new FormControl('', Validators.required),
      primaryContactNumber: new FormControl('', Validators.required),
      secondaryContactNumber: new FormControl(''),
      address: new FormControl('', Validators.required),
      stateName: new FormControl('', Validators.required),
      countryID: new FormControl('', Validators.required),
      cityName: new FormControl('', Validators.required)
    });
  }

  AddAdmin() {
    this.submittedForAdmin = true;
    if (this.AdminForm.invalid) {
      return;
    }
    let adminObj = {
      firstName: this.AdminForm.value.firstName,
      lastName: this.AdminForm.value.lastName,
      emailAddress: this.AdminForm.value.emailAddress,
      organizationsID: this.organizationId
    }
    this.sponsorService.saveAdmin(adminObj).subscribe((response:any) => {
      if (response) {
        if (response.statusCode === HttpStatusCode.StatusCode200) {
          this.notificationService.success(sponsorConstant.sponsorAdminInvite)
          this.AdminForm.reset();
          this.router.navigate([routerLinks.ManageSponsor]);
          this.activeTab = false;
        }
      } else {
        this.notificationService.error(NotificationMessages.invalidError)
      }
    })
   }

  onSubmit(type: string): void {
    if (type == "save") {
      this.submitted = true;
      if (this.SponsorForm.invalid) {
        return;
      }

      let sponsorObj = {
        //organization
        organizationName: this.SponsorForm.value.organizationName,
        businessName: this.SponsorForm.value.businessName,
        address: this.SponsorForm.value.address,
        logoNameBase64: this.multiFileListForLogo == undefined ? null : this.multiFileListForLogo[0].fileName,
        faviconNameBase64: this.multiFileListForFab == undefined ? null : this.multiFileListForFab[0].fileName,
        emailAddress: this.SponsorForm.value.emailAddress,
        primaryContactNumber: this.SponsorForm.value.primaryContactNumber,
        secondaryContactNumber: this.SponsorForm.value.secondaryContactNumber == undefined || this.SponsorForm.value.secondaryContactNumber == "" ? null : this.SponsorForm.value.secondaryContactNumber,
        stateName: this.SponsorForm.value.stateName,
        countryID: this.SponsorForm.value.countryID,
        cityName : this.SponsorForm.value.cityName,
        organizationTypeId: "2",
      }
      this.sponsorService.SaveSponser(sponsorObj).subscribe(result => {
        if (result) {
          console.log(result);
        }
        if (result) {
          if (result.statusCode === HttpStatusCode.StatusCode200) {
            this.organizationId = result.data.organizationID;
            this.notificationService.success(sponsorConstant.sponsorIsCreated);
            this.SponsorForm.reset();
            this.activeTab = false;
          } else {
            this.notificationService.error(NotificationMessages.invalidError)
            this.activeTab = false;
          }
        } else {
          this.notificationService.error(NotificationMessages.invalidError)
          this.activeTab = false;
        }
      })
    }
    else {
      if (this.editedSponsorID == null) {
        return
      }
      this.submitted = true;
      if (this.SponsorForm.invalid) {
        return;
      }
      let organizationObj = {
        //organization
        organizationID: this.editedSponsorID,
        organizationName: this.SponsorForm.value.organizationName,
        businessName: this.SponsorForm.value.businessName,
        address: this.SponsorForm.value.address,
        emailAddress: this.SponsorForm.value.emailAddress,
        logoName: this.getLogoFile,
        faviconName: this.getFavFile,
        logoNameBase64: this.multiFileListForLogo == undefined ? null : this.multiFileListForLogo[0].fileName,
        faviconNameBase64: this.multiFileListForFab == undefined ? null : this.multiFileListForFab[0].fileName,
        primaryContactNumber: this.SponsorForm.value.primaryContactNumber,
        secondaryContactNumber: this.SponsorForm.value.secondaryContactNumber == "" ? null : this.SponsorForm.value.secondaryContactNumber,
        stateName: this.SponsorForm.value.stateName,
        countryID: this.SponsorForm.value.countryID,
        cityName : this.SponsorForm.value.cityName,
      }
      this.sponsorService.UpdateSponsor(organizationObj).subscribe((response:any) => {
        if (response) {
          this.notificationService.success(sponsorConstant.sponsorIsUpdated)
          this.router.navigate([routerLinks.ManageSponsor]);
          this.isEditSponsor = false;
        }
      })
    }
  }

  getCountryData() {
    this.masterService.GetCountry().subscribe(res => {
      if (res) {
        if (res.statusCode === HttpStatusCode.StatusCode200) {
          this.CountryList = res.data;
        }
      }
    })
  }

  selectCountry(event: any){
    this.StateList = [];
    this.SponsorForm.patchValue({stateName: ''})
    if (event) {
      if (event.target.value) {
        this.masterService.GetState(event.target.value).subscribe((res: any) => {
          if (res) {
            if (res.statusCode === HttpStatusCode.StatusCode200) {
              this.StateList = res.data;
              this.isStateDisabled = false;
            }
          }
        })
      }
    }
  }

  selectFile(event: any, type: any) {
    if (type == "Logo") {
      this.handleLogoChange(event);
    } else {
      this.handleFavChange(event);
    }
  }

  handleLogoChange(e: any) {
    if (this.commonService.isValidFileType(e.target.files[0].name, "image")) {
      this.multiFileListForLogo = [];
      let fileExtension = e.target.files[0].name.split('.').pop().toLowerCase();
      var input = e.target;
      var reader = new FileReader();
      reader.onload = () => {
        this.dataURL = reader.result;
        this.fileList = this.dataURL;
        this.ext = fileExtension;
        this.multiFileListForLogo.push({
          fileName: this.fileList,
          fileExtension: this.ext,
          fileType: 'image'
        });
        this.isUploadForLogo = true;
        this.isUploaddoneForLogo = false;
        this.imagePreviewForLogo = this.dataURL;
        this.uploadedfileForLogo = e.target.files[0];
        this.testListForLogo.push(this.uploadedfileForLogo);
      };
      reader.readAsDataURL(input.files[0]);
    }
    else {
      this.notificationService.error(NotificationMessages.validType);
    }
  }

  handleFavChange(e: any) {
    if (this.commonService.isValidFileType(e.target.files[0].name, "image")) {
      this.multiFileListForFab = [];
      let fileExtension = e.target.files[0].name.split('.').pop().toLowerCase();
      var input = e.target;
      var reader = new FileReader();
      reader.onload = () => {
        this.dataURL = reader.result;
        this.fileList = this.dataURL;
        this.ext = fileExtension;
        this.multiFileListForFab.push({
          fileName: this.fileList,
          fileExtension: this.ext,
          fileType: 'image'
        });
        this.isUploadForFab = true
        this.isUploaddoneForFab = false;
        this.imagePreviewForFab = this.dataURL;
        this.uploadedfileForFab = e.target.files[0];
        this.testListForFab.push(this.uploadedfileForFab);
      };
      reader.readAsDataURL(input.files[0]);
    }
    else {
      this.notificationService.error(NotificationMessages.validType);
    }
  }



}
