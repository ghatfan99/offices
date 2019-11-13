import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-bureaux',
  templateUrl: './bureaux.component.html',
  styleUrls: ['./bureaux.component.css']
})
export class BureauxComponent implements OnInit {

  color = '#bbd0e2';
  cursor = 'auto';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onOfficeClick(event) {
    const id = event.target.id;
    this.router.navigate(['/bureau', id]);
    console.log(event.target.id);
  }

  onMouseenter(event) {
    const id = event.target.id;
    if(id !== undefined) {
      const element = document.getElementById(id);
      element.setAttribute('style', 'fill:lightblue; cursor: pointer;');
    }
  }

  onMouseleave(event) {
    const id = event.target.id;
    if (id !== undefined) {
      const element = document.getElementById(id);
      element.setAttribute('style', 'fill:#bbd0e2; cursor: pointer;');
    }
  }
}
