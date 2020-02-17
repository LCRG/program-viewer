import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "lcrg-program-grid",
  styleUrl: "program-grid.css"
})
export class ProgramGrid {
  render() {
    return (
      <ion-grid>
        <ion-row>
          <ion-col size="6" class="aas">
            <h4>AAS Degree | Pre-acceptance into Bachelor's</h4>
          </ion-col>
          <ion-col size="6" class="bachelors">
            <h4>Bachelor's Semesters 5-8</h4>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="1.5">
            <p>Semester 1</p>
          </ion-col>
          <ion-col size="1.5">
            <p>Semester 2</p>
          </ion-col>
          <ion-col size="1.5">
            <p>Semester 3</p>
          </ion-col>
          <ion-col size="1.5">
            <p>Semester 4</p>
          </ion-col>

          <ion-col size="1.5">
            <p>Semester 5</p>
          </ion-col>
          <ion-col size="1.5">
            <p>Semester 6</p>
          </ion-col>
          <ion-col size="1.5">
            <p>Semester 7</p>
          </ion-col>
          <ion-col>
            <p>Semester 8</p>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="1.5">
            <lcrg-course-card
              title="DGM 2120"
              subtitle="Web Essentials"
            ></lcrg-course-card>
          </ion-col>
          <ion-col size="1.5"></ion-col>
          <ion-col size="1.5">
            <lcrg-course-card
              title="DGM 2740"
              subtitle="Principles of Web Languages"
            ></lcrg-course-card>
          </ion-col>
          <ion-col size="1.5">
            <lcrg-course-card
              title="DGM 2780"
              subtitle="Web Tools and Frameworks I"
            ></lcrg-course-card>
          </ion-col>
          <ion-col size="1.5">
            <lcrg-course-card
              title="DGM 3750"
              subtitle="Media Traffic and Analytics"
            ></lcrg-course-card>
          </ion-col>
          <ion-col size="1.5">
            <lcrg-course-card
              title="DGM 3740"
              subtitle="Web Content Management"
            ></lcrg-course-card>
          </ion-col>
          <ion-col></ion-col>
          <ion-col></ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="1.5"></ion-col>
          <ion-col size="1.5">
            <lcrg-course-card
              title="DGM 2250"
              subtitle="Digital Design Essentials"
            ></lcrg-course-card>
          </ion-col>
          <ion-col size="1.5"></ion-col>
          <ion-col size="1.5">
            <lcrg-course-card
              title="DGM 221R"
              subtitle="Digital Design Practicum"
            ></lcrg-course-card>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="1.5">
            <lcrg-course-card
              title="DGM 1220"
              subtitle="Digital Design Essentials"
            ></lcrg-course-card>
          </ion-col>
          <ion-col size="1.5">
            <lcrg-course-card
              title="DGM 1230"
              subtitle="Interaction Design Essentials"
            ></lcrg-course-card>
          </ion-col>
          <ion-col size="1.5">
            <lcrg-course-card
              title="DGM 2240"
              subtitle="Interaction Design"
            ></lcrg-course-card>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="1.5"></ion-col>
          <ion-col size="1.5">
            <lcrg-course-card
              title="DGM 1240"
              subtitle="Communicating Digital Design"
            ></lcrg-course-card>
          </ion-col>
          <ion-col size="1.5">
            <lcrg-course-card
              title="DGM 2341"
              subtitle="Digital Output for Mobile Media"
            ></lcrg-course-card>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="1.5">
            <lcrg-course-card
              title="DGM 2120"
              subtitle="Scripting for Internet Technologies"
            ></lcrg-course-card>
          </ion-col>
          <ion-col size="1.5"></ion-col>
          <ion-col size="1.5">
            <lcrg-course-card
              title="DGM 2760"
              subtitle="Web Languages I"
            ></lcrg-course-card>
          </ion-col>
          <ion-col size="1.5"></ion-col>
          <ion-col size="1.5">
            <lcrg-course-card
              title="DGM 3760"
              subtitle="Web Languages II"
            ></lcrg-course-card>
          </ion-col>
          <ion-col size="1.5">
            <lcrg-course-card
              title="DGM 3780"
              subtitle="Web Tools and Frameworks II"
            ></lcrg-course-card>
          </ion-col>
          <ion-col size="1.5">
            <lcrg-course-card
              title="DGM 3790"
              subtitle="Rich Internet Application Development I"
            ></lcrg-course-card>
          </ion-col>
          <ion-col size="1.5">
            <lcrg-course-card
              title="DGM 4790"
              subtitle="Rich Internet Application Development II"
            ></lcrg-course-card>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="1.5"></ion-col>
          <ion-col size="1.5"></ion-col>
          <ion-col size="1.5"></ion-col>
          <ion-col size="1.5"></ion-col>
          <ion-col size="1.5"></ion-col>
          <ion-col size="1.5"></ion-col>
          <ion-col size="1.5">
            <lcrg-course-card
              title="DGM 4310"
              subtitle="Senior Capstone I"
            ></lcrg-course-card>
          </ion-col>
          <ion-col size="1.5">
            <lcrg-course-card
              title="DGM 4410"
              subtitle="Senior Capstone II"
            ></lcrg-course-card>
          </ion-col>
        </ion-row>

        <ion-row class="ion-align-items-start">
          <ion-col>[start] ion-col</ion-col>
          <ion-col>[start] ion-col</ion-col>
          <ion-col class="ion-align-self-end">[start] ion-col [end]</ion-col>
          <ion-col>
            ion-col
            <br />#
            <br />#
          </ion-col>
        </ion-row>

        <ion-row class="ion-align-items-center">
          <ion-col>[center] ion-col</ion-col>
          <ion-col>[center] ion-col</ion-col>
          <ion-col>[center] ion-col</ion-col>
          <ion-col>
            ion-col
            <br />#
            <br />#
          </ion-col>
        </ion-row>

        <ion-row class="ion-align-items-end">
          <ion-col>[end] ion-col</ion-col>
          <ion-col class="ion-align-self-start">[end] ion-col [start]</ion-col>
          <ion-col>[end] ion-col</ion-col>
          <ion-col>
            ion-col
            <br />#
            <br />#
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="12" size-sm>
            ion-col [size="12"] [size-sm]
          </ion-col>
          <ion-col size="12" size-sm>
            ion-col [size="12"] [size-sm]
          </ion-col>
          <ion-col size="12" size-sm>
            ion-col [size="12"] [size-sm]
          </ion-col>
          <ion-col size="12" size-sm>
            ion-col [size="12"] [size-sm]
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="12" size-md>
            ion-col [size="12"] [size-md]
          </ion-col>
          <ion-col size="12" size-md>
            ion-col [size="12"] [size-md]
          </ion-col>
          <ion-col size="12" size-md>
            ion-col [size="12"] [size-md]
          </ion-col>
          <ion-col size="12" size-md>
            ion-col [size="12"] [size-md]
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="6" size-lg offset="3">
            ion-col [size="6"] [size-lg] [offset="3"]
          </ion-col>
          <ion-col size="1.5" size-lg>
            ion-col [size="1.5"] [size-lg]
          </ion-col>
        </ion-row>
      </ion-grid>
    );
  }
}