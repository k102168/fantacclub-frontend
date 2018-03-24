import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminComponent } from './admin/admin.component';
import { PanelComponent } from './panel/panel.component';
import { FilterPipe } from './filter.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { UsereditcomponentComponent } from './usereditcomponent/usereditcomponent.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    GalleryComponent,
    AboutUsComponent,
    AdminComponent,
    PanelComponent,
    FilterPipe,
    UsereditcomponentComponent,

  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
