import { Component, Prop, h, State } from "@stencil/core";
import gql from "graphql-tag";

/* const COURSE_CODE_QUERY = gql`
  query byCourseCode {
    courseByCourseCode(courseCode: "DGM 1600") {
      name
      courseCode
      description
      additionalProperties
    }
  }
`;

const ALL_POSTS = gql`
  query allPosts {
    posts {
      title
      author {
        firstName
        lastName
      }
    }
  }
`; */

const COMPETENCIES = gql`
  query allCompetencies {
    Competencies {
      name
    }
  }
`;

@Component({
  tag: "lcrg-course-card",
  styleUrl: "course-card.css"
})
export class CourseCard {
  @Prop() courseCode: string;

  @State() code: string;
  @State() name: string;
  @State() addProps: string;

  render() {
    return <p>Hi There</p>;
  }
}

/* <ion-card color="tertiary" button>
                  <ion-card-header>
                    <ion-card-title>{post.title}</ion-card-title>
                    <ion-card-subtitle>{post.author.firstName}</ion-card-subtitle>
                  </ion-card-header>
                  <ion-card-content>{post.author.lastName}</ion-card-content>
                </ion-card> */
