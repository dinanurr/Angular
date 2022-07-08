import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestinasiService } from 'src/app/services/destinasi.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(private param: ActivatedRoute, private service: DestinasiService) { }
  detailinfo: any;
  data: any;
  ngOnInit(): void {
    this.detailinfo = this.param.snapshot.paramMap.get('id');
    console.log(this.detailinfo, 'getinfo');
    if (this.detailinfo) {
      this.data = this.service.datafoto.filter((value) => {
        return value.id == this.detailinfo;
      });
      console.log(this.data, 'datainfo>>');
    }
  }
}
