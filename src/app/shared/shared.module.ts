import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { I18nModule } from '../utilities/_helper/i18n/i18n.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AdvancedTableComponent } from './components/advanced-table/advanced-table.component';
import { HeaderComponent } from './components/header/header.component';
import { SelectLanguageComponent } from './components/select-language/select-language.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { TableComponent } from './components/table/table.component';
import { DataPropertyGetterPipe } from './pipes/DataPropertyGetterPipe.pipe';
import { ControlMessagesComponent } from './validators/validation-message.component';
import { FooterComponent } from './components/footer/footer.component';
import { AvatarModule } from 'ngx-avatar';
import { RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormatTimePipe } from './pipes/formatTime.pipe';
import { MobilePhoneDirective } from './directives/MobilePhoneDirective.directive';
import { ManageListComponent } from './components/manage-list/manage-list.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
    SelectLanguageComponent,
    ControlMessagesComponent,
    TableComponent,
    AdvancedTableComponent,
    DataPropertyGetterPipe,
    FooterComponent,
    FormatTimePipe,
    MobilePhoneDirective,
    ManageListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    I18nModule,
    AvatarModule,
    NgxPaginationModule,
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
  ],
  exports: [
    SelectLanguageComponent,
    ManageListComponent,
    ControlMessagesComponent,
    TableComponent,
    AdvancedTableComponent,
    DataPropertyGetterPipe,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    I18nModule,
    AvatarModule,
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    FormatTimePipe,
    NgxPaginationModule,
    MobilePhoneDirective
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SharedModule {}
