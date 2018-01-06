import { Component } from '@angular/core'
import { GameScoutingPage } from '../game-scouting/game-scouting'
import { ResearchPage } from '../research/research'
import { FloorScoutingPage } from "../floor-scouting/floor-scouting"

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = GameScoutingPage
  tab2Root = ResearchPage
  tab3Root = FloorScoutingPage

  constructor() {

  }
}

