import { Injectable } from '@angular/core';
import {Contact} from "~/models/Contact";

@Injectable()
export class ContactService {

  contactTab:Array<Contact>

  constructor() {

    let contact1 = new Contact();
    contact1.nom = 'Monsieur1';
    contact1.prenom = 'Patrick';
    contact1.numero = '0606060606';
    contact1.mail = 'Patrick.monsieur1@gmail.com';

    let contact2 = new Contact();
    contact2.nom = 'Monsieur2';
    contact2.prenom = 'Jean';
    contact2.numero = '0612345678';
    contact2.mail = 'Jean.monsieur2@gmail.com';

    let jb = new Contact();
    jb.nom = 'Laurendon';
    jb.prenom = 'Jean';
    jb.numero = '06145754574';
    jb.mail = 'Jean.laurendon@gmail.com';

    this.contactTab = [];
    this.contactTab.push(contact1,contact2,jb);



  }

    getContact (id: number): Contact {
        return this.contactTab[id];
    }

}
