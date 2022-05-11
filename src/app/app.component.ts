import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today'
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mtlover',
      content: 'I saw this mountain today'
    },
    {
      title: 'Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'biker24',
      content: 'I am a hardcore biker'
    }
  ]
}
