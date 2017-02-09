import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { SettingsModule } from './settings/settings.module'; 
import { 
  SharedModule,
  ApiService,
  UserService,
  JwtService,
  FooterComponent,
  HeaderComponent,
  AuthGuard
} from './shared'; 

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    rootRouting,
    AuthModule,
    SettingsModule
  ],
  providers: [
    ApiService,
    UserService,
    JwtService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
