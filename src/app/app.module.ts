import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'
import { ErrorHandler, NgModule } from '@angular/core'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'
import { SplashScreen } from '@ionic-native/splash-screen'
import { StatusBar } from '@ionic-native/status-bar'

import { MyApp } from './app.component'
import { TabsPage } from '../pages/tabs/tabs'
import { TheBlueAllianceServiceProvider } from '../providers/the-blue-alliance-service/the-blue-alliance-service'
import { GameScoutingPage } from '../pages/game-scouting/game-scouting'
import { ResearchPage } from '../pages/research/research'
import { FloorScoutingPage } from '../pages/floor-scouting/floor-scouting'


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    GameScoutingPage,
    ResearchPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    GameScoutingPage,
    ResearchPage,
    FloorScoutingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TheBlueAllianceServiceProvider
  ]
})
export class AppModule {}
