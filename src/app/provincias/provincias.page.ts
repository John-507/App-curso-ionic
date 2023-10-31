import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.page.html',
  styleUrls: ['./provincias.page.scss'],
})
export class ProvinciasPage implements OnInit {

  token= localStorage.getItem("token");
  provincias: any=[];

  constructor(
    private router: Router,
    private http: HttpClient,
    public toastController: ToastController,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    console.log("token:",this.token)
    //localStorage.removeItem('token');
    localStorage.clear();
    this.getProvincias().subscribe(res=>{
      console.log("Res",res)
      this.provincias=res;
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

  async presentToast1(){
    const toast = await this.toastController.create({
      message: 'Provincia seleccionada',
      duration: 2000,
      position: "bottom"
    });
    toast.present()
  }

  async presentAlert1(){
    const alert = await this.alertController.create({
      header:"Borrar provincia",
      message:"Se ha borrado la ciudad correctamente",
      buttons:["OK"]

    });
    await alert.present()
    let result= await alert.onDidDismiss();
    console.log(result)

  }
  async presentAlert2(){
    const alert = await this.alertController.create({
      header:"Borrar provincia",
      message:"¿Estas seguro que quieres borrar la provincia?",
      buttons:[
        {
          text:'No',
          handler:() =>{
            console.log("No cancel")
          }
        },
        {
          text:'Si',
          handler:() =>{
            console.log("Provincia Eliminada")
          }
        }
      ]

    });
    await alert.present()
    let result= await alert.onDidDismiss();
    console.log(result)

  }

}
