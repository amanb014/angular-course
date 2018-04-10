import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { RouterModule } from "@angular/router";
import { AppRouteGuard } from "./route-goard.service";
import { ErrorMessageComponent } from "./error.component";
import { ServerResolver } from "./services/server.resolver";

const routes = [
  { path: '',       component: HomeComponent },
  { path: 'users',  component: UsersComponent,
      children: [
        { path: ':id/:name',  component: UserComponent },
      ]},
  { path: 'servers', canActivateChild: [AppRouteGuard], component: ServersComponent,
      children: [
        { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
        { path: ':id/edit', component: EditServerComponent }
      ]},
  { path: 'error', component: ErrorMessageComponent, data: {message: 'Sorry! This page was not found.'}},
  { path: '**', redirectTo: 'error'}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {

}