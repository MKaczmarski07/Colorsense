import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanvasComponent } from './canvas/canvas.component';
import { HomeComponent } from './home/home.component';
import { ContrastComponent } from './contrast/contrast.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // main page
  { path: 'canvas', component: CanvasComponent },
  { path: 'contrast', component: ContrastComponent },
  { path: '**', redirectTo: '/canvas', pathMatch: 'full' }, //error
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
