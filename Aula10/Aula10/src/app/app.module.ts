import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuTopoComponent } from './menu-topo/menu-topo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlunoModule } from './aluno/aluno.module';
import { FormControl, FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaiComponent } from './pai/pai.component';
import { Filho1Component } from './pai/filho1/filho1.component';
import { Filho2Component } from './pai/filho2/filho2.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from './usuario/usuario.component';
import { NgxLoadingModule } from 'ngx-loading';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    MenuTopoComponent,
    CalculadoraComponent,
    CalcularMediaComponent,
    PageNotFoundComponent,
    PaiComponent,
    Filho1Component,
    Filho2Component,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AlunoModule,
    FormsModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({}),
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
