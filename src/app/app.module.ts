import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { appRoutes } from "./app.routes";

import { ManagerComponent } from "./modules/manager/manager.component";
import { TaskManagerComponent } from "./modules/task-manager/task-manager.component";
import { ProjectManagerComponent } from "./modules/project-manager/project-manager.component";

@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    TaskManagerComponent,
    ProjectManagerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: "enabledBlocking" })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
