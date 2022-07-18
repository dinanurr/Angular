import { Component, OnInit } from '@angular/core';
import { DestinasiService } from 'src/app/services/destinasi.service';

@Component({
  selector: 'app-pantai',
  templateUrl: './pantai.component.html',
  styleUrls: ['./pantai.component.css']
})
export class PantaiComponent implements OnInit {

  constructor(private service: DestinasiService) { }
  pantai: any;
  ngOnInit(): void {
    this.pantai = this.service.pantai;
  }

}
