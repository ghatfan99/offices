import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bureau',
  templateUrl: './bureau.component.html',
  styleUrls: ['./bureau.component.css']
})
export class BureauComponent implements OnInit {
  idBureau: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBureauId();
  }
  getBureauId() {
    this.idBureau = this.route.snapshot.paramMap.get('id')
  }
}
