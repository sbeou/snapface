import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapService {
    faceSnaps: FaceSnap[] = [
        {
          id: 1,
          title: 'Archibald',
          description: 'Mon meilleur ami depuis tout petit !',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          createdDate: new Date(),
          snaps: 48,
          location: 'Paris'
        },
        {
          id: 2,
          title: 'Alps Montains',
          description: 'Super photo de montagne',
          imageUrl: 'https://cdn.pixabay.com/photo/2022/09/02/07/31/alps-7426887_960_720.jpg',
          createdDate: new Date(),
          snaps: 156,
          location: 'Les Alpes'
        },
        {
          id: 3,
          title: 'Bee honey',
          description: 'Jolie petite abeille',
          imageUrl: 'https://cdn.pixabay.com/photo/2022/09/25/15/16/bee-7478585_960_720.jpg',
          createdDate: new Date(),
          snaps: 0
        },
        {
          id: 4,
          title: 'Archibald',
          description: 'Mon meilleur ami depuis tout petit !',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          createdDate: new Date(),
          snaps: 250,
          location: 'Paris'
        },
        {
          id: 5,
          title: 'Alps Montains',
          description: 'Super photo de montagne',
          imageUrl: 'https://cdn.pixabay.com/photo/2022/09/02/07/31/alps-7426887_960_720.jpg',
          createdDate: new Date(),
          snaps: 0,
          location: 'Les Alpes'
        },
        {
          id: 6,
          title: 'Bee honey',
          description: 'Jolie petite abeille',
          imageUrl: 'https://cdn.pixabay.com/photo/2022/09/25/15/16/bee-7478585_960_720.jpg',
          createdDate: new Date(),
          snaps: 0
        }
      ];
      getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
      }

      getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if(!faceSnap) {
          throw new Error('FaceSnap not found!');
        } else {
          return faceSnap;
        }
      }

      snapFaceSnapById(faceSnapId: number, snapType: string): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
      }
}