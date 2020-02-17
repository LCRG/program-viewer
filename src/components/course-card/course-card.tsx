import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'lcrg-course-card',
  styleUrl: 'course-card.css'
})
export class CourseCard {

  @Prop() title: string;
  @Prop() subtitle: string;
  @Prop() competencies: string;

  render() {
    return (
      <ion-card color="tertiary" button>
        <ion-card-header>
          <ion-card-title>{this.title}</ion-card-title>
          <ion-card-subtitle>{this.subtitle}</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          {this.competencies}
        </ion-card-content>
      </ion-card>
    )
  }

}
