import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HelperMethodsProvider } from '../providers/helper-methods/helper-methods';
import { DataProvider } from '../providers/data/data';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthProvider } from '../providers/auth/auth';
import { environment } from './environments/environment';
// import { AngularFireModule } from '@angular/fire';
import { LoginPageModule } from '../pages/login/login.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,

  ],
  imports: [
    BrowserModule,
    LoginPageModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    // AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    HttpClient,
    LoginPageModule,
    HttpClientModule,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HelperMethodsProvider,
    DataProvider,
    AuthProvider
  ]
})
export class AppModule {}
