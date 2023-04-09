import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Picture } from './picture';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  private picturesUrl = 'assets/pictures.json';

  constructor(private http: HttpClient) { }

  // getPictures(): {
  //   this.http.get(this.picturesUrl);
  // }

  getPictures(): Observable<Picture[]>{
    return this.http.get(this.picturesUrl).pipe(map((data:any)=>{
      let pictureList = data["pictures"];
      return pictureList.map((item:any)=>{
        return new Picture(item.name, item.author, item.description, item.image, item.time_of_creation, item.dimensions, item.location)
      });
    }));
  }
}
