import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component'
import { DirectoryComponent } from './directory/directory.component';

const routes: Routes = [
    {
        path: '',
        children: []
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
      path: 'directory',
      component: DirectoryComponent
    }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
