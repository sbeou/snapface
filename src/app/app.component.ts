import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  faceSnaps!: FaceSnap[];
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;
  ngOnInit() {
    this.faceSnaps = [
      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit !',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps: 0,
        location: 'Paris'
      },
      {
        title: 'Alps Montains',
        description: 'Super photo de montagne',
        imageUrl: 'https://cdn.pixabay.com/photo/2022/09/02/07/31/alps-7426887_960_720.jpg',
        createdDate: new Date(),
        snaps: 0,
        location: 'Les Alpes'
      },
      {
        title: 'Bee honey',
        description: 'Jolie petite abeille',
        imageUrl: 'https://cdn.pixabay.com/photo/2022/09/25/15/16/bee-7478585_960_720.jpg',
        createdDate: new Date(),
        snaps: 150
      },
      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit !',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps: 0,
        location: 'Paris'
      },
      {
        title: 'Alps Montains',
        description: 'Super photo de montagne',
        imageUrl: 'https://cdn.pixabay.com/photo/2022/09/02/07/31/alps-7426887_960_720.jpg',
        createdDate: new Date(),
        snaps: 0,
        location: 'Les Alpes'
      },
      {
        title: 'Bee honey',
        description: 'Jolie petite abeille',
        imageUrl: 'https://cdn.pixabay.com/photo/2022/09/25/15/16/bee-7478585_960_720.jpg',
        createdDate: new Date(),
        snaps: 0
      }
    ]
    }
  }
