import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Article, ArticlesService } from '../shared'; 

@Component({
	selector: 'editor-page',
	templateUrl: 'editor.component.html'
})
export class EditorComponent implements OnInit {
	article: Article = new Article(); 
	articleForm: FormGroup;
	tagField = new FormControl();
	errors: Object = {};
	isSubmitting: boolean = false; 

	constructor( 
		private articlesService: ArticlesService,
		private route: ActivatedRoute,
		private router: Router,
		private fb: FormBuilder ) 
		{ 
			this.articleForm = this.fb.group({
			title: '',
			description: '',
			body: '',
		});
	}

	ngOnInit() {
		// If there's an article prefetched, load it 
		this.route.data.subscribe(
			(data: { article: Article }) => {
				if (data.article) {
					this.article = data.article;
					this.articleForm.patchValue(data.article); 
				}
			}
		);
	}

	addTag() {
		//retrieve tag control
		let tag = this.tagField.value; 
		// only add tag if it does not exist yet
		if (this.article.tagList.indexOf(tag) < 0) {
			this.article.tagList.push(tag); 
		}

		// clear input
		this.tagField.reset(''); 
	}

	removeTag(tagName:string) {
		this.article.tagList = this.article.tagList.filter( (tag) => tag !== tagName);
	}

	updateArticle(values: Object) {
		(<any>Object).assign(this.article, values); 
	}

	submitForm() {
		this.isSubmitting = true; 

		 // update model
		 this.updateArticle(this.articleForm.value); 

		 // post chagnes
		 this.articlesService.save(this.article).subscribe(
		 	article => this.router.navigateByUrl('/article/' + article.slug),
		 	err => {
		 		this.errors = err; 
		 		this.isSubmitting = false; 
		 	}
		 );
	}
}