import { Component, h } from '@stencil/core'


@Component({
  tag: 'lcrg-program-viewer',
  styleUrl: 'program-viewer.css'
})
export class ProgramViewer {

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Bachelor of Science | Digital Media | Web & App Development</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <lcrg-program-grid></lcrg-program-grid>
      </ion-content>
    ]
  }

}
