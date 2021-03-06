import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import {AnnonceComponent} from "~/annonce/annonce.component";
import {ViewAnnonceComponent} from "~/view-annonce/view-annonce.component";
import {AnnonceService} from "~/service/annonce.service";
import {SalaireService} from "~/service/salaire.service";
import {ContactService} from "~/service/contact.service";
import {MissionComponent} from "~/mission/mission.component";
import {NativeScriptUISideDrawerModule} from "nativescript-ui-sidedrawer/angular";
import {NativeScriptFormsModule} from "nativescript-angular";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptUISideDrawerModule,
        NativeScriptFormsModule

    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        AnnonceComponent,
        ViewAnnonceComponent,
        MissionComponent
    ],
    providers: [
        ItemService,
        AnnonceService,
        SalaireService,
        ContactService

    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
