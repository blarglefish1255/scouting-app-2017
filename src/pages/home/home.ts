import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http'
import { TheBlueAllianceServiceProvider } from '../../providers/the-blue-alliance-service/the-blue-alliance-service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public http: Http,
    public theBlueAllianceAPI: TheBlueAllianceServiceProvider) {

  }

}
