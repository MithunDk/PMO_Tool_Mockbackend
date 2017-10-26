import { Component } from "@angular/core";
import { DemandService } from './demand.service';
import { Demand } from '../../models/demand.model';
import { Router, ActivatedRoute } from '@angular/router';
import { toast  } from 'angular2-materialize';

@Component({
    templateUrl: "./demand-edit.component.html"
})

export class DemandEditComponent {

    demand: any = {};


    constructor(private _demandService: DemandService,
        private router: Router,
        private route: ActivatedRoute) { }


          pskills = [
      {num: 0, name: "JAVA"},
      {num: 1, name: "Dotnet"},
      {num: 2, name: "HTML"},
      {num: 3, name: "Spring"},

  ];
     prioritys= [
      {num: 0, name: "High"},
      {num: 1, name: "Medium"},
      {num: 2, name: "Low"},

  ];
    askills = [
      {num: 0, name: "JAVA"},
      {num: 1, name: "Dotnet"},
      {num: 2, name: "HTML"},
      {num: 3, name: "Spring"},

  ];  
   
  genders = [
      "male",
     "female"
  ];


    updateDemand() {

        this._demandService.updateDemand(this.demand)
            .subscribe(demand => {
                this.router.navigate(['/demand']);
                this.demand = demand
                 toast('Demand Updated!', 4000)
            }
            );

    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            const id = Number.parseInt(params['id']);
            this.demand.demandID = id;
        });
        this.demand = this.getDemandById(this.demand.demandID);


    }
    getDemandById(id: number) {
        return this._demandService.getDemandById(id)
            .subscribe(demand => this.demand = demand);
    }

    

    

}
