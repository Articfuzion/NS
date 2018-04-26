"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Annonce_1 = require("../models/Annonce");
var AnnonceComponent = /** @class */ (function () {
    function AnnonceComponent() {
    }
    AnnonceComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Annonce_1.Annonce)
    ], AnnonceComponent.prototype, "annonceAjout", void 0);
    AnnonceComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-annonce',
            templateUrl: './annonce.component.html',
            styleUrls: ['./annonce.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], AnnonceComponent);
    return AnnonceComponent;
}());
exports.AnnonceComponent = AnnonceComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub25jZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbm5vbmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF1RDtBQUN2RCw2Q0FBMEM7QUFTMUM7SUFJRTtJQUFnQixDQUFDO0lBRWpCLG1DQUFRLEdBQVI7SUFHQSxDQUFDO0lBUFE7UUFBUixZQUFLLEVBQUU7a0NBQWMsaUJBQU87MERBQUM7SUFGbkIsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUN4QyxDQUFDOztPQUNXLGdCQUFnQixDQVc1QjtJQUFELHVCQUFDO0NBQUEsQUFYRCxJQVdDO0FBWFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBbm5vbmNlfSBmcm9tIFwiLi4vbW9kZWxzL0Fubm9uY2VcIjtcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWFubm9uY2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vYW5ub25jZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Fubm9uY2UuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBbm5vbmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBhbm5vbmNlQWpvdXQ6QW5ub25jZTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuXG5cbiAgfVxuXG59XG4iXX0=