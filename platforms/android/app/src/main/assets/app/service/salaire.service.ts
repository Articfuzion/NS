import { Injectable } from '@angular/core';
import {Salaire} from "~/models/Salaire";


@Injectable()
export class SalaireService {

  salaireTab:Array<Salaire>;

  constructor() {

    let salaireDev = new Salaire();
    salaireDev.salaireMinBrut = 30000;
    salaireDev.salaireMaxBrut = 40000;
    salaireDev.salaireMinNet = 20000;
    salaireDev.salaireMaxNet = 30000;

    let salaireAdminReseau = new Salaire();
    salaireAdminReseau.salaireMinBrut = 20000;
    salaireAdminReseau.salaireMaxBrut = 30000;
    salaireAdminReseau.salaireMinNet = 10000;
    salaireAdminReseau.salaireMaxNet = 20000;

      let salaireFigurant = new Salaire();
      salaireFigurant.salaireMinBrut = 500;
      salaireFigurant.salaireMaxBrut = 1000;
      salaireFigurant.salaireMinNet = 250;
      salaireFigurant.salaireMaxNet = 500;

    this.salaireTab = [];
    this.salaireTab.push(salaireDev,salaireAdminReseau,salaireFigurant);

  }


    getSalaire (id: number): Salaire {
        return this.salaireTab[id];
    }
}
