import {Component, EventEmitter } from "@angular/core";
import { MaterializeAction,MaterializeDirective,toast  } from 'angular2-materialize';
import { DemandService } from './demand.service';
import { Demand } from '../../models/demand.model';
import { Router } from '@angular/router';

@Component({
    templateUrl: "./demand-create.component.html"
})

export class DemandCreateComponent{

    demand: any = {};

    constructor(private _demandService: DemandService,
                private router: Router
               ) { }
         

  primaryskills:number;
  additionalskills:number;
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

   
    modalActions = new EventEmitter<string | MaterializeAction>();
    openModal() {
        this.modalActions.emit({ action: "modal", params: ['open'] });
    }
    closeModal() {
        this.modalActions.emit({ action: "modal", params: ['close'] });
    }

    createDemand() {
         //console.log(this.birthDateActions);
        console.log(this.demand.startdate);
        this._demandService.createDemand(this.demand)
            .subscribe(demand => {
                this.router.navigate(['/demand']);
                this.demand = demand
               toast('Demand Created!', 4000)
            }
            );

    }

}
