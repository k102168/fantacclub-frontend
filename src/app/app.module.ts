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
import {GetAllService} from './services/participants/get-all.service';
import {GetAllCompetetionService} from './services/competition/get-all-competetion.service'
import {PostcompetitionService } from './services/competition/postcompetition.service'
import { GetonecompetitionService} from './services/competition/getonecompetition.service'
import {UpdatecompetitionService} from './services/competition/updatecompetition.service'
import { PostService} from './services/participants/post.service';
import {SigninService} from './services/login/signin.service';
import { CompadminComponent } from './compadmin/compadmin.component';
import { CompetitioneditComponent } from './competitionedit/competitionedit.component';
import { ParticipanteditComponent } from './participantedit/participantedit.component';
import {UpdatePigeonTimingService} from './services/update-pigeon-timing.service';

// services
import {GetLeaderBoardService} from './services/get-leader-board.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
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
    CompadminComponent,
    CompetitioneditComponent,
    ParticipanteditComponent,
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
  providers: [
    GetLeaderBoardService,
    GetAllService,
    GetAllCompetetionService,
    PostcompetitionService , 
    GetonecompetitionService,
    UpdatecompetitionService,
    PostService,
    SigninService,
    UpdatePigeonTimingService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
