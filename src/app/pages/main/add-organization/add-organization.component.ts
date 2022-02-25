import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganizationConstantFile } from 'src/app/shared/constants/organizationConstant';
import { routerLinks } from 'src/app/shared/constants/routerLinks';
import { decryption } from 'src/app/shared/genericFunctions/encryptionFun';
import { HttpStatusCode } from 'src/app/shared/models/HttpStatusCode';
import { CommonService } from 'src/app/utilities/_services/common.service';
import { MasterService } from 'src/app/utilities/_services/master.service';
import { NotificationService } from 'src/app/utilities/_services/notification.service';
import { OrganizationService } from 'src/app/utilities/_services/organization.service';
import { NotificationMessages } from "../../../shared/constants/notificationMessages";

@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.scss'],
})
export class AddOrganizationComponent implements OnInit {

  OrganizationForm: any;

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

  submitted: boolean = false;
  submittedForAdmin: boolean = false;
  AdminForm: FormGroup;
  activeTab: boolean = true;
  isEdit: boolean = false;
  editedOrganizaitonID: string | null;
  organizationId: any;

  isStateDisabled: boolean = true;
  CountryList: any;
  StateList: any;
  editedStateID: any;
  getLogoFile: any;
  getFavFile: any;
  type: string | null;
  IsViewOnly: boolean = true;

  constructor(
    private commonService: CommonService,
    private notificationService: NotificationService,
    private organizationService: OrganizationService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private masterService: MasterService
  ) { }

  ngOnInit(): void {
    this.init();
    this.adminInit();
    this.getCountryData();
    this.activatedRoute.paramMap.subscribe(params => {
      this.editedOrganizaitonID = params.get('Id');
      this.type = params.get('Type');
      if (this.editedOrganizaitonID) {
        this.editedOrganizaitonID = decryption(this.editedOrganizaitonID);
      }
      if (this.editedOrganizaitonID !== null) {
        this.organizationService.GetOrganizationById(this.editedOrganizaitonID).subscribe(res => {
          if (res) {
            if (res.statusCode === HttpStatusCode.StatusCode200) {
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
      this.isEdit = true;
      this.isStateDisabled = false;    
    }
    else
    {
      this.IsViewOnly = false;
      this.isStateDisabled = true;   
      this.OrganizationForm.disable();      
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
    this.OrganizationForm.patchValue({
      organizationsName: obj.organizationName,
      businessName: obj.businessName,
      subDomainName: obj.subDomainName,
      emailAddress: obj.emailAddress,
      primaryContactNumber: obj.primaryContactNumber,
      secondaryContactNumber: obj.secondaryContactNumber,
      address: obj.address,
      stateName: obj.stateName,
      countryID: obj.countryID,
      cityName: obj.cityName
    });
    this.imagePreviewForLogo = obj.logoNameBase64;
    this.imagePreviewForFab = obj.faviconNameBase64;
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

  init(): void {
    this.OrganizationForm = new FormGroup({
      organizationsName: new FormControl('', Validators.required),
      businessName: new FormControl('', Validators.required),
      subDomainName: new FormControl('', Validators.required),
      emailAddress: new FormControl('', Validators.required),
      primaryContactNumber: new FormControl('', Validators.required),
      secondaryContactNumber: new FormControl(''),
      address: new FormControl('', Validators.required),
      stateName: new FormControl('', Validators.required),
      countryID: new FormControl('', Validators.required),
      cityName: new FormControl('', Validators.required)
    });
  }

  adminInit() {
    this.AdminForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      emailAddress: new FormControl('', [Validators.required]),
      vendorFirstName: new FormControl('', [Validators.required]),
      vendorMiddleName: new FormControl(''),
      vendorLastName: new FormControl('', [Validators.required]),
      vendorEmail: new FormControl('', [Validators.required]),
      vendorPrimaryContactNumber: new FormControl('', [Validators.required]),
      vendorSecondaryContactNumber: new FormControl(''),
      subscription: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(type: string) {
    if (type == "save") {
      this.submitted = true;
      if (this.OrganizationForm.invalid) {
        return;
      }

      let organizationObj = {
        //organization
        organizationName: this.OrganizationForm.value.organizationsName,
        businessName: this.OrganizationForm.value.businessName,
        subDomainName: this.OrganizationForm.value.subDomainName,
        logoNameBase64: this.multiFileListForLogo == undefined ? null : this.multiFileListForLogo[0].fileName,
        faviconNameBase64: this.multiFileListForFab == undefined ? null : this.multiFileListForFab[0].fileName,
        address: this.OrganizationForm.value.address,
        emailAddress: this.OrganizationForm.value.emailAddress,
        primaryContactNumber: this.OrganizationForm.value.primaryContactNumber,
        secondaryContactNumber: this.OrganizationForm.value.secondaryContactNumber == undefined || this.OrganizationForm.value.secondaryContactNumber == "" ? null : this.OrganizationForm.value.secondaryContactNumber,
        stateName: this.OrganizationForm.value.stateName,
        countryID: this.OrganizationForm.value.countryID,
        cityName: this.OrganizationForm.value.cityName,
        organizationTypeId: "1",
      }

      this.organizationService.saveOrganization(organizationObj).subscribe(response => {
        if (response) {
          if (response.statusCode === HttpStatusCode.StatusCode200) {
            this.organizationId = response.data.organizationID;
            this.notificationService.success(OrganizationConstantFile.organizationIsCreated);
            this.OrganizationForm.reset();
            this.activeTab = false;
          } else {
            this.notificationService.error(NotificationMessages.invalidError)           
          }
        } else {
          this.notificationService.error(NotificationMessages.invalidError)
        }
      })
    } else {
      if (this.editedOrganizaitonID == null) {
        return
      }
      this.submitted = true;
      if (this.OrganizationForm.invalid) {
        return;
      }
      let organizationObj = {
        //organization
        organizationID: this.editedOrganizaitonID,
        organizationName: this.OrganizationForm.value.organizationsName,
        businessName: this.OrganizationForm.value.businessName,
        subDomainName: this.OrganizationForm.value.subDomainName,
        address: this.OrganizationForm.value.address,
        emailAddress: this.OrganizationForm.value.emailAddress,
        primaryContactNumber: this.OrganizationForm.value.primaryContactNumber,
        secondaryContactNumber: this.OrganizationForm.value.secondaryContactNumber,
        stateName: this.OrganizationForm.value.stateName,
        countryID: this.OrganizationForm.value.countryID,
        cityName: this.OrganizationForm.value.cityName,
        logoName: this.getLogoFile,
        faviconName: this.getFavFile,
        logoNameBase64: this.multiFileListForLogo == undefined ? null : this.multiFileListForLogo[0].fileName,
        faviconNameBase64: this.multiFileListForFab == undefined ? null : this.multiFileListForFab[0].fileName,
      }
      this.organizationService.updateOrganization(organizationObj).subscribe(response => {
        if (response) {
          this.notificationService.success(OrganizationConstantFile.organizationIsUpdated)
          this.router.navigate([routerLinks.ManageOrganization]);
        }
      })
    }
  }

  selectCountry(event: any) {
    this.StateList = [];
    this.OrganizationForm.patchValue({stateName: ''})
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

  navigateToAddAdmin() {
    this.submittedForAdmin = true;
    if (this.AdminForm.invalid) {
      return;
    }
    let adminObj = {
      firstName: this.AdminForm.value.firstName,
      lastName: this.AdminForm.value.lastName,
      emailAddress: this.AdminForm.value.emailAddress,
      vendorFirstName: this.AdminForm.value.vendorFirstName,
      vendorMiddleName: this.AdminForm.value.vendorMiddleName == undefined || this.AdminForm.value.vendorMiddleName == "" ? null : this.AdminForm.value.vendorMiddleName,
      vendorLastName: this.AdminForm.value.vendorLastName,
      vendorEmail: this.AdminForm.value.vendorEmail,
      vendorPrimaryContactNumber: this.AdminForm.value.vendorPrimaryContactNumber,
      vendorSecondaryContactNumber: this.AdminForm.value.vendorSecondaryContactNumber == undefined || this.AdminForm.value.vendorSecondaryContactNumber == "" ? null : this.AdminForm.value.vendorSecondaryContactNumber,
      subscription: this.AdminForm.value.subscription,
      organizationsID: this.organizationId
    }
    this.organizationService.saveVendor(adminObj).subscribe(response => {
      if (response) {
        if (response.statusCode === HttpStatusCode.StatusCode200) {
          this.notificationService.success(OrganizationConstantFile.organizationAdminInvite)
          this.OrganizationForm.reset();
          this.router.navigate([routerLinks.ManageOrganization]);
          this.activeTab = false;
        } else {
          this.notificationService.error(NotificationMessages.invalidError)
        }
      } else {
        this.notificationService.error(NotificationMessages.invalidError)
      }
    })

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


