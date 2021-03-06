import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">

        <ion-button href="/profile/ionic">Profile page</ion-button>
        <ion-button href="/viewer">Program Viewer</ion-button>
      </ion-content>
    ]
  }
}
