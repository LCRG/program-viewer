import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'lcrg-course-card',
  styleUrl: 'course-card.css',
  shadow: true
})
export class CourseCard {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
