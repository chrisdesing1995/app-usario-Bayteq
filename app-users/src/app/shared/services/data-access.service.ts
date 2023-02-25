import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { catchError } from 'rxjs';
import { DbKey } from '../utils/dbKey';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class DataAccessService {
  constructor(
    private translateService: TranslateService,
    private storage: StorageService,
    private httpClient: HttpClient
  ) {}

  getUserList(): Promise<any[]>{
    return new Promise<any[]>((resolve, reject) => {
      return this.httpClient.get("assets/data/user-list.json")
      .pipe(catchError(async (err) => reject(err)))
      .subscribe(data =>{
        this.storage.set(DbKey.userListKey,data);
        resolve(data as any[]);  
      });
    });
  }


  getLanguage(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      return this.storage
        .get(DbKey.languageKey)
        .then((result) => {
          resolve(result as any as string);
        })
        .catch((err) => reject(err));
    });
  }

  setLanguage(value:string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      return this.storage
        .set(DbKey.languageKey,value)
        .then((result) => {
          resolve(result as any as string);
        })
        .catch((err) => reject(err));
    });
  }
}
