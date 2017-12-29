import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'
import { ErrorHandler, NgModule } from '@angular/core'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'
import { SplashScreen } from '@ionic-native/splash-screen'
import { StatusBar } from '@ionic-native/status-bar'

import { MyApp } from './app.component'
import { TabsPage } from '../pages/tabs/tabs'
import { TheBlueAllianceServiceProvider } from '../providers/the-blue-alliance-service/the-blue-alliance-service'
import { ScoutingPage } from '../pages/scouting/scouting'
import { ResearchPage } from '../pages/research/research'


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ScoutingPage,
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
    ScoutingPage,
    ResearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TheBlueAllianceServiceProvider
  ]
})
export class AppModule {}
