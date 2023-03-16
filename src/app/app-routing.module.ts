import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SectionExampleComponent } from './section-example/section-example.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'consumos', component: SectionExampleComponent},
  {path: 'notificaciones', component: SectionExampleComponent},
  {path: 'catalogos', component: SectionExampleComponent},
  {path: 'reportes', component: SectionExampleComponent},
  {path: 'mi-cuenta', component: SectionExampleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
