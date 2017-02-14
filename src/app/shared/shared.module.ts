import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { ListErrorsComponent } from './list-errors.component'; 
import { ShowAuthedDirective } from './show-authed.directive'; 
import { ArticleMetaComponent, ArticleListComponent, ArticlePreviewComponent } from './article-helpers';
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
    ArticleListComponent,
    ArticlePreviewComponent,
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
    FollowButtonComponent,
    ArticlePreviewComponent,
    ArticleListComponent
  ]
})
export class SharedModule {}