"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Salaire_1 = require("~/models/Salaire");
var SalaireService = /** @class */ (function () {
    function SalaireService() {
        var salaireDev = new Salaire_1.Salaire();
        salaireDev.salaireMinBrut = 30000;
        salaireDev.salaireMaxBrut = 40000;
        salaireDev.salaireMinNet = 20000;
        salaireDev.salaireMaxNet = 30000;
        var salaireAdminReseau = new Salaire_1.Salaire();
        salaireAdminReseau.salaireMinBrut = 20000;
        salaireAdminReseau.salaireMaxBrut = 30000;
        salaireAdminReseau.salaireMinNet = 10000;
        salaireAdminReseau.salaireMaxNet = 20000;
        var salaireFigurant = new Salaire_1.Salaire();
        salaireFigurant.salaireMinBrut = 500;
        salaireFigurant.salaireMaxBrut = 1000;
        salaireFigurant.salaireMinNet = 250;
        salaireFigurant.salaireMaxNet = 500;
        this.salaireTab = [];
        this.salaireTab.push(salaireDev, salaireAdminReseau, salaireFigurant);
    }
    SalaireService.prototype.getSalaire = function (id) {
        return this.salaireTab[id];
    };
    SalaireService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], SalaireService);
    return SalaireService;
}());
exports.SalaireService = SalaireService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsYWlyZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2FsYWlyZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDRDQUF5QztBQUl6QztJQUlFO1FBRUUsSUFBSSxVQUFVLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7UUFDL0IsVUFBVSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDbEMsVUFBVSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDbEMsVUFBVSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDakMsVUFBVSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFFakMsSUFBSSxrQkFBa0IsR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQUN2QyxrQkFBa0IsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzFDLGtCQUFrQixDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDMUMsa0JBQWtCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUN6QyxrQkFBa0IsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBRXZDLElBQUksZUFBZSxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBQ3BDLGVBQWUsQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDO1FBQ3JDLGVBQWUsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RDLGVBQWUsQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO1FBQ3BDLGVBQWUsQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO1FBRXRDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxrQkFBa0IsRUFBQyxlQUFlLENBQUMsQ0FBQztJQUV0RSxDQUFDO0lBR0MsbUNBQVUsR0FBVixVQUFZLEVBQVU7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQWhDUSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7O09BQ0EsY0FBYyxDQWlDMUI7SUFBRCxxQkFBQztDQUFBLEFBakNELElBaUNDO0FBakNZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTYWxhaXJlfSBmcm9tIFwifi9tb2RlbHMvU2FsYWlyZVwiO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTYWxhaXJlU2VydmljZSB7XG5cbiAgc2FsYWlyZVRhYjpBcnJheTxTYWxhaXJlPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIGxldCBzYWxhaXJlRGV2ID0gbmV3IFNhbGFpcmUoKTtcbiAgICBzYWxhaXJlRGV2LnNhbGFpcmVNaW5CcnV0ID0gMzAwMDA7XG4gICAgc2FsYWlyZURldi5zYWxhaXJlTWF4QnJ1dCA9IDQwMDAwO1xuICAgIHNhbGFpcmVEZXYuc2FsYWlyZU1pbk5ldCA9IDIwMDAwO1xuICAgIHNhbGFpcmVEZXYuc2FsYWlyZU1heE5ldCA9IDMwMDAwO1xuXG4gICAgbGV0IHNhbGFpcmVBZG1pblJlc2VhdSA9IG5ldyBTYWxhaXJlKCk7XG4gICAgc2FsYWlyZUFkbWluUmVzZWF1LnNhbGFpcmVNaW5CcnV0ID0gMjAwMDA7XG4gICAgc2FsYWlyZUFkbWluUmVzZWF1LnNhbGFpcmVNYXhCcnV0ID0gMzAwMDA7XG4gICAgc2FsYWlyZUFkbWluUmVzZWF1LnNhbGFpcmVNaW5OZXQgPSAxMDAwMDtcbiAgICBzYWxhaXJlQWRtaW5SZXNlYXUuc2FsYWlyZU1heE5ldCA9IDIwMDAwO1xuXG4gICAgICBsZXQgc2FsYWlyZUZpZ3VyYW50ID0gbmV3IFNhbGFpcmUoKTtcbiAgICAgIHNhbGFpcmVGaWd1cmFudC5zYWxhaXJlTWluQnJ1dCA9IDUwMDtcbiAgICAgIHNhbGFpcmVGaWd1cmFudC5zYWxhaXJlTWF4QnJ1dCA9IDEwMDA7XG4gICAgICBzYWxhaXJlRmlndXJhbnQuc2FsYWlyZU1pbk5ldCA9IDI1MDtcbiAgICAgIHNhbGFpcmVGaWd1cmFudC5zYWxhaXJlTWF4TmV0ID0gNTAwO1xuXG4gICAgdGhpcy5zYWxhaXJlVGFiID0gW107XG4gICAgdGhpcy5zYWxhaXJlVGFiLnB1c2goc2FsYWlyZURldixzYWxhaXJlQWRtaW5SZXNlYXUsc2FsYWlyZUZpZ3VyYW50KTtcblxuICB9XG5cblxuICAgIGdldFNhbGFpcmUgKGlkOiBudW1iZXIpOiBTYWxhaXJlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FsYWlyZVRhYltpZF07XG4gICAgfVxufVxuIl19