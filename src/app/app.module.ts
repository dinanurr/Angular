import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { AbouteComponent } from './Pages/aboute/aboute.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { FooterComponent } from './SharePage/footer/footer.component';
import { NavbarComponent } from './SharePage/navbar/navbar.component';
import { DestinasiComponent } from './Pages/destinasi/destinasi.component';
import { ReviewComponent } from './Pages/review/review.component';
import { AkomodasiComponent } from './Pages/akomodasi/akomodasi.component';
import { KulinerComponent } from './Pages/kuliner/kuliner.component';
import { MakananComponent } from './Pages/makanan/makanan.component';
import { KategoriComponent } from './Pages/kategori/kategori.component';
import { PantaiComponent } from './Pages/pantai/pantai.component';
import { CandiComponent } from './Pages/candi/candi.component';
import { GunungComponent } from './Pages/gunung/gunung.component';
import { FilterPipe } from './shared/filter.pipe';


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
    AkomodasiComponent,
    KulinerComponent,
    MakananComponent,
    KategoriComponent,
    PantaiComponent,
    CandiComponent,
    GunungComponent,
    FilterPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
