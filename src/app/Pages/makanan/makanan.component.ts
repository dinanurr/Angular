import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestinasiService } from 'src/app/services/destinasi.service';

@Component({
  selector: 'app-makanan',
  templateUrl: './makanan.component.html',
  styleUrls: ['./makanan.component.css']
})
export class MakananComponent implements OnInit {

  constructor(private param: ActivatedRoute, private service: DestinasiService) { }
  info: any;
  dtakuliner: any;
  ngOnInit(): void {
    this.info = this.param.snapshot.paramMap.get('id');
    console.log(this.info, 'getinfo');
    if (this.info) {
      this.dtakuliner = this.service.kuliner.filter((value) => {
        return value.id == this.info;
      });
      console.log(this.dtakuliner, 'datainfo>>');
    }
  }

}
