import { Component } from '@angular/core'
import { ScoutingPage } from '../scouting/scouting'
import { ResearchPage } from '../research/research'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ScoutingPage
  tab2Root = ResearchPage

  constructor() {

  }
}

