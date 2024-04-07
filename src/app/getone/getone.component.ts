import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiCallsService } from '../api-calls.service';

@Component({
  selector: 'app-getone',
  templateUrl: './getone.component.html',
  styleUrl: './getone.component.css'
})
export class GetoneComponent {
  Data:any={}
  id:any;
  constructor(private _api:ApiCallsService,private _activatedRouter:ActivatedRoute,private _routes:Router){
    this.id=this._activatedRouter.snapshot.params["id"];
  }
  ngOnInit(){
    if(this.id!=null){
      this._api.getOne(this.id).subscribe((datas)=>{this.Data=datas});
    }
  }
   doesIt(from:any){
    if(from.name==null){from.name=this.Data.name}
    if(from.avatar==null){from.avatar=this.Data.avatar}
    if(this.id!=null){
      this._api.onUpdate(this.id,from).subscribe(()=>this._routes.navigate([""]))
    }
    else{
      this._api.onPost(from).subscribe(()=>this._routes.navigate([""]));
    }
  }
}
