import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { RouterModule } from "@angular/router";
import { AppRouteGuard } from "./route-goard.service";

const routes = [
  { path: '',       component: HomeComponent },
  { path: 'users',  component: UsersComponent,
      children: [
        { path: ':id/:name',  component: UserComponent },
      ]},
  { path: 'servers', canActivateChild: [AppRouteGuard], component: ServersComponent,
      children: [
        { path: ':id', component: ServerComponent },
        { path: ':id/edit', component: EditServerComponent }
      ]},
  { path: '**', redirectTo: '/' }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {

}