import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-provincia',
  templateUrl: './provincia.page.html',
  styleUrls: ['./provincia.page.scss'],
})
export class ProvinciaPage implements OnInit {

  id:any;
  finalId: number;
  provincias: any=[];
  name:string;
  image:string;
  desc:string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.finalId= this.id -1;
    console.log("id",this.id)

    this.getProvincias().subscribe(res=>{
      console.log("Res",res)
      this.provincias=res;
      this.name= this.provincias[this.finalId].name;
      this.image= this.provincias[this.finalId].image;
      this.desc= this.provincias[this.finalId].desc;
    });
  }

  getProvincias(){
    return this.http
    .get("assets/files/provincias.json")
    .pipe(
      map((res:any) =>{
        return res.data;
      })
    )
  }

}
