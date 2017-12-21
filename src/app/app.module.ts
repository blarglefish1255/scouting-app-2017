import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TheBlueAllianceServiceProvider } from '../providers/the-blue-alliance-service/the-blue-alliance-service';
import { ScoutingPage } from '../pages/scouting/scouting';
import { ResearchPage } from '../pages/research/research';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
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
    HomePage,
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
