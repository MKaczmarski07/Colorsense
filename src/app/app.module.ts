import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CanvasComponent } from './canvas/canvas.component';
import { NgxColorsModule } from 'ngx-colors';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContrastComponent } from './contrast/contrast.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, CanvasComponent, FooterComponent, HomeComponent, ContrastComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxColorsModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
