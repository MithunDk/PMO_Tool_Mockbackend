import { Injectable } from '@angular/core';
import { Demand } from '../../models/demand.model';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User} from '../../models/user.model';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

    private _getUsersUrl = "/api/getUsers";
    private _createUserUrl = "/api/createUser";
    private _updateUserUrl = "/api/updateUser";
    private _deleteUserUrl = "/api/deleteUser/";
    private _getuserByIdUrl = "/api/getUserById/";
    private _postactiveUserUrl ="/api/postactiveUser";
    private _getActiveUsersUrl ="/api/getActiveUsers";
    private _deleteActiveUserUrl = "/api/deleteActiveUser/";
    private _postinactiveUserUrl = "/api/postinactiveUser";
    private _getInactiveUsersUrl = "/api/getInactiveUsers";
    private _postReactiveUsersUrl ="/api/postReactiveUsers";
    private _getReactiveUsersUrl ="/api/getReactiveUsers";
    private _deleteInactiveUserUrl ="/api/deleteInactiveUser/";

  constructor(private _http: Http) { }
   public getAllUsers() {
        return this._http.get(this._getUsersUrl).map((response: Response) => response.json());
    }

    public getUserById(id: number) {
        return this._http.get(this._getuserByIdUrl + id).map((response: Response) => response.json());
    }

    public createUser(user: User) {
        return this._http.post(this._createUserUrl, user).map((response: Response) => response.json());
    }

    public updateUser(user: User) {
        return this._http.put(this._updateUserUrl, user).map((response: Response) => response.json());
    }

    public deleteUser(id: number) {

        return this._http.delete(this._deleteUserUrl + id).map((response: Response) => response.json());
    }
    public postactiveUsers(user: User){
      return this._http.post(this._postactiveUserUrl, user).map((response: Response) => response.json());
    }
    public getActiveUsers(){
        return this._http.get(this._getActiveUsersUrl).map((response: Response) => response.json());
    }
    public deleteActiveUser(id: number) {
    
        return this._http.delete(this._deleteActiveUserUrl + id).map((response: Response) => response.json());
    }
    public postinactiveUsers(user: User){
       return this._http.post(this._postinactiveUserUrl, user).map((response: Response) => response.json());
    }
    public getInactiveUsers(){
        return this._http.get(this._getInactiveUsersUrl).map((response: Response) => response.json());
    }
    public postReactiveUsers(user: User){
       return this._http.post(this._postReactiveUsersUrl,user).map((response: Response ) => response.json());
    }
    public deleteInactiveUser(id: number){
     return this._http.delete(this. _deleteInactiveUserUrl + id).map((response: Response) => response.json());
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

