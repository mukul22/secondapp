import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,LoadingController } from 'ionic-angular';
import { Observable} from "rxjs/Rx";
import {Http} from '@angular/http';
import {DataService}  from '../../providers/data-service';
/**
 * Generated class for the SalonEditCategoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-salon-edit-category',
  templateUrl: 'salon-edit-category.html',
})
export class SalonEditCategoryPage {
	value1
  mydata
   cbArr= [];
    cbChecked=[];
   ourdata
   category_data=[]

  submitted = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewctrl:ViewController,public loadingCtrl:LoadingController,public dataservice:DataService) {
  	 this.cbArr = [
     {name:'BARBER',id:1}, {name:'HAIR STYLIST',id:2}, {name:'WEAVE AND EXTENSIONS SPECIALIST',id:3},{name:'MAKE UP ARTIST',id:4},
{name:'NAIL MANICURE AND PEDICURE',id:5},{name:'TATOO ARTIST',id:6},{name:'MASSAGE THERAPIST',id:7},{name:'OTHER SERVICES',id:8}]
    
  }

  ionViewDidLoad() {
     let loading = this.loadingCtrl.create({content:'Please Wait ...'
          });
         Observable.fromPromise(loading.present())
             .flatMap(data => this.dataservice.get_salon_category())
               .subscribe(data =>
             loading.dismiss().then(() => {
             this.mydata = data
               this.ourdata=this.mydata.data.category
           
               for(var i=0;i<this.ourdata.length;i++){
           this.cbChecked.push(this.ourdata[i].name)
           this.category_data.push(this.ourdata[i])
                       }
                        
}))

  }
updateCheckedOptions(chBox, event) {
      var cbIdx = this.cbChecked.indexOf(chBox.name);
alert(cbIdx)
      if(event.target.checked) {
          if(cbIdx < 0 ){
               this.category_data.push(chBox);
             console.log(chBox);
          }

      } else {
          if(cbIdx >= 0 ){
            alert(cbIdx)
             this.category_data.splice(cbIdx,1);
             this.cbChecked.splice(cbIdx,1)
              console.log(cbIdx);
          }

      }
    
  }
   updateOptions() {
let loading =this.loadingCtrl.create({content:'Please Wait ..'})
   Observable.fromPromise(loading.present())
             .flatMap(data => this.dataservice.edit_salon_category(this.category_data))
               .subscribe(data =>
             loading.dismiss().then(() => {
             this.mydata = data
   
  }))



}
cancel(){
  this.navCtrl.setRoot('MySalonHome')
}


}