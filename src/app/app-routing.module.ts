import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecomponentComponent } from './components/homecomponent/homecomponent.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';

const routes: Routes = [{
  path:"",component:HomecomponentComponent
},
{
  path: "albums", component: AlbumListComponent
},
{
  path: "album/:id", component: AlbumDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
