import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City, CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-admin-child',
  templateUrl: './admin-child.component.html',
  styleUrls: ['./admin-child.component.scss']
})
export class AdminChildComponent implements OnInit {

  citiesData: any;
  constructor(private router: Router, private commonService: CommonService) { }

  ngOnInit(): void {
    this.citiesData = this.commonService.cities
  }

  visiteCitie(citieId: number) {
    if (citieId) {
      this.router.navigateByUrl(`admin/admin-child2/${citieId}`);
    }
    console.log('citieId :>> ', citieId);
  }

}
