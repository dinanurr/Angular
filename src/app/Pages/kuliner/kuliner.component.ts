import { Component, OnInit } from '@angular/core';
import { DestinasiService } from 'src/app/services/destinasi.service';

@Component({
  selector: 'app-kuliner',
  templateUrl: './kuliner.component.html',
  styleUrls: ['./kuliner.component.css']
})
export class KulinerComponent implements OnInit {

  constructor(private service: DestinasiService) { }
  dtakuliner: any;
  ngOnInit(): void {
    this.dtakuliner = this.service.kuliner;
  }

}
