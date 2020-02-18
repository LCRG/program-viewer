import { Component, h } from "@stencil/core";

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
            <lcrg-course-card courseCode="DGM 2120"></lcrg-course-card>
          </ion-col>
          <ion-col size="1.5"></ion-col>
          <ion-col size="1.5">
            <lcrg-course-card courseCode="DGM 2740"></lcrg-course-card>
          </ion-col>
          <ion-col size="1.5">
            <lcrg-course-card courseCode="DGM 2780"></lcrg-course-card>
          </ion-col>
          <ion-col size="1.5">
            <lcrg-course-card courseCode="DGM 3750"></lcrg-course-card>
          </ion-col>
          <ion-col size="1.5">
            <lcrg-course-card courseCode="DGM 3740"></lcrg-course-card>
          </ion-col>
          <ion-col></ion-col>
          <ion-col></ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="1.5"></ion-col>
          <ion-col size="1.5">
            <lcrg-course-card courseCode="DGM 2250"></lcrg-course-card>
          </ion-col>
          <ion-col size="1.5"></ion-col>
          <ion-col size="1.5">
            <lcrg-course-card courseCode="DGM 221R"></lcrg-course-card>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="1.5">
            <lcrg-course-card courseCode="DGM 1220"></lcrg-course-card>
          </ion-col>
          <ion-col size="1.5">
            <lcrg-course-card courseCode="DGM 1230"></lcrg-course-card>
          </ion-col>
          <ion-col size="1.5">
            <lcrg-course-card courseCode="DGM 2240"></lcrg-course-card>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="1.5"></ion-col>
          <ion-col size="1.5">
            <lcrg-course-card courseCode="DGM 1240"></lcrg-course-card>
          </ion-col>
          <ion-col size="1.5">
            <lcrg-course-card courseCode="DGM 2341"></lcrg-course-card>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="1.5">
            <lcrg-course-card courseCode="DGM 1600"></lcrg-course-card>
          </ion-col>
          <ion-col size="1.5"></ion-col>
          <ion-col size="1.5">
            <lcrg-course-card courseCode="DGM 2760"></lcrg-course-card>
          </ion-col>
          <ion-col size="1.5"></ion-col>
          <ion-col size="1.5">
            <lcrg-course-card courseCode="DGM 3760"></lcrg-course-card>
          </ion-col>
          <ion-col size="1.5">
            <lcrg-course-card courseCode="DGM 3780"></lcrg-course-card>
          </ion-col>
          <ion-col size="1.5">
            <lcrg-course-card courseCode="DGM 3790"></lcrg-course-card>
          </ion-col>
          <ion-col size="1.5">
            <lcrg-course-card courseCode="DGM 4790"></lcrg-course-card>
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
            <lcrg-course-card courseCode="DGM 4310"></lcrg-course-card>
          </ion-col>
          <ion-col size="1.5">
            <lcrg-course-card courseCode="DGM 4410"></lcrg-course-card>
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
