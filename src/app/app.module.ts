import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationComponent } from './administration/administration.component';
import { ClaimComponent } from './claim/claim.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { SearchComponent } from './search/search.component';
import {ClaimService} from './claim.service';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'header', component: HeaderComponent, children: [
    {path: 'claim', component: ClaimComponent },
    {path: 'search', component: SearchComponent },
    {path: 'addressBook', component: AddressBookComponent },
    {path: 'administration', component: AdministrationComponent },
  ]
  },
  {path: "**", redirectTo: "login"}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdministrationComponent,
    ClaimComponent,
    AddressBookComponent,
    SearchComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), HttpModule, ReactiveFormsModule
  ],
  providers: [ClaimService],
  bootstrap: [AppComponent]
})
export class AppModule { }
