import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { UsarioComponent } from './components/usario/usario.component';
import { TablaUsuariosComponent } from './components/tabla-usuarios/tabla-usuarios.component';

const routes:Routes = [
  {path: 'usuario-component', component:UsarioComponent},
  {path: 'tabla-usuarios', component:TablaUsuariosComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    UsarioComponent,
    TablaUsuariosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
