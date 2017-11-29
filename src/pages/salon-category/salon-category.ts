import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the SalonCategory page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-salon-category',
  templateUrl: 'salon-category.html',
})
export class SalonCategory {
  value1

   cbArr= [];
    cbChecked=[];


  submitted = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewctrl:ViewController) {
  	 this.cbArr = [
     {name:'BARBER',id:1}, {name:'HAIR STYLIST',id:2}, {name:'WEAVE AND EXTENSIONS SPECIALIST',id:3},{name:'MAKE UP ARTIST',id:4},
{name:'NAIL MANICURE AND PEDICURE',id:5},{name:'TATOO ARTIST',id:6},{name:'MASSAGE THERAPIST',id:7},{name:'OTHER SERVICES',id:8}]
    this.cbChecked = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalonCategory');
  }

updateCheckedOptions(chBox, event) {
      var cbIdx = this.cbChecked.indexOf(chBox);

      if(event.target.checked) {
          if(cbIdx < 0 ){
               this.cbChecked.push(chBox);
             console.log(chBox);
          }

      } else {
          if(cbIdx >= 0 ){
             this.cbChecked.splice(cbIdx,1);
              console.log(cbIdx);
          }

      }
    
  }
   updateOptions() {
   	// console.log("is"+this.cbChecked)
    this.viewctrl.dismiss({services:this.cbChecked});
  }
  /////////////////////////////

cancel(){
this.viewctrl.dismiss()

}
}



