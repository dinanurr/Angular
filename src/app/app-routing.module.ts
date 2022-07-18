import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbouteComponent } from './Pages/aboute/aboute.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { DestinasiComponent } from './Pages/destinasi/destinasi.component';
import { HomeComponent } from './Pages/home/home.component';
import { ReviewComponent } from './Pages/review/review.component';
import { AkomodasiComponent } from './Pages/akomodasi/akomodasi.component';
import { KulinerComponent } from './Pages/kuliner/kuliner.component';
import { MakananComponent } from './Pages/makanan/makanan.component';
import { KategoriComponent } from './Pages/kategori/kategori.component';
import { PantaiComponent } from './Pages/pantai/pantai.component';
import { CandiComponent } from './Pages/candi/candi.component';
import { GunungComponent } from './Pages/gunung/gunung.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'destinasi', component: DestinasiComponent },
  { path: 'kuliner', component: KulinerComponent },
  { path: 'kuliner/:id', component: MakananComponent },
  { path: 'destinasi/:id', component: ReviewComponent },
  { path: 'akomodasi/:id', component: AkomodasiComponent },
  { path: 'about', component: AbouteComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'kategori', component: KategoriComponent },
  { path: 'pantai', component: PantaiComponent },
  { path: 'candi', component: CandiComponent },
  { path: 'gunung', component: GunungComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
