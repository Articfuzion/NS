import {NgModule} from "@angular/core";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {Routes} from "@angular/router";

import {ItemsComponent} from "./item/items.component";
import {ItemDetailComponent} from "./item/item-detail.component";
import {AnnonceComponent} from "~/annonce/annonce.component";
import {ViewAnnonceComponent} from "~/view-annonce/view-annonce.component";
import {MissionComponent} from "~/mission/mission.component";

const routes: Routes = [
    {path: "", redirectTo: "/view", pathMatch: "full"},
    {path: "view", component: ViewAnnonceComponent},
    {path: "all/:id", component: MissionComponent},
    {path: "annonce", component: AnnonceComponent},
    {path: "items", component: ItemsComponent},
    {path: "item/:id", component: ItemDetailComponent},
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}