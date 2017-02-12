import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ListErrorsComponent } from './list-errors.component'; 
import { ShowAuthedDirective } from './show-authed.directive'; 
import { ArticleMetaComponent } from './article-helpers';
import { FavoriteButtonComponent, FollowButtonComponent } from './buttons';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule
  ],
  declarations: [
    ListErrorsComponent,
    ShowAuthedDirective,
    FollowButtonComponent,
    FavoriteButtonComponent,
    ArticleMetaComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ArticleMetaComponent,
    FavoriteButtonComponent,
    HttpModule,
    ListErrorsComponent,
    RouterModule,
    ShowAuthedDirective,
    FollowButtonComponent
  ]
})
export class SharedModule {}