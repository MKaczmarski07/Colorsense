import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { CanvasComponent } from './pages/canvas/canvas.component';
import { NgxColorsModule } from 'ngx-colors';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContrastComponent } from './pages/contrast/contrast.component';
import { DisabilityMenuComponent } from './pages/canvas/disability-menu/disability-menu.component';
import { PaletteComponent } from './pages/palette/palette.component';
import { ColorContainerComponent } from './pages/palette/color-container/color-container.component';
import { GeneratorComponent } from './shared/menu/generator/generator.component';
import { LoaderComponent } from './shared/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CanvasComponent,
    FooterComponent,
    HomeComponent,
    ContrastComponent,
    DisabilityMenuComponent,
    PaletteComponent,
    ColorContainerComponent,
    GeneratorComponent,
    LoaderComponent,
  ],
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
