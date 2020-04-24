import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpClientModule } from '@angular/common/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CarProvider } from '../providers/car/car';
import { EverestPage } from '../pages/everest/everest';
import { RangerPage } from '../pages/ranger/ranger';
import { RangerdetailPage } from '../pages/rangerdetail/rangerdetail';
import { EverestdetailPage } from '../pages/everestdetail/everestdetail';
import { PromotionPage } from '../pages/promotion/promotion';
import { RaptorPage } from '../pages/raptor/raptor';
import { NewsPage } from '../pages/news/news';
import { HttpModule } from '@angular/http';
import { DetailnewsPage } from '../pages/detailnews/detailnews';
import { InnovationPage } from '../pages/innovation/innovation';
import { Screenshot } from '@ionic-native/screenshot';
import { Toast } from '@ionic-native/toast';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RangerPage,
    EverestPage,
    RangerdetailPage,
    EverestdetailPage,
    PromotionPage,
    RaptorPage,
    NewsPage,
    DetailnewsPage,
    InnovationPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RangerPage,
    EverestPage,
    RangerdetailPage,
    EverestdetailPage,
    PromotionPage,
    RaptorPage,
    NewsPage,
    DetailnewsPage,
    InnovationPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CarProvider,Screenshot,Toast
    
  ]
})
export class AppModule {}
