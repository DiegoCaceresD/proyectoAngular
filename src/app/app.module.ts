import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgImageSliderModule } from 'ng-image-slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PeliculaPrincipalComponent } from './componentes/pelicula-principal/pelicula-principal.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { FavoritosComponent } from './componentes/favoritos/favoritos.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ModalsComponent } from './componentes/modals/modals.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PeliculaPrincipalComponent,
    CarouselComponent,
    FavoritosComponent,
    InicioComponent,
    ModalsComponent
  ],
    imports: [
        BrowserModule,
        NgImageSliderModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
