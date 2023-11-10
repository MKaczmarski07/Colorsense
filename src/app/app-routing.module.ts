import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanvasComponent } from './pages/canvas/canvas.component';
import { HomeComponent } from './pages/home/home.component';
import { ContrastComponent } from './pages/contrast/contrast.component';
import { PaletteComponent } from './pages/palette/palette.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // main page
  { path: 'canvas', component: CanvasComponent },
  { path: 'contrast', component: ContrastComponent },
  { path: 'palette', component: PaletteComponent },
  { path: '**', redirectTo: '/canvas', pathMatch: 'full' }, //error
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
