import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestinasiService } from 'src/app/services/destinasi.service';

@Component({
  selector: 'app-akomodasi',
  templateUrl: './akomodasi.component.html',
  styleUrls: ['./akomodasi.component.css']
})
export class AkomodasiComponent implements OnInit {

  constructor(private param: ActivatedRoute, private service: DestinasiService) { }
  detailamd: any;
  dataamd: any;
  ngOnInit(): void {
    this.detailamd = this.param.snapshot.paramMap.get('id');
    console.log(this.detailamd, 'geetinfo');
    if (this.detailamd) {
      this.dataamd = this.service.akomodasi.filter((value) => {
        return value.id == this.detailamd;
      });
      console.log(this.dataamd, 'detailinfo>>');
    }
  }

}
