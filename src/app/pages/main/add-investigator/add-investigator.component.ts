import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationMessages } from 'src/app/shared/constants/notificationMessages';
import { OrganizationConstantFile } from 'src/app/shared/constants/organizationConstant';
import { routerLinks } from 'src/app/shared/constants/routerLinks';
import { decryption } from 'src/app/shared/genericFunctions/encryptionFun';
import { HttpStatusCode } from 'src/app/shared/models/HttpStatusCode';
import { CommonService } from 'src/app/utilities/_services/common.service';
import { InvestigatorService } from 'src/app/utilities/_services/investigator.service';
import { MasterService } from 'src/app/utilities/_services/master.service';
import { NotificationService } from 'src/app/utilities/_services/notification.service';

@Component({
  selector: 'app-add-investigator',
  templateUrl: './add-investigator.component.html',
  styleUrls: ['./add-investigator.component.scss']
})
export class AddInvestigatorComponent implements OnInit {

  AdminForm: FormGroup;
  PIForm: FormGroup;

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
  editedPIID: string | null;
  isStateDisabled: boolean = true;
  StateList: any;
  CountryList: any;
  getLogoFile: any;
  getFavFile: any;
  type: string | null;
  IsViewOnly: boolean = true;

  constructor(private investigatorService: InvestigatorService, private commonService: CommonService, private notificationService: NotificationService, private masterService: MasterService,
    private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.init();
    this.adminInit();
    this.getCountryList();
    this.activatedRoute.paramMap.subscribe(params => {
      this.editedPIID = params.get('Id');
      this.type = params.get('Type');
      if (this.editedPIID) {
        this.editedPIID = decryption(this.editedPIID);
      }
      if (this.editedPIID !== null) {
        let obj: any = this.investigatorService.GetPIbyId(this.editedPIID).subscribe(res => {
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

  getCountryList() {
    this.masterService.GetCountry().subscribe(res => {
      if (res) {
        if (res.statusCode === HttpStatusCode.StatusCode200) {
          this.CountryList = res.data;
        }
      }
    })
  }

  updateProfile(obj: any,type: any) {
    if (type == "Edit") {
      this.isEditSponsor = true;
      this.isStateDisabled = false;    
    }
    else
    {
      this.IsViewOnly = false;
      this.isStateDisabled = true;   
      this.PIForm.disable();      
    }
  
    this.isStateDisabled = false;
    this.isUploadForLogo = true;
    this.isUploaddoneForLogo = false;
    this.isUploadForFab = true;
    this.isUploaddoneForFab = false;
    this.masterService.GetState(obj.countryID).subscribe((result: any) => {
      if (result != null) {
        this.StateList = result.data;
      }
    })
    this.PIForm.patchValue({
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
    this.PIForm = new FormGroup({
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

  selectCountry(event: any) {
    this.StateList = [];
    this.PIForm.patchValue({stateName: ''})
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
    this.investigatorService.saveAdmin(adminObj).subscribe((response: any) => {
      if (response) {
        if (response.statusCode === HttpStatusCode.StatusCode200) {
          this.notificationService.success(OrganizationConstantFile.PIAdminInvite)
          this.AdminForm.reset();
          this.router.navigate([routerLinks.ManagePI]);
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
      if (this.PIForm.invalid) {
        return;
      }

      let PIObj = {
        //organization
        organizationName: this.PIForm.value.organizationName,
        businessName: this.PIForm.value.businessName,
        address: this.PIForm.value.address,
        logoNameBase64: this.multiFileListForLogo == undefined ? null : this.multiFileListForLogo[0].fileName,
        faviconNameBase64: this.multiFileListForFab == undefined ? null : this.multiFileListForFab[0].fileName,
        emailAddress: this.PIForm.value.emailAddress,
        primaryContactNumber: this.PIForm.value.primaryContactNumber,
        secondaryContactNumber: this.PIForm.value.secondaryContactNumber == undefined || this.PIForm.value.secondaryContactNumber == "" ? null : this.PIForm.value.secondaryContactNumber,
        stateName: this.PIForm.value.stateName,
        countryID: this.PIForm.value.countryID,
        cityName: this.PIForm.value.cityName,
        organizationTypeId: "3",
      }
      this.investigatorService.SavePI(PIObj).subscribe(result => {
        if (result) {
          console.log(result);
        }
        if (result) {
          if (result.statusCode === HttpStatusCode.StatusCode200) {
            this.organizationId = result.data.organizationID;
            this.notificationService.success(OrganizationConstantFile.PIIsCreated);
            this.PIForm.reset();
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
      if (this.editedPIID == null) {
        return
      }
      this.submitted = true;
      if (this.PIForm.invalid) {
        return;
      }
      let organizationObj = {
        //organization
        organizationID: this.editedPIID,
        organizationName: this.PIForm.value.organizationName,
        businessName: this.PIForm.value.businessName,
        address: this.PIForm.value.address,
        logoName: this.getLogoFile,
        faviconName: this.getFavFile,
        logoNameBase64: this.multiFileListForLogo == undefined ? null : this.multiFileListForLogo[0].fileName,
        faviconNameBase64: this.multiFileListForFab == undefined ? null : this.multiFileListForFab[0].fileName,
        emailAddress: this.PIForm.value.emailAddress,
        primaryContactNumber: this.PIForm.value.primaryContactNumber,
        secondaryContactNumber: this.PIForm.value.secondaryContactNumber == "" ? null : this.PIForm.value.secondaryContactNumber,
        stateName: this.PIForm.value.stateName,
        countryID: this.PIForm.value.countryID,
        cityName: this.PIForm.value.cityName,
      }
      this.investigatorService.UpdatePI(organizationObj).subscribe((response: any) => {
        if (response) {
          this.notificationService.success(OrganizationConstantFile.PIIsUpdated)
          this.router.navigate([routerLinks.ManagePI]);
          this.isEditSponsor = false;
        }
      })
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
