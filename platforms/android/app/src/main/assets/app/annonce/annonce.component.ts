import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Annonce} from "../models/Annonce";
import {ActivatedRoute} from "@angular/router";
import {RadSideDrawerComponent} from "nativescript-ui-sidedrawer/angular";

@Component({
  moduleId: module.id,
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.scss']
})
export class AnnonceComponent implements OnInit {

  @Input() annonceAjout:Annonce;

  constructor() { }

  ngOnInit() {


  }

}
