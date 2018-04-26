"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Annonce = /** @class */ (function () {
    function Annonce() {
    }
    Object.defineProperty(Annonce.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Annonce.prototype, "titre", {
        get: function () {
            return this._titre;
        },
        set: function (value) {
            this._titre = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Annonce.prototype, "poste", {
        get: function () {
            return this._poste;
        },
        set: function (value) {
            this._poste = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Annonce.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Annonce.prototype, "contact", {
        get: function () {
            return this._contact;
        },
        set: function (value) {
            this._contact = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Annonce.prototype, "date", {
        get: function () {
            return this._date;
        },
        set: function (value) {
            this._date = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Annonce.prototype, "salaire", {
        get: function () {
            return this._salaire;
        },
        set: function (value) {
            this._salaire = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Annonce.prototype, "lieu", {
        get: function () {
            return this._lieu;
        },
        set: function (value) {
            this._lieu = value;
        },
        enumerable: true,
        configurable: true
    });
    return Annonce;
}());
exports.Annonce = Annonce;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ub25jZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFubm9uY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQTtJQUFBO0lBMkVBLENBQUM7SUEvREcsc0JBQUksdUJBQUU7YUFBTjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3BCLENBQUM7YUFFRCxVQUFPLEtBQWE7WUFDaEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFDckIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSwwQkFBSzthQUFUO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUVELFVBQVUsS0FBYTtZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLDBCQUFLO2FBQVQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBRUQsVUFBVSxLQUFhO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksZ0NBQVc7YUFBZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7YUFFRCxVQUFnQixLQUFhO1lBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksNEJBQU87YUFBWDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7YUFFRCxVQUFZLEtBQWM7WUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSx5QkFBSTthQUFSO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQUVELFVBQVMsS0FBVztZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLDRCQUFPO2FBQVg7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDO2FBRUQsVUFBWSxLQUFjO1lBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUM7OztPQUpBO0lBTUQsc0JBQUkseUJBQUk7YUFBUjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7YUFFRCxVQUFTLEtBQWE7WUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQzs7O09BSkE7SUFLTCxjQUFDO0FBQUQsQ0FBQyxBQTNFRCxJQTJFQztBQTNFWSwwQkFBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udGFjdH0gZnJvbSBcIn4vbW9kZWxzL0NvbnRhY3RcIjtcclxuaW1wb3J0IHtTYWxhaXJlfSBmcm9tIFwifi9tb2RlbHMvU2FsYWlyZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFubm9uY2V7XHJcblxyXG4gICAgcHJpdmF0ZSBfdGl0cmU6c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfcG9zdGU6c3RyaW5nOyAvL3Bvc3RlIGEgcG91cnZvaXJcclxuICAgIHByaXZhdGUgX2Rlc2NyaXB0aW9uOnN0cmluZztcclxuICAgIHByaXZhdGUgX2NvbnRhY3Q6Q29udGFjdDtcclxuICAgIHByaXZhdGUgX2RhdGU6RGF0ZTtcclxuICAgIHByaXZhdGUgX3NhbGFpcmU6U2FsYWlyZTtcclxuICAgIHByaXZhdGUgX2xpZXU6c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfaWQ6bnVtYmVyO1xyXG5cclxuXHJcbiAgICBnZXQgaWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGlkKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9pZCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0aXRyZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90aXRyZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdGl0cmUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3RpdHJlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBvc3RlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bvc3RlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBwb3N0ZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fcG9zdGUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZGVzY3JpcHRpb24oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjb250YWN0KCk6IENvbnRhY3Qge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb250YWN0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBjb250YWN0KHZhbHVlOiBDb250YWN0KSB7XHJcbiAgICAgICAgdGhpcy5fY29udGFjdCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBkYXRlKCk6IERhdGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBkYXRlKHZhbHVlOiBEYXRlKSB7XHJcbiAgICAgICAgdGhpcy5fZGF0ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzYWxhaXJlKCk6IFNhbGFpcmUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zYWxhaXJlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzYWxhaXJlKHZhbHVlOiBTYWxhaXJlKSB7XHJcbiAgICAgICAgdGhpcy5fc2FsYWlyZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBsaWV1KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpZXU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGxpZXUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2xpZXUgPSB2YWx1ZTtcclxuICAgIH1cclxufSJdfQ==