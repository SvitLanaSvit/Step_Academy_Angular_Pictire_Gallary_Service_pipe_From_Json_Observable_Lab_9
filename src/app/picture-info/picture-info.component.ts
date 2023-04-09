import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Picture } from '../picture';
import { PictureService } from '../picture.service';

@Component({
  selector: 'app-picture-info',
  templateUrl: './picture-info.component.html',
  styleUrls: ['./picture-info.component.css']
})
export class PictureInfoComponent implements OnInit {
  pictures?: Picture[];
  constructor(private http: PictureService) { }

  // ngOnInit(): void {
  //   this.http.getPictures().subscribe((data:any)=>{
  //     this.pictures = data["pictures"];
  //   })
  // }

  ngOnInit(): void {
    this.http.getPictures().subscribe({
      next: (data:any)=>
      this.pictures = data,
      error: error=>console.log(error.message)
    });
  }
}
