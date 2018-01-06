import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'
import { TheBlueAllianceServiceProvider} from '../../providers/the-blue-alliance-service/the-blue-alliance-service'

@Component({
  selector: 'page-research',
  templateUrl: 'research.html'
})
export class ResearchPage {

  private list

  constructor(public navCtrl: NavController, private tba: TheBlueAllianceServiceProvider) {
    this.list = this.tba.getTeamList(0).subscribe(teams => {
      this.list = teams
    })
    console.log(this.list);
  }
}

