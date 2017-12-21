import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http'
import { TheBlueAllianceServiceProvider } from '../../providers/the-blue-alliance-service/the-blue-alliance-service'

import { ScoutingPage } from '../scouting/scouting';
import { ResearchPage } from '../research/research';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

<<<<<<< Updated upstream
  constructor(public navCtrl: NavController, public http: Http,
    public theBlueAllianceAPI: TheBlueAllianceServiceProvider) {
=======
  tab1Root = ScoutingPage;
  tab2Root = ResearchPage;
  
   

  constructor(public navCtrl: NavController) {
>>>>>>> Stashed changes

  }
}

