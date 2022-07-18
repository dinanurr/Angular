import { Component, OnInit } from '@angular/core';
import { DestinasiService } from 'src/app/services/destinasi.service';

@Component({
  selector: 'app-candi',
  templateUrl: './candi.component.html',
  styleUrls: ['./candi.component.css']
})
export class CandiComponent implements OnInit {

  constructor(private service: DestinasiService) { }
  candi: any;
  ngOnInit(): void {
    this.candi = this.service.candi;
  }

}
