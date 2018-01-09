import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer'

const options: DocumentViewerOptions = {
  title: 'Game and Season Manual'
}

@Component({
  selector: 'page-manual',
  templateUrl: 'manual.html'
})
export class ManualPage {

  constructor(public navCtrl: NavController, private document: DocumentViewer) {

  }
}

this.document.viewDocument('assets/manual.pdf', 'application/pdf', options)