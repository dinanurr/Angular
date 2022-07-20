import { Component, OnInit } from '@angular/core';
import { DestinasiService } from 'src/app/services/destinasi.service';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.css']
})
export class KategoriComponent implements OnInit {

  searchKey: string = "";
  searchTerm: string = "";
  DestinasiService: any;
  destinasiService: any;
  constructor(private service: DestinasiService) { }
  kategori: any;
  ngOnInit(): void {
    this.kategori = this.service.kategori;
    // this.DestinasiService.search.subscribe((val: string): void => {
    //   this.searchKey = val;
    // });
  }
  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.destinasiService.search.next(this.searchTerm);
  }
}
