import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { JobDisplayComponent } from './components/job-display/job-display.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, JobDisplayComponent, JobDetailsComponent, CompanyDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
