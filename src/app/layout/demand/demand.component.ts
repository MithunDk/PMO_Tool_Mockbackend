import { Component, OnInit } from '@angular/core';
import { DemandService } from './demand.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Demand } from '../../models/demand.model';

@Component({
  selector: 'app-demand',
  templateUrl: './demand.component.html',
  styleUrls: ['./demand.component.css']
})
export class DemandComponent {

  public demands: Demand[] = [];
  demand: any = {};
  constructor(private _demandService: DemandService,
    private router: Router) { }
  
  ngOnInit() {
    this.getAllDemands();
  }
  private getAllDemands() {

    this._demandService.getAllDemands()
      .subscribe(demands => this.demands = demands);

  }

  deleteDemand(id: number) {

    this._demandService.deleteDemand(id)
      .subscribe(demand => {
        this.router.navigate(['/demand']);
        this.demand = demand
      }
      );
    }

  }
