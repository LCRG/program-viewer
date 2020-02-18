import { Component, h } from "@stencil/core";
import ApolloClient from "apollo-boost";
import "stencil-apollo";

/* const client = new ApolloClient({
  uri: "http://localhost:4000/"
}); */

const client = new ApolloClient({
  uri: "https://graphql-voter-app.herokuapp.com/"
}); 

@Component({
  tag: "app-root",
  styleUrl: "app-root.css"
})
export class AppRoot {
  render() {
    return (
      <apollo-provider client={client}>
        <ion-app>
          <ion-router useHash={false}>
            <ion-route url="/" component="app-home" />
            <ion-route url="/profile/:name" component="app-profile" />
            <ion-route url="/viewer" component="lcrg-program-viewer" />
          </ion-router>
          <ion-nav />
        </ion-app>
      </apollo-provider>
    );
  }
}
