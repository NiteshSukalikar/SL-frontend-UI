import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { decryption } from 'src/app/shared/genericFunctions/encryptionFun';

export interface selectPatientParam {
  id: number,
  mrn: string,
  userId: number,
  fullName: string,
  emailAddress: string,
  telephone: string,
  imgSrc: string,
}

@Injectable()
export class LocalStorageService {

  private userId: any;
  private userName: any;
  private userRoleId: any;
  private EmailAddress: any;
  private ContactNumber: any;
  private StaffId: any;
  private PatientId: any;
  private FullName: any;
  private OrganizationId: any;
  private OrganizationName: any;
  private lastLoginDate: any;
  private seletedPatient: selectPatientParam;
  private accessToken: any;
  private refreshToken: any;
  private rolePermission: any;
  private userType: any;
  private staffName: any;
  private labId: any;
  private pharmacyId: any;
  private providerTypeId: any;
  decryptToken: string;

  constructor(
    private router: Router,
  ) {
    this.storeDataInLocalStorageService();
  }

  clear() {
    this._setUserId(null);
    this._setUserName(null);
    this._setUserRoleId(null);
    this._setEmailAddress(null);
    this._setContactNumber(null);
    this._setStaffId(null);
    this._setPatientId(null);
    this._setFullName(null);
    this._setLastLoginDate(null);
    this._setAccessToken(null);
    this._setRefreshToken(null);
    this._setRolePermission(null);
    this._setLabId(null);
    this._setPharmacyId(null);
    this._setProviderTypeId(null);
  }

  _getUserId(): any {
    if (this.userId == undefined || this.userId == null || this.userId == "") {
      this.userId == 0;
    }
    return this.userId;
  }
  _setUserId(userId: any) {
    this.userId = userId;
  }
  _setSatffName(staffName: any) {
    this.staffName = staffName
  }
  _getEmailAddress(): any {
    if (this.EmailAddress == undefined || this.EmailAddress == null) {
      this.EmailAddress == "";
    }
    return this.EmailAddress;
  }
  _setEmailAddress(email: any) {
    this.EmailAddress = email;
  }

  _getContactNumber(): any {
    if (this.ContactNumber == undefined || this.ContactNumber == null) {
      this.ContactNumber == "";
    }
    return this.ContactNumber;
  }
  _setContactNumber(ContactNumber: any) {
    this.ContactNumber = ContactNumber;
  }

  _getStaffId(): any {
    if (this.StaffId == undefined || this.StaffId == null || this.StaffId == "") {
      this.StaffId == 0;
    }
    return this.StaffId;
  }
  _setStaffId(StaffId: any) {
    this.StaffId = StaffId;
  }

  _getPatientId(): any {
    if (this.PatientId == undefined || this.PatientId == null || this.PatientId == "") {
      this.PatientId == 0;
    }
    return this.PatientId;
  }
  _setPatientId(PatientId: any) {
    this.PatientId = PatientId;
  }

  _getFullName(): any {
    if (this.FullName == undefined || this.FullName == null || this.FullName == "") {
      this.FullName == 0;
    }
    return this.FullName;
  }
  _setFullName(FullName: any) {
    if (FullName) {
      FullName = decryption(FullName.split(';')[0]) + ' ' + decryption(FullName.split(';')[1]);
    } else {
      FullName = '';
    }
    this.FullName = FullName;
  }

  _getOrganizationName(): any {
    if (this.OrganizationName == undefined || this.OrganizationName == null || this.OrganizationName == "") {
      this.OrganizationName == '';
    }
    return this.OrganizationName;
  }
 
  _getUserRoleId(): any {
    if (this.userRoleId == undefined || this.userRoleId == null || this.userRoleId == "") {
      this.userRoleId == 0;
    }
    return this.userRoleId;
  }
  _setUserRoleId(userRoleId: any) {
    this.userRoleId = userRoleId;
  }

  _getUserType(): any {
    if (this.userType == undefined || this.userType == null || this.userType == "") {
      this.userType == 0;
    }
    return this.userType;
  }

  _getUserName(): any {
    if (this.userName == undefined || this.userName == null) {
      this.userName == "";
    }
    return this.userName;
  }
  _setUserName(userName: any) {
    this.userName = userName;
  }

  _getLastLoginDate(): any {
    return this.lastLoginDate;
  }
  _setLastLoginDate(lastLoginDate: any) {
    this.lastLoginDate = lastLoginDate;
  }

  _getAccessToken(): any {
    this.storeDataInLocalStorageService();
    return this.accessToken;
  }
  _setAccessToken(accessToken: any) {
    this.accessToken = accessToken;
  }

  _getRefreshToken(): any {
    this.storeDataInLocalStorageService();
    return this.refreshToken;
  }
  _setRefreshToken(refreshToken: any) {
    this.refreshToken = refreshToken;
  }
  _setUserType(usertype: any) {
    this.userType = usertype
  }
  _getStaffName(): any {
    if (this.staffName == undefined || this.staffName == null) {
      this.staffName == "";
    }
    return this.staffName;
  }

  _getLabId(): any {
    if (this.labId == undefined || this.labId == null || this.labId == "") {
      this.labId == 0;
    }
    return this.labId;
  }
  _setLabId(labId: any) {
    this.labId = labId;
  }

  _getPharmacyId(): any {
    if (this.pharmacyId == undefined || this.pharmacyId == null || this.pharmacyId == "") {
      this.pharmacyId == 0;
    }
    return this.pharmacyId;
  }
  _setPharmacyId(pharmacyId: any) {
    this.pharmacyId = pharmacyId;
  }

  _getProviderTypeId(): any {
    if (this.providerTypeId == undefined || this.providerTypeId == null || this.providerTypeId == "") {
      this.providerTypeId == 0;
    }
    return this.providerTypeId;
  }
  _setProviderTypeId(providerTypeId: any) {
    this.providerTypeId = providerTypeId;
  }

  _getRolePermission(): any {
    this.storeDataInLocalStorageService();
    return this.rolePermission;
  }
  _setRolePermission(rolePermission: any) {
    this.rolePermission = rolePermission;
  }

  storeDataInLocalStorageService() {
    let encryptedtoken = localStorage.getItem("NewShadow");
    encryptedtoken = encryptedtoken ? encryptedtoken : sessionStorage.getItem('NewShadow');
    if (encryptedtoken != null) {
      this.decryptToken = decryption(encryptedtoken);  
      let token = JSON.stringify(this.decryptToken);
      let objtoken: any = JSON.parse(token);
      this._setAccessToken(objtoken.AccessToken);
    }
  }
}