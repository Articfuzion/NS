"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Contact_1 = require("~/models/Contact");
var ContactService = /** @class */ (function () {
    function ContactService() {
        var contact1 = new Contact_1.Contact();
        contact1.nom = 'Monsieur1';
        contact1.prenom = 'Patrick';
        contact1.numero = '0606060606';
        contact1.mail = 'Patrick.monsieur1@gmail.com';
        var contact2 = new Contact_1.Contact();
        contact2.nom = 'Monsieur2';
        contact2.prenom = 'Jean';
        contact2.numero = '0612345678';
        contact2.mail = 'Jean.monsieur2@gmail.com';
        var jb = new Contact_1.Contact();
        jb.nom = 'Laurendon';
        jb.prenom = 'Jean';
        jb.numero = '06145754574';
        jb.mail = 'Jean.laurendon@gmail.com';
        this.contactTab = [];
        this.contactTab.push(contact1, contact2, jb);
    }
    ContactService.prototype.getContact = function (id) {
        return this.contactTab[id];
    };
    ContactService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ContactService);
    return ContactService;
}());
exports.ContactService = ContactService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29udGFjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDRDQUF5QztBQUd6QztJQUlFO1FBRUUsSUFBSSxRQUFRLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7UUFDN0IsUUFBUSxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUM7UUFDM0IsUUFBUSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFDNUIsUUFBUSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7UUFDL0IsUUFBUSxDQUFDLElBQUksR0FBRyw2QkFBNkIsQ0FBQztRQUU5QyxJQUFJLFFBQVEsR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQUM3QixRQUFRLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQztRQUMzQixRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN6QixRQUFRLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztRQUMvQixRQUFRLENBQUMsSUFBSSxHQUFHLDBCQUEwQixDQUFDO1FBRTNDLElBQUksRUFBRSxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBQ3ZCLEVBQUUsQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ25CLEVBQUUsQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDO1FBQzFCLEVBQUUsQ0FBQyxJQUFJLEdBQUcsMEJBQTBCLENBQUM7UUFFckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxFQUFFLENBQUMsQ0FBQztJQUk3QyxDQUFDO0lBRUMsbUNBQVUsR0FBVixVQUFZLEVBQVU7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQWpDUSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7O09BQ0EsY0FBYyxDQW1DMUI7SUFBRCxxQkFBQztDQUFBLEFBbkNELElBbUNDO0FBbkNZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb250YWN0fSBmcm9tIFwifi9tb2RlbHMvQ29udGFjdFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29udGFjdFNlcnZpY2Uge1xuXG4gIGNvbnRhY3RUYWI6QXJyYXk8Q29udGFjdD5cblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIGxldCBjb250YWN0MSA9IG5ldyBDb250YWN0KCk7XG4gICAgY29udGFjdDEubm9tID0gJ01vbnNpZXVyMSc7XG4gICAgY29udGFjdDEucHJlbm9tID0gJ1BhdHJpY2snO1xuICAgIGNvbnRhY3QxLm51bWVybyA9ICcwNjA2MDYwNjA2JztcbiAgICBjb250YWN0MS5tYWlsID0gJ1BhdHJpY2subW9uc2lldXIxQGdtYWlsLmNvbSc7XG5cbiAgICBsZXQgY29udGFjdDIgPSBuZXcgQ29udGFjdCgpO1xuICAgIGNvbnRhY3QyLm5vbSA9ICdNb25zaWV1cjInO1xuICAgIGNvbnRhY3QyLnByZW5vbSA9ICdKZWFuJztcbiAgICBjb250YWN0Mi5udW1lcm8gPSAnMDYxMjM0NTY3OCc7XG4gICAgY29udGFjdDIubWFpbCA9ICdKZWFuLm1vbnNpZXVyMkBnbWFpbC5jb20nO1xuXG4gICAgbGV0IGpiID0gbmV3IENvbnRhY3QoKTtcbiAgICBqYi5ub20gPSAnTGF1cmVuZG9uJztcbiAgICBqYi5wcmVub20gPSAnSmVhbic7XG4gICAgamIubnVtZXJvID0gJzA2MTQ1NzU0NTc0JztcbiAgICBqYi5tYWlsID0gJ0plYW4ubGF1cmVuZG9uQGdtYWlsLmNvbSc7XG5cbiAgICB0aGlzLmNvbnRhY3RUYWIgPSBbXTtcbiAgICB0aGlzLmNvbnRhY3RUYWIucHVzaChjb250YWN0MSxjb250YWN0MixqYik7XG5cblxuXG4gIH1cblxuICAgIGdldENvbnRhY3QgKGlkOiBudW1iZXIpOiBDb250YWN0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFjdFRhYltpZF07XG4gICAgfVxuXG59XG4iXX0=