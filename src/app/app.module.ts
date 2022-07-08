import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { AbouteComponent } from './Pages/aboute/aboute.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { FooterComponent } from './SharePage/footer/footer.component';
import { NavbarComponent } from './SharePage/navbar/navbar.component';
import { DestinasiComponent } from './Pages/destinasi/destinasi.component';
import { ReviewComponent } from './Pages/review/review.component';
import { KategoriComponent } from './Pages/kategori/kategori.component';
import { AkomodasiComponent } from './Pages/akomodasi/akomodasi.component';
import { KulinerComponent } from './Pages/kuliner/kuliner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AbouteComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    DestinasiComponent,
    ReviewComponent,
    KategoriComponent,
    AkomodasiComponent,
    KulinerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
