import {Component, OnInit, ViewChild} from '@angular/core';
import {Annonce} from "~/models/Annonce";
import {AnnonceService} from "~/service/annonce.service";
import {RadSideDrawerComponent} from "nativescript-ui-sidedrawer/angular";

@Component({
  moduleId: module.id,
  selector: 'app-view-annonce',
  templateUrl: './view-annonce.component.html',
  styleUrls: ['./view-annonce.component.scss']
})
export class ViewAnnonceComponent implements OnInit {

  annoncesTab:Array<Annonce>
    @ViewChild('drawer') public drawer: RadSideDrawerComponent;

  constructor(public as:AnnonceService) { }

  ngOnInit() {
    this.annoncesTab=this.as.getAllServices();

  }

    onCloseDrawerTap() {
        this.drawer.sideDrawer.closeDrawer();
    }

}
