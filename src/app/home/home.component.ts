import { Component } from '@angular/core';
import { ApiCallsService } from '../api-calls.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  Datas:any=[]
  constructor(private _api:ApiCallsService){}

  ngOnInit(){
    this._api.onGet().subscribe((data)=>{
      this.Datas=data;
    })
  }
  deletes(id:any){
    this._api.onDel(id).subscribe(()=>{this.ngOnInit()})
  }
}
