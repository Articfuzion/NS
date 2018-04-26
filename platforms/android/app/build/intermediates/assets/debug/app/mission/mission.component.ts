import {Component, Input, OnInit} from '@angular/core';
import {Annonce} from "~/models/Annonce";
import {ActivatedRoute} from "@angular/router";
import {AnnonceService} from "~/service/annonce.service";
import {RouterExtensions} from "nativescript-angular";

@Component({
  moduleId: module.id,
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit {

  fullAnnonce:Annonce;


  constructor(public route:ActivatedRoute, public as:AnnonceService, private routerExtensions: RouterExtensions){}

    public goBack() {
        this.routerExtensions.backToPreviousPage();
    }

  ngOnInit() {

      const id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.fullAnnonce = this.as.getAnnonceById(id)
  }

}
