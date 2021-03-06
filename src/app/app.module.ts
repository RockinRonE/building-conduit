import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ArticleModule } from './article/article.module'; 
import { AuthModule } from './auth/auth.module';
import { EditorModule } from './editor/editor.module';
import { HomeModule } from './home/home.module';
import { SettingsModule } from './settings/settings.module'; 
import { ProfileModule } from './profile/profile.module'; 
import { 
  ApiService,
  AuthGuard,
  UserService,
  JwtService,
  ProfilesService,
  FooterComponent,
  HeaderComponent,
  SharedModule,
  CommentsService,
  ArticlesService
} from './shared'; 
// import { AuthGuard } from './shared/services/auth-guard.service';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ArticleModule,
    SharedModule,
    HomeModule,
    rootRouting,
    EditorModule,
    AuthModule,
    ProfileModule,
    SettingsModule
  ],
  providers: [
    ApiService,
    ArticlesService,
    AuthGuard,
    UserService,
    JwtService,
    CommentsService,
    ProfilesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
