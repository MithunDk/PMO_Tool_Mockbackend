import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  private _getUsersUrl = "/api/getUsers";
  private _createUserUrl = "/api/createUser";
  private _updateUserUrl = "/api/updateUser";
  private _deleteUserUrl = "/api/deleteUser/";
  private _getUserByIdUrl = "/api/getUserById/";
  
  constructor(private _http: Http) { }

  public getAllUsers() {
      return this._http.get(this._getUsersUrl).map((response: Response) => response.json());
  }

  public getUserById(id: number) {
      return this._http.get(this._getUserByIdUrl + id).map((response: Response) => response.json());
  }

  public createUser(user: User) {
      return this._http.post(this._createUserUrl, User).map((response: Response) => response.json());
  }

  public updateUser(user: User) {
      return this._http.put(this._updateUserUrl, User).map((response: Response) => response.json());
  }

  public deleteUser(id: number) {

      return this._http.delete(this._deleteUserUrl + id).map((response: Response) => response.json());
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
