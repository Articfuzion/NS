"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var annonce_component_1 = require("~/annonce/annonce.component");
var view_annonce_component_1 = require("~/view-annonce/view-annonce.component");
var mission_component_1 = require("~/mission/mission.component");
var routes = [
    { path: "", redirectTo: "/view", pathMatch: "full" },
    { path: "view", component: view_annonce_component_1.ViewAnnonceComponent },
    { path: "all/:id", component: mission_component_1.MissionComponent },
    { path: "annonce", component: annonce_component_1.AnnonceComponent },
    { path: "items", component: items_component_1.ItemsComponent },
    { path: "item/:id", component: item_detail_component_1.ItemDetailComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF1QztBQUN2QyxzREFBcUU7QUFHckUsMERBQXNEO0FBQ3RELHNFQUFpRTtBQUNqRSxpRUFBNkQ7QUFDN0QsZ0ZBQTJFO0FBQzNFLGlFQUE2RDtBQUU3RCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFDO0lBQ2xELEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsNkNBQW9CLEVBQUM7SUFDL0MsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBQztJQUM5QyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFDO0lBQzlDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBQztJQUMxQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLDJDQUFtQixFQUFDO0NBQ3JELENBQUM7QUFNRjtJQUFBO0lBQ0EsQ0FBQztJQURZLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUM1QjtJQUFELHVCQUFDO0NBQUEsQUFERCxJQUNDO0FBRFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1JvdXRlc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQge0l0ZW1zQ29tcG9uZW50fSBmcm9tIFwiLi9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtJdGVtRGV0YWlsQ29tcG9uZW50fSBmcm9tIFwiLi9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBbm5vbmNlQ29tcG9uZW50fSBmcm9tIFwifi9hbm5vbmNlL2Fubm9uY2UuY29tcG9uZW50XCI7XG5pbXBvcnQge1ZpZXdBbm5vbmNlQ29tcG9uZW50fSBmcm9tIFwifi92aWV3LWFubm9uY2Uvdmlldy1hbm5vbmNlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtNaXNzaW9uQ29tcG9uZW50fSBmcm9tIFwifi9taXNzaW9uL21pc3Npb24uY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHtwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi92aWV3XCIsIHBhdGhNYXRjaDogXCJmdWxsXCJ9LFxuICAgIHtwYXRoOiBcInZpZXdcIiwgY29tcG9uZW50OiBWaWV3QW5ub25jZUNvbXBvbmVudH0sXG4gICAge3BhdGg6IFwiYWxsLzppZFwiLCBjb21wb25lbnQ6IE1pc3Npb25Db21wb25lbnR9LFxuICAgIHtwYXRoOiBcImFubm9uY2VcIiwgY29tcG9uZW50OiBBbm5vbmNlQ29tcG9uZW50fSxcbiAgICB7cGF0aDogXCJpdGVtc1wiLCBjb21wb25lbnQ6IEl0ZW1zQ29tcG9uZW50fSxcbiAgICB7cGF0aDogXCJpdGVtLzppZFwiLCBjb21wb25lbnQ6IEl0ZW1EZXRhaWxDb21wb25lbnR9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7XG59Il19