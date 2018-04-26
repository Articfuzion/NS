import {Contact} from "~/models/Contact";
import {Salaire} from "~/models/Salaire";

export class Annonce{

    private _titre:string;
    private _poste:string; //poste a pourvoir
    private _description:string;
    private _contact:Contact;
    private _date:Date;
    private _salaire:Salaire;
    private _lieu:string;
    private _id:number;


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get titre(): string {
        return this._titre;
    }

    set titre(value: string) {
        this._titre = value;
    }

    get poste(): string {
        return this._poste;
    }

    set poste(value: string) {
        this._poste = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get contact(): Contact {
        return this._contact;
    }

    set contact(value: Contact) {
        this._contact = value;
    }

    get date(): Date {
        return this._date;
    }

    set date(value: Date) {
        this._date = value;
    }

    get salaire(): Salaire {
        return this._salaire;
    }

    set salaire(value: Salaire) {
        this._salaire = value;
    }

    get lieu(): string {
        return this._lieu;
    }

    set lieu(value: string) {
        this._lieu = value;
    }
}