import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {GalleryComponent} from './gallery/gallery.component';
import{ AboutUsComponent} from  './about-us/about-us.component'
import { AdminComponent } from './admin/admin.component';
import { PanelComponent } from './panel/panel.component';
import { UsereditcomponentComponent } from './usereditcomponent/usereditcomponent.component';

const routes: Routes =[
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'gallery',        component: GalleryComponent },
    { path: 'aboutus',        component: AboutUsComponent },
    {path :'login' ,          component:AboutUsComponent},
    {path :'admin' ,          component:AdminComponent},
    {path :'panel' ,          component:PanelComponent},
    {path :'usereditcomponent/:_id' , component:UsereditcomponentComponent},
    { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
