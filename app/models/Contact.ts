export class Contact{
    private _nom:string;
    private _prenom:string;
    private _numero:string;
    private _mail:string;


    get nom(): string {
        return this._nom;
    }

    set nom(value: string) {
        this._nom = value;
    }

    get prenom(): string {
        return this._prenom;
    }

    set prenom(value: string) {
        this._prenom = value;
    }

    get numero(): string {
        return this._numero;
    }

    set numero(value: string) {
        this._numero = value;
    }

    get mail(): string {
        return this._mail;
    }

    set mail(value: string) {
        this._mail = value;
    }
}