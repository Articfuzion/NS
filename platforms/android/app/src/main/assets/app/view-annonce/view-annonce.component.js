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
    ViewAnnonceComponent.prototype.openNav = function () {
        if (this.drawer.sideDrawer.getIsOpen()) {
            this.drawer.sideDrawer.closeDrawer();
        }
        else {
            this.drawer.sideDrawer.showDrawer();
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1hbm5vbmNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZpZXctYW5ub25jZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFFM0QsNkRBQXlEO0FBQ3pELDhEQUEwRTtBQVExRTtJQUtFLDhCQUFtQixFQUFpQjtRQUFqQixPQUFFLEdBQUYsRUFBRSxDQUFlO0lBQUksQ0FBQztJQUV6Qyx1Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBRTVDLENBQUM7SUFFQyxzQ0FBTyxHQUFQO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ3RDLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQ3JDLENBQUM7SUFDSCxDQUFDO0lBS0QsK0NBQWdCLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQXZCb0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQWdCLGdDQUFzQjt3REFBQztJQUhsRCxvQkFBb0I7UUFOaEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7U0FDN0MsQ0FBQzt5Q0FNc0IsZ0NBQWM7T0FMekIsb0JBQW9CLENBNEJoQztJQUFELDJCQUFDO0NBQUEsQUE1QkQsSUE0QkM7QUE1Qlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QW5ub25jZX0gZnJvbSBcIn4vbW9kZWxzL0Fubm9uY2VcIjtcbmltcG9ydCB7QW5ub25jZVNlcnZpY2V9IGZyb20gXCJ+L3NlcnZpY2UvYW5ub25jZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1JhZFNpZGVEcmF3ZXJDb21wb25lbnR9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC12aWV3LWFubm9uY2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vdmlldy1hbm5vbmNlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdmlldy1hbm5vbmNlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVmlld0Fubm9uY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGFubm9uY2VzVGFiOkFycmF5PEFubm9uY2U+XG4gICAgQFZpZXdDaGlsZCgnZHJhd2VyJykgcHVibGljIGRyYXdlcjogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXM6QW5ub25jZVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYW5ub25jZXNUYWI9dGhpcy5hcy5nZXRBbGxTZXJ2aWNlcygpO1xuXG4gIH1cblxuICAgIG9wZW5OYXYoKSB7XG4gICAgICBpZiAodGhpcy5kcmF3ZXIuc2lkZURyYXdlci5nZXRJc09wZW4oKSl7XG4gICAgICAgIHRoaXMuZHJhd2VyLnNpZGVEcmF3ZXIuY2xvc2VEcmF3ZXIoKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuZHJhd2VyLnNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpXG4gICAgICB9XG4gICAgfVxuXG5cblxuXG4gICAgb25DbG9zZURyYXdlclRhcCgpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIuc2lkZURyYXdlci5jbG9zZURyYXdlcigpO1xuICAgIH1cblxufVxuIl19