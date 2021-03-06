import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WorldComponent } from './components/world/world.component';
import { ArtsComponent } from './components/arts/arts.component';
import { ScienceComponent } from './components/science/science.component';
import { UsComponent } from './components/us/us.component';
import { NewsComponent } from './components/news/news.component';


const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'home', component:HomeComponent },

  { path:'world', component:WorldComponent },
  { path:'arts', component:ArtsComponent },
  { path:'us', component:UsComponent },
  { path:'science', component:ScienceComponent },
  { path:'news', component:NewsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
