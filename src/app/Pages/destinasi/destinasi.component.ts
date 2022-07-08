import { Component, OnInit } from '@angular/core';
import { DestinasiService } from 'src/app/services/destinasi.service';

@Component({
  selector: 'app-destinasi',
  templateUrl: './destinasi.component.html',
  styleUrls: ['./destinasi.component.css']
})
export class DestinasiComponent implements OnInit {

  constructor(private service: DestinasiService) { }
  data: any;
  ngOnInit(): void {
    this.data = this.service.datafoto;
  }

}
