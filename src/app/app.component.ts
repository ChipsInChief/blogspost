import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mon super Blog !';
  postsFromDatabase = [
    { 
      title: 'Mon premier article',
      content: 'Deserunt magna consequat officia deserunt ipsum exercitation exercitation veniam velit proident esse. Nisi laboris tempor dolore nisi enim deserunt irure ad eu ex ut laborum labore. Voluptate sunt sit sit velit do eu aliqua ex laborum fugiat duis sit consequat nulla. Et velit velit tempor amet consectetur.',
      loveIts: 10,
      created_at: new Date()
    },
    { 
      title: 'Mon deuxième article',
      content: 'Nulla ullamco duis aute ad sunt occaecat dolor esse ullamco non consequat sit. Quis amet enim consequat eu nostrud. Laborum pariatur commodo non aute ex incididunt aute sit. Dolor labore in exercitation deserunt eu do duis duis. Reprehenderit non amet mollit quis aliquip cillum enim proident in velit nostrud occaecat. Veniam duis voluptate commodo cupidatat. Pariatur qui in ea nulla laborum ea magna ex ea mollit occaecat.',
      loveIts: -2,
      created_at: new Date()
    },
    { 
      title: 'Mon troisième article',
      content: 'Do aliqua non excepteur pariatur duis quis ullamco dolor excepteur est irure nulla. Ut Lorem proident sit laboris exercitation aute aute voluptate eiusmod nulla labore ullamco irure laboris. Ut aute laborum ut laboris deserunt. Cupidatat sit cupidatat velit dolore occaecat.',
      loveIts: 0,
      created_at: new Date()
    }
  ];
}
