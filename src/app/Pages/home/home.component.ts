import { Component, OnInit } from '@angular/core';
import { DestinasiService } from 'src/app/services/destinasi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: DestinasiService) { }
  // category: any;
  dataamd: any;
  ngOnInit(): void {
    // this.category = this.service.categorydta;
    this.dataamd = this.service.akomodasi;
  }

}
