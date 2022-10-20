import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuTopoComponent } from './menu-topo/menu-topo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlunoModule } from './aluno/aluno.module';
import { FormControl, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuTopoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AlunoModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
