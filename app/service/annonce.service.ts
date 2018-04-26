import { Injectable } from '@angular/core';
import {Annonce} from "~/models/Annonce";
import {ContactService} from "~/service/contact.service";
import {ContactUtils} from "~/utils/ContactUtils";
import {SalaireService} from "~/service/salaire.service";
import {SalaireUtils} from "~/utils/SalaireUtils";


@Injectable()
export class AnnonceService {

    annonceTab:Array<Annonce>;

  constructor(public cs:ContactService, public ss:SalaireService) {

      let cu = new ContactUtils();
      let su = new SalaireUtils();

      let annonceDev = new Annonce();
      annonceDev.titre = 'CDD Dev web';
      annonceDev.poste = 'Developpeur Web';
      annonceDev.description = 'Création d\'un site wordpress pour un client';
      annonceDev.contact = this.cs.getContact(cu.ID_CONTACT1);
      annonceDev.date = new Date();
      annonceDev.salaire = this.ss.getSalaire(su.ID_SALAIRE1);
      annonceDev.lieu = 'Clermont-Ferrand';
      annonceDev.id = 1;


      let annonceAdminReseau = new Annonce();
      annonceAdminReseau.titre = 'CDI Admin Réseau';
      annonceAdminReseau.poste = 'Administrateur Réseau';
      annonceAdminReseau.description = 'Gestion d\'un parc informatique';
      annonceAdminReseau.contact = this.cs.getContact(cu.ID_CONTACT2);
      annonceAdminReseau.date = new Date();
      annonceAdminReseau.salaire = this.ss.getSalaire(su.ID_SALAIRE2);
      annonceAdminReseau.lieu = 'Clermont-Ferrand';
      annonceAdminReseau.id = 2;

      let annonceFigurant = new Annonce();
      annonceFigurant.titre = 'Figuration film JB';
      annonceFigurant.poste = 'Figuration lors de plusieurs scènes pour la série JB';
      annonceFigurant.description = 'Participer a plusieurs scènes lors d\'un tournage';
      annonceFigurant.contact = this.cs.getContact(cu.ID_JB);
      annonceFigurant.date = new Date();
      annonceFigurant.salaire = this.ss.getSalaire(su.ID_SALAIREFIG);
      annonceFigurant.lieu = 'Chez JB';
      annonceFigurant.id = 3;

      this.annonceTab = [];
      this.annonceTab.push(annonceDev,annonceAdminReseau,annonceFigurant);



  }


  getAnnonceById(id:number):Annonce{

      return this.annonceTab.filter(annonce => annonce.id === id)[0];
  }


    getAllServices():Array<Annonce>{
      return this.annonceTab;
    }

}
