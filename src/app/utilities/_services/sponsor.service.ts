import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { endpointSponsor } from './endpoints/endpointSponsor';

@Injectable({
  providedIn: 'root'
})
export class SponsorService {

  sponsorList = new Subject();
  private sponsors: any[] = [];

  constructor(private http: HttpClient,
    private ngxService: NgxUiLoaderService) { }

    getSponsorList() {
      return this.sponsors;
    }
  
    getSponsorById(id:any) {
      return this.sponsors[id];
    }
  
    setSponsor(org: any[]) {
      return this.sponsors = org;
    }

  GetSponsorList() {
    this.ngxService.start();
    return this.http.get<any>(environment.baseUserApi + endpointSponsor.GetSponsorList)
      .pipe(
        map((response: any) => {
          this.sponsorList = response.data.organizations;
          this.ngxService.stop();
          return response;
        }),
        catchError((error: any) => {
          console.log(error);
          this.ngxService.stop();
          return error;
        })
      );
  }

  GetSponsor(id:any) {
    this.ngxService.start();
    return this.http.get<any>(environment.baseUserApi + endpointSponsor.GetSponsor + "?id=" + id)
      .pipe(
        map((response: any) => {
          this.sponsorList = response.data.organizations;
          this.ngxService.stop();
          return response;
        }),
        catchError((error: any) => {
          console.log(error);
          this.ngxService.stop();
          return error;
        })
      );
  }

  searchOrganization(search: string) {
    this.ngxService.start();
    return this.http.get<any>(environment.baseUserApi + endpointSponsor.SearchSponsor+ "?search=" + search)
      .pipe(
        map((response) => {
          this.ngxService.stop();
          return response;
        }),
        catchError((error: any) => {
          console.log(error);
          this.ngxService.stop();
          return error;
        })
      );
  }

  deleteSponsor(id: any) {
    this.ngxService.start();
    return this.http.post<any>(environment.baseUserApi + endpointSponsor.DeleteSponsor, id)
      .pipe(
        map((response) => {
          this.ngxService.stop();
          return response;
        }),
        catchError((error: any) => {
          console.log(error);
          this.ngxService.stop();
          return error;
        })
      );
  }

  SaveSponser(model: any) {
    this.ngxService.start();
    return this.http.post<any>(environment.baseUserApi + endpointSponsor.SaveSponsor, model)
      .pipe(
        map((response: any) => {
          this.ngxService.stop();
          return response;
        }),
        catchError((error: any) => {
          console.log(error);
          this.ngxService.stop();
          return error;
        })
      );
  }

  UpdateSponsor(model: any) {
    this.ngxService.start();
    return this.http.post<any>(environment.baseUserApi + endpointSponsor.UpdateSponsor, model)
      .pipe(
        map((response: any) => {
          this.ngxService.stop();
          return response;
        }),
        catchError((error: any) => {
          console.log(error);
          this.ngxService.stop();
          return error;
        })
      );
  }

  saveAdmin(Model: any) {
    this.ngxService.start();
    return this.http.post<any>(environment.baseUserApi + endpointSponsor.SaveAdmin, Model)
      .pipe(
        map((response) => {
          this.ngxService.stop();
          return response;
        }),
        catchError((error: any) => {
          console.log(error);
          this.ngxService.stop();
          return error;
        })
      );
  }

}
