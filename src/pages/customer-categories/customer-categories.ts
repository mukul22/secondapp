import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController,LoadingController } from 'ionic-angular';
import {DataService}  from '../../providers/data-service';
import { Observable} from "rxjs/Rx";

/**
 * Generated class for the CustomerCategories page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-customer-categories',
  templateUrl: 'customer-categories.html',
})
export class CustomerCategories {
 menu;
  tilesdata;
  tiles;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,menu:MenuController,private dataservice:DataService,
    public loadingCtrl: LoadingController) {

       this.tilesdata=[
       {categoryname:'BARBER',categoryimage:'assets/img/tiles1.jpg'},
       {categoryname:'HAIR STYLIST',categoryimage:'assets/img/hair.jpg'},
       {categoryname:'WEAVE AND EXTENSIONS SPECIALIST',categoryimage:'assets/img/wav.jpg'},
       {categoryname:'MAKE UP ARTIST',categoryimage:'assets/img/makeup.jpg'},
       {categoryname:'NAIL MANICURE AND PEDICURE',categoryimage:'assets/img/nails.jpg'},
       {categoryname:'TATOO ARTIST',categoryimage:'assets/img/tatoo.jpg'},
       {categoryname:'MASSAGE THERAPIST',categoryimage:'assets/img/massage.jpg'},
       {categoryname:'OTHER SERVICES',categoryimage:'assets/img/other.jpg'},

       ]
       this.menu = menu;
        this.menu.enable(true, 'myMenu')
  }

  // ngOnInit(){
     
  //    let loading = this.loadingCtrl.create({content: 'Please Wait...'});
  //        Observable.fromPromise(loading.present())
  //        .flatMap(data => this.dataservice.CategoryList())
  //        .subscribe(data =>
  //                   loading.dismiss().then(() =>{ 
  //                       this.tiles = data
  //                         this.tilesdata=this.tiles.categoryinfo;
  //                                               }),
  //                     error =>
  //                     loading.dismiss().then(() => {})
  //                   ); 

  // }





list2(category){

	this.navCtrl.push('CustomerHome',{categoryselected:category})
}
}
