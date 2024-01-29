import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
// import { MessageService } from 'primeng/api';
import { HomePageComponent } from './home-page/home-page.component';
import { GalleriaModule } from 'primeng/galleria';
import { PrimeNGConfig } from 'primeng/api';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServiceComponent } from './service/service.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsComponent,
    ServiceComponent,
    ContactsComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    ToastModule,
    DialogModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    TableModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToolbarModule,
    CardModule,
    DropdownModule,
    GalleriaModule,
    ProgressBarModule,
  ],
  providers: [PrimeNGConfig],
  bootstrap: [AppComponent],
})
export class AppModule {}
