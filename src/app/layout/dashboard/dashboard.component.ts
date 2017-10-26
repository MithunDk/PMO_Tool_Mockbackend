import { Component, OnInit } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { DemandService } from '../demand/demand.service';

import { Demand } from '../../models/demand.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public demands: Demand[] = [];
  demand: Demand;
  constructor(private _demandService: DemandService) {

  }
  //public demands: any[] =this._demandService.GetAllDemands();
  ngOnInit() {

  }
  private createDemands() {

    this._demandService.createDemand(this.demand)
      .subscribe(demands => this.demands = demands);

  }

}
