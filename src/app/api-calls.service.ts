import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {
  apiUrl:any="https://65ded69bff5e305f32a09845.mockapi.io/karans";
  constructor(private _http:HttpClient) { }

  onGet(){
    return this._http.get(this.apiUrl);
  }
  onDel(id:any){
    return this._http.delete(this.apiUrl+"/"+id);
  }
  getOne(id:any){
    return this._http.get(this.apiUrl+"/"+id);
  }
  onUpdate(id:any,map:any){
    return this._http.put(this.apiUrl+"/"+id,map);
  }
  onPost(map:any){
    return this._http.post(this.apiUrl,map);
  }
}

