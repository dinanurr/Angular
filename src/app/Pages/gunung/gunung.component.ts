import { Component, OnInit } from '@angular/core';
import { DestinasiService } from 'src/app/services/destinasi.service';

@Component({
  selector: 'app-gunung',
  templateUrl: './gunung.component.html',
  styleUrls: ['./gunung.component.css']
})
export class GunungComponent implements OnInit {

  constructor(private service: DestinasiService) { }
  gunung: any;
  ngOnInit(): void {
    this.gunung = this.service.gunung;
  }

}
