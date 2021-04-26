import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostUpdateComponent } from './modules/post-update/post-update.component';
import { ErrorComponent } from './shared/error/error.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'post', component: PostUpdateComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
