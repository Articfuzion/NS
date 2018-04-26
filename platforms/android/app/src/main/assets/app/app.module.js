"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var item_service_1 = require("./item/item.service");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var annonce_component_1 = require("~/annonce/annonce.component");
var view_annonce_component_1 = require("~/view-annonce/view-annonce.component");
var annonce_service_1 = require("~/service/annonce.service");
var salaire_service_1 = require("~/service/salaire.service");
var contact_service_1 = require("~/service/contact.service");
var mission_component_1 = require("~/mission/mission.component");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var nativescript_angular_1 = require("nativescript-angular");
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                angular_1.NativeScriptUISideDrawerModule,
                nativescript_angular_1.NativeScriptFormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                items_component_1.ItemsComponent,
                item_detail_component_1.ItemDetailComponent,
                annonce_component_1.AnnonceComponent,
                view_annonce_component_1.ViewAnnonceComponent,
                mission_component_1.MissionComponent
            ],
            providers: [
                item_service_1.ItemService,
                annonce_service_1.AnnonceService,
                salaire_service_1.SalaireService,
                contact_service_1.ContactService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFFL0Msb0RBQWtEO0FBQ2xELDBEQUF3RDtBQUN4RCxzRUFBbUU7QUFDbkUsaUVBQTZEO0FBQzdELGdGQUEyRTtBQUMzRSw2REFBeUQ7QUFDekQsNkRBQXlEO0FBQ3pELDZEQUF5RDtBQUN6RCxpRUFBNkQ7QUFDN0QsOERBQWtGO0FBQ2xGLDZEQUE2RDtBQUU3RCwyRUFBMkU7QUFDM0Usd0VBQXdFO0FBRXhFLDZFQUE2RTtBQUM3RSxzRUFBc0U7QUFtQ3RFO0lBSEE7O01BRUU7SUFDRjtJQUF5QixDQUFDO0lBQWIsU0FBUztRQWpDckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiw4QkFBZ0I7Z0JBQ2hCLHdDQUE4QjtnQkFDOUIsOENBQXVCO2FBRTFCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLGdDQUFjO2dCQUNkLDJDQUFtQjtnQkFDbkIsb0NBQWdCO2dCQUNoQiw2Q0FBb0I7Z0JBQ3BCLG9DQUFnQjthQUNuQjtZQUNELFNBQVMsRUFBRTtnQkFDUCwwQkFBVztnQkFDWCxnQ0FBYztnQkFDZCxnQ0FBYztnQkFDZCxnQ0FBYzthQUVqQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO1FBQ0Y7O1VBRUU7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS9pdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEl0ZW1EZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBbm5vbmNlQ29tcG9uZW50fSBmcm9tIFwifi9hbm5vbmNlL2Fubm9uY2UuY29tcG9uZW50XCI7XG5pbXBvcnQge1ZpZXdBbm5vbmNlQ29tcG9uZW50fSBmcm9tIFwifi92aWV3LWFubm9uY2Uvdmlldy1hbm5vbmNlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBbm5vbmNlU2VydmljZX0gZnJvbSBcIn4vc2VydmljZS9hbm5vbmNlLnNlcnZpY2VcIjtcbmltcG9ydCB7U2FsYWlyZVNlcnZpY2V9IGZyb20gXCJ+L3NlcnZpY2Uvc2FsYWlyZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbnRhY3RTZXJ2aWNlfSBmcm9tIFwifi9zZXJ2aWNlL2NvbnRhY3Quc2VydmljZVwiO1xuaW1wb3J0IHtNaXNzaW9uQ29tcG9uZW50fSBmcm9tIFwifi9taXNzaW9uL21pc3Npb24uY29tcG9uZW50XCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSFRUUCB3cmFwcGVyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZVxuXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBJdGVtc0NvbXBvbmVudCxcbiAgICAgICAgSXRlbURldGFpbENvbXBvbmVudCxcbiAgICAgICAgQW5ub25jZUNvbXBvbmVudCxcbiAgICAgICAgVmlld0Fubm9uY2VDb21wb25lbnQsXG4gICAgICAgIE1pc3Npb25Db21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBJdGVtU2VydmljZSxcbiAgICAgICAgQW5ub25jZVNlcnZpY2UsXG4gICAgICAgIFNhbGFpcmVTZXJ2aWNlLFxuICAgICAgICBDb250YWN0U2VydmljZVxuXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19