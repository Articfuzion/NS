"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Annonce_1 = require("~/models/Annonce");
var contact_service_1 = require("~/service/contact.service");
var ContactUtils_1 = require("~/utils/ContactUtils");
var salaire_service_1 = require("~/service/salaire.service");
var SalaireUtils_1 = require("~/utils/SalaireUtils");
var AnnonceService = /** @class */ (function () {
    function AnnonceService(cs, ss) {
        this.cs = cs;
        this.ss = ss;
        var cu = new ContactUtils_1.ContactUtils();
        var su = new SalaireUtils_1.SalaireUtils();
        var annonceDev = new Annonce_1.Annonce();
        annonceDev.titre = 'CDD Dev web';
        annonceDev.poste = 'Developpeur Web';
        annonceDev.description = 'Création d\'un site wordpress pour un client';
        annonceDev.contact = this.cs.getContact(cu.ID_CONTACT1);
        annonceDev.date = new Date();
        annonceDev.salaire = this.ss.getSalaire(su.ID_SALAIRE1);
        annonceDev.lieu = 'Clermont-Ferrand';
        annonceDev.id = 1;
        var annonceAdminReseau = new Annonce_1.Annonce();
        annonceAdminReseau.titre = 'CDI Admin Réseau';
        annonceAdminReseau.poste = 'Administrateur Réseau';
        annonceAdminReseau.description = 'Gestion d\'un parc informatique';
        annonceAdminReseau.contact = this.cs.getContact(cu.ID_CONTACT2);
        annonceAdminReseau.date = new Date();
        annonceAdminReseau.salaire = this.ss.getSalaire(su.ID_SALAIRE2);
        annonceAdminReseau.lieu = 'Clermont-Ferrand';
        annonceAdminReseau.id = 2;
        var annonceFigurant = new Annonce_1.Annonce();
        annonceFigurant.titre = 'Figuration film JB';
        annonceFigurant.poste = 'Figuration lors de plusieurs scènes pour la série JB';
        annonceFigurant.description = 'Participer a plusieurs scènes lors d\'un tournage';
        annonceFigurant.contact = this.cs.getContact(cu.ID_JB);
        annonceFigurant.date = new Date();
        annonceFigurant.salaire = this.ss.getSalaire(su.ID_SALAIREFIG);
        annonceFigurant.lieu = 'Chez JB';
        annonceFigurant.id = 3;
        this.annonceTab = [];
        this.annonceTab.push(annonceDev, annonceAdminReseau, annonceFigurant);
    }
    AnnonceService.prototype.getAnnonceById = function (id) {
        return this.annonceTab.filter(function (annonce) { return annonce.id === id; })[0];
    };
    AnnonceService.prototype.getAllServices = function () {
        return this.annonceTab;
    };
    AnnonceService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [contact_service_1.ContactService, salaire_service_1.SalaireService])
    ], AnnonceService);
    return AnnonceService;
}());
exports.AnnonceService = AnnonceService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub25jZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYW5ub25jZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDRDQUF5QztBQUN6Qyw2REFBeUQ7QUFDekQscURBQWtEO0FBQ2xELDZEQUF5RDtBQUN6RCxxREFBa0Q7QUFJbEQ7SUFJRSx3QkFBbUIsRUFBaUIsRUFBUyxFQUFpQjtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFlO1FBQVMsT0FBRSxHQUFGLEVBQUUsQ0FBZTtRQUUxRCxJQUFJLEVBQUUsR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQztRQUM1QixJQUFJLEVBQUUsR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQztRQUU1QixJQUFJLFVBQVUsR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQUMvQixVQUFVLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztRQUNqQyxVQUFVLENBQUMsS0FBSyxHQUFHLGlCQUFpQixDQUFDO1FBQ3JDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsOENBQThDLENBQUM7UUFDeEUsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEQsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzdCLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hELFVBQVUsQ0FBQyxJQUFJLEdBQUcsa0JBQWtCLENBQUM7UUFDckMsVUFBVSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFHbEIsSUFBSSxrQkFBa0IsR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQUN2QyxrQkFBa0IsQ0FBQyxLQUFLLEdBQUcsa0JBQWtCLENBQUM7UUFDOUMsa0JBQWtCLENBQUMsS0FBSyxHQUFHLHVCQUF1QixDQUFDO1FBQ25ELGtCQUFrQixDQUFDLFdBQVcsR0FBRyxpQ0FBaUMsQ0FBQztRQUNuRSxrQkFBa0IsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hFLGtCQUFrQixDQUFDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3JDLGtCQUFrQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEUsa0JBQWtCLENBQUMsSUFBSSxHQUFHLGtCQUFrQixDQUFDO1FBQzdDLGtCQUFrQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFMUIsSUFBSSxlQUFlLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7UUFDcEMsZUFBZSxDQUFDLEtBQUssR0FBRyxvQkFBb0IsQ0FBQztRQUM3QyxlQUFlLENBQUMsS0FBSyxHQUFHLHNEQUFzRCxDQUFDO1FBQy9FLGVBQWUsQ0FBQyxXQUFXLEdBQUcsbURBQW1ELENBQUM7UUFDbEYsZUFBZSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkQsZUFBZSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ2xDLGVBQWUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9ELGVBQWUsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ2pDLGVBQWUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXZCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxrQkFBa0IsRUFBQyxlQUFlLENBQUMsQ0FBQztJQUl4RSxDQUFDO0lBR0QsdUNBQWMsR0FBZCxVQUFlLEVBQVM7UUFFcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBR0MsdUNBQWMsR0FBZDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUF4RFEsY0FBYztRQUQxQixpQkFBVSxFQUFFO3lDQUtXLGdDQUFjLEVBQVksZ0NBQWM7T0FKbkQsY0FBYyxDQTBEMUI7SUFBRCxxQkFBQztDQUFBLEFBMURELElBMERDO0FBMURZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBbm5vbmNlfSBmcm9tIFwifi9tb2RlbHMvQW5ub25jZVwiO1xuaW1wb3J0IHtDb250YWN0U2VydmljZX0gZnJvbSBcIn4vc2VydmljZS9jb250YWN0LnNlcnZpY2VcIjtcbmltcG9ydCB7Q29udGFjdFV0aWxzfSBmcm9tIFwifi91dGlscy9Db250YWN0VXRpbHNcIjtcbmltcG9ydCB7U2FsYWlyZVNlcnZpY2V9IGZyb20gXCJ+L3NlcnZpY2Uvc2FsYWlyZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1NhbGFpcmVVdGlsc30gZnJvbSBcIn4vdXRpbHMvU2FsYWlyZVV0aWxzXCI7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFubm9uY2VTZXJ2aWNlIHtcblxuICAgIGFubm9uY2VUYWI6QXJyYXk8QW5ub25jZT47XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNzOkNvbnRhY3RTZXJ2aWNlLCBwdWJsaWMgc3M6U2FsYWlyZVNlcnZpY2UpIHtcblxuICAgICAgbGV0IGN1ID0gbmV3IENvbnRhY3RVdGlscygpO1xuICAgICAgbGV0IHN1ID0gbmV3IFNhbGFpcmVVdGlscygpO1xuXG4gICAgICBsZXQgYW5ub25jZURldiA9IG5ldyBBbm5vbmNlKCk7XG4gICAgICBhbm5vbmNlRGV2LnRpdHJlID0gJ0NERCBEZXYgd2ViJztcbiAgICAgIGFubm9uY2VEZXYucG9zdGUgPSAnRGV2ZWxvcHBldXIgV2ViJztcbiAgICAgIGFubm9uY2VEZXYuZGVzY3JpcHRpb24gPSAnQ3LDqWF0aW9uIGRcXCd1biBzaXRlIHdvcmRwcmVzcyBwb3VyIHVuIGNsaWVudCc7XG4gICAgICBhbm5vbmNlRGV2LmNvbnRhY3QgPSB0aGlzLmNzLmdldENvbnRhY3QoY3UuSURfQ09OVEFDVDEpO1xuICAgICAgYW5ub25jZURldi5kYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIGFubm9uY2VEZXYuc2FsYWlyZSA9IHRoaXMuc3MuZ2V0U2FsYWlyZShzdS5JRF9TQUxBSVJFMSk7XG4gICAgICBhbm5vbmNlRGV2LmxpZXUgPSAnQ2xlcm1vbnQtRmVycmFuZCc7XG4gICAgICBhbm5vbmNlRGV2LmlkID0gMTtcblxuXG4gICAgICBsZXQgYW5ub25jZUFkbWluUmVzZWF1ID0gbmV3IEFubm9uY2UoKTtcbiAgICAgIGFubm9uY2VBZG1pblJlc2VhdS50aXRyZSA9ICdDREkgQWRtaW4gUsOpc2VhdSc7XG4gICAgICBhbm5vbmNlQWRtaW5SZXNlYXUucG9zdGUgPSAnQWRtaW5pc3RyYXRldXIgUsOpc2VhdSc7XG4gICAgICBhbm5vbmNlQWRtaW5SZXNlYXUuZGVzY3JpcHRpb24gPSAnR2VzdGlvbiBkXFwndW4gcGFyYyBpbmZvcm1hdGlxdWUnO1xuICAgICAgYW5ub25jZUFkbWluUmVzZWF1LmNvbnRhY3QgPSB0aGlzLmNzLmdldENvbnRhY3QoY3UuSURfQ09OVEFDVDIpO1xuICAgICAgYW5ub25jZUFkbWluUmVzZWF1LmRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgYW5ub25jZUFkbWluUmVzZWF1LnNhbGFpcmUgPSB0aGlzLnNzLmdldFNhbGFpcmUoc3UuSURfU0FMQUlSRTIpO1xuICAgICAgYW5ub25jZUFkbWluUmVzZWF1LmxpZXUgPSAnQ2xlcm1vbnQtRmVycmFuZCc7XG4gICAgICBhbm5vbmNlQWRtaW5SZXNlYXUuaWQgPSAyO1xuXG4gICAgICBsZXQgYW5ub25jZUZpZ3VyYW50ID0gbmV3IEFubm9uY2UoKTtcbiAgICAgIGFubm9uY2VGaWd1cmFudC50aXRyZSA9ICdGaWd1cmF0aW9uIGZpbG0gSkInO1xuICAgICAgYW5ub25jZUZpZ3VyYW50LnBvc3RlID0gJ0ZpZ3VyYXRpb24gbG9ycyBkZSBwbHVzaWV1cnMgc2PDqG5lcyBwb3VyIGxhIHPDqXJpZSBKQic7XG4gICAgICBhbm5vbmNlRmlndXJhbnQuZGVzY3JpcHRpb24gPSAnUGFydGljaXBlciBhIHBsdXNpZXVycyBzY8OobmVzIGxvcnMgZFxcJ3VuIHRvdXJuYWdlJztcbiAgICAgIGFubm9uY2VGaWd1cmFudC5jb250YWN0ID0gdGhpcy5jcy5nZXRDb250YWN0KGN1LklEX0pCKTtcbiAgICAgIGFubm9uY2VGaWd1cmFudC5kYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIGFubm9uY2VGaWd1cmFudC5zYWxhaXJlID0gdGhpcy5zcy5nZXRTYWxhaXJlKHN1LklEX1NBTEFJUkVGSUcpO1xuICAgICAgYW5ub25jZUZpZ3VyYW50LmxpZXUgPSAnQ2hleiBKQic7XG4gICAgICBhbm5vbmNlRmlndXJhbnQuaWQgPSAzO1xuXG4gICAgICB0aGlzLmFubm9uY2VUYWIgPSBbXTtcbiAgICAgIHRoaXMuYW5ub25jZVRhYi5wdXNoKGFubm9uY2VEZXYsYW5ub25jZUFkbWluUmVzZWF1LGFubm9uY2VGaWd1cmFudCk7XG5cblxuXG4gIH1cblxuXG4gIGdldEFubm9uY2VCeUlkKGlkOm51bWJlcik6QW5ub25jZXtcblxuICAgICAgcmV0dXJuIHRoaXMuYW5ub25jZVRhYi5maWx0ZXIoYW5ub25jZSA9PiBhbm5vbmNlLmlkID09PSBpZClbMF07XG4gIH1cblxuXG4gICAgZ2V0QWxsU2VydmljZXMoKTpBcnJheTxBbm5vbmNlPntcbiAgICAgIHJldHVybiB0aGlzLmFubm9uY2VUYWI7XG4gICAgfVxuXG59XG4iXX0=