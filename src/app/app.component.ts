import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts= [
    { title:"Mon premier post",content: "Contenu du premier post", loveIts: 0 ,created_at: new Date()},
    { title:"Mon deuxieme post",content: "Contenu du deuxieme post", loveIts: 0 ,created_at: new Date()},
    { title:"Encore un post",content: "Contenu du post", loveIts: 0 ,created_at: new Date()}
  ];
}
