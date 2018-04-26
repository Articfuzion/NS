"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var annonce_service_1 = require("~/service/annonce.service");
var nativescript_angular_1 = require("nativescript-angular");
var MissionComponent = /** @class */ (function () {
    function MissionComponent(route, as, routerExtensions) {
        this.route = route;
        this.as = as;
        this.routerExtensions = routerExtensions;
    }
    MissionComponent.prototype.goBack = function () {
        this.routerExtensions.backToPreviousPage();
    };
    MissionComponent.prototype.ngOnInit = function () {
        var id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.fullAnnonce = this.as.getAnnonceById(id);
    };
    MissionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-mission',
            templateUrl: './mission.component.html',
            styleUrls: ['./mission.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, annonce_service_1.AnnonceService, nativescript_angular_1.RouterExtensions])
    ], MissionComponent);
    return MissionComponent;
}());
exports.MissionComponent = MissionComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzc2lvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtaXNzaW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF1RDtBQUV2RCwwQ0FBK0M7QUFDL0MsNkRBQXlEO0FBQ3pELDZEQUFzRDtBQVF0RDtJQUtFLDBCQUFtQixLQUFvQixFQUFTLEVBQWlCLEVBQVUsZ0JBQWtDO1FBQTFGLFVBQUssR0FBTCxLQUFLLENBQWU7UUFBUyxPQUFFLEdBQUYsRUFBRSxDQUFlO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFFLENBQUM7SUFFdkcsaUNBQU0sR0FBYjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFSCxtQ0FBUSxHQUFSO1FBRUksSUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ2pELENBQUM7SUFmVSxnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQ3hDLENBQUM7eUNBTXlCLHVCQUFjLEVBQVksZ0NBQWMsRUFBNEIsdUNBQWdCO09BTGxHLGdCQUFnQixDQWlCNUI7SUFBRCx1QkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QW5ub25jZX0gZnJvbSBcIn4vbW9kZWxzL0Fubm9uY2VcIjtcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7QW5ub25jZVNlcnZpY2V9IGZyb20gXCJ+L3NlcnZpY2UvYW5ub25jZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtbWlzc2lvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9taXNzaW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWlzc2lvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1pc3Npb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGZ1bGxBbm5vbmNlOkFubm9uY2U7XG5cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcm91dGU6QWN0aXZhdGVkUm91dGUsIHB1YmxpYyBhczpBbm5vbmNlU2VydmljZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKXt9XG5cbiAgICBwdWJsaWMgZ29CYWNrKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gICAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgICBjb25zdCBpZCA9IHBhcnNlSW50KHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpKTtcbiAgICAgIHRoaXMuZnVsbEFubm9uY2UgPSB0aGlzLmFzLmdldEFubm9uY2VCeUlkKGlkKVxuICB9XG5cbn1cbiJdfQ==