import { Component, OnInit } from '@angular/core';
import { IAlbum, Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'ico-image-gallery-two',
  templateUrl: './image-gallery-two.component.html',
  styleUrls: ['./image-gallery-two.component.scss']
})
export class ImageGalleryTwoComponent implements OnInit {

  public _albums: Array<IAlbum> = new Array<IAlbum>();

  constructor(private lightbox: Lightbox) {
    for (let i = 1; i <= 15; i++) {
        const src = 'assets/images/image-gallery/' + i + '.jpg';
        const thumb = 'assets/images/image-gallery/' + i + '.jpg';
        const album = {
            src: src,
            thumb: thumb,
            centerVertically: true
        };
        this._albums.push(album);
    }
  }

  ngOnInit(): void {
  }
  open(album: Array<IAlbum>, index: number): void {
      // open lightbox
      this.lightbox.open(album, index);
  }

  close(): void {
      // close lightbox programmatically
      this.lightbox.close();
  }
}
