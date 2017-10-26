import { Injectable } from "@angular/core";
import { Demand } from '../../models/demand.model';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';


@Injectable()
export class DemandService {

    private _getdemandsUrl = "/api/getDemands";
    private _createDemandUrl = "/api/createDemand";
    private _updateDemandUrl = "/api/updateDemand";
    private _deleteDemandUrl = "/api/deleteDemand/";
    private _getdemandByIdUrl = "/api/getDemandById/";
    
    constructor(private _http: Http) { }

    public getAllDemands() {
        return this._http.get(this._getdemandsUrl).map((response: Response) => response.json());
    }

    public getDemandById(id: number) {
        return this._http.get(this._getdemandByIdUrl + id).map((response: Response) => response.json());
    }

    public createDemand(demand: Demand) {
        return this._http.post(this._createDemandUrl, demand).map((response: Response) => response.json());
    }

    public updateDemand(demand: Demand) {
        return this._http.put(this._updateDemandUrl, demand).map((response: Response) => response.json());
    }

    public deleteDemand(id: number) {

        return this._http.delete(this._deleteDemandUrl + id).map((response: Response) => response.json());
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }
}