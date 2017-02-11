import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EditorComponent } from './editor.component'; 
import { EditableArticlesResolver } from './editable-article-resolver.service';
import { AuthGuard, SharedModule } from '../shared'; 

const editorRouting: ModuleWithProviders = RouterModule.forChild([
	{
		path: 'editor',
		component: EditorComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'editor/:slug',
		component: EditorComponent,
		canActivate: [AuthGuard],
		resolve: {
			article: EditableArticlesResolver
		}
	}
]);

@NgModule({
	imports: [
	editorRouting,
	SharedModule
	],
	declarations: [
		EditorComponent
	],
	providers: [
		EditableArticlesResolver
	]
})
export class EditorModule {}