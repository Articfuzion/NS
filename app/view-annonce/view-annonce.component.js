"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var annonce_service_1 = require("~/service/annonce.service");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var ViewAnnonceComponent = /** @class */ (function () {
    function ViewAnnonceComponent(as) {
        this.as = as;
    }
    ViewAnnonceComponent.prototype.ngOnInit = function () {
        this.annoncesTab = this.as.getAllServices();
    };
    ViewAnnonceComponent.prototype.onCloseDrawerTap = function () {
        this.drawer.sideDrawer.closeDrawer();
    };
    __decorate([
        core_1.ViewChild('drawer'),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], ViewAnnonceComponent.prototype, "drawer", void 0);
    ViewAnnonceComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-view-annonce',
            templateUrl: './view-annonce.component.html',
            styleUrls: ['./view-annonce.component.scss']
        }),
        __metadata("design:paramtypes", [annonce_service_1.AnnonceService])
    ], ViewAnnonceComponent);
    return ViewAnnonceComponent;
}());
exports.ViewAnnonceComponent = ViewAnnonceComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1hbm5vbmNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZpZXctYW5ub25jZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFFM0QsNkRBQXlEO0FBQ3pELDhEQUEwRTtBQVExRTtJQUtFLDhCQUFtQixFQUFpQjtRQUFqQixPQUFFLEdBQUYsRUFBRSxDQUFlO0lBQUksQ0FBQztJQUV6Qyx1Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBRTVDLENBQUM7SUFFQywrQ0FBZ0IsR0FBaEI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBWG9CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFnQixnQ0FBc0I7d0RBQUM7SUFIbEQsb0JBQW9CO1FBTmhDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO1NBQzdDLENBQUM7eUNBTXNCLGdDQUFjO09BTHpCLG9CQUFvQixDQWdCaEM7SUFBRCwyQkFBQztDQUFBLEFBaEJELElBZ0JDO0FBaEJZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Fubm9uY2V9IGZyb20gXCJ+L21vZGVscy9Bbm5vbmNlXCI7XG5pbXBvcnQge0Fubm9uY2VTZXJ2aWNlfSBmcm9tIFwifi9zZXJ2aWNlL2Fubm9uY2Uuc2VydmljZVwiO1xuaW1wb3J0IHtSYWRTaWRlRHJhd2VyQ29tcG9uZW50fSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtdmlldy1hbm5vbmNlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3ZpZXctYW5ub25jZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3ZpZXctYW5ub25jZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdBbm5vbmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBhbm5vbmNlc1RhYjpBcnJheTxBbm5vbmNlPlxuICAgIEBWaWV3Q2hpbGQoJ2RyYXdlcicpIHB1YmxpYyBkcmF3ZXI6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGFzOkFubm9uY2VTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFubm9uY2VzVGFiPXRoaXMuYXMuZ2V0QWxsU2VydmljZXMoKTtcblxuICB9XG5cbiAgICBvbkNsb3NlRHJhd2VyVGFwKCkge1xuICAgICAgICB0aGlzLmRyYXdlci5zaWRlRHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4gICAgfVxuXG59XG4iXX0=