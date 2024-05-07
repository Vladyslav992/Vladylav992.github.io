import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrl: './image-preview.component.scss',
  standalone: true
})
export class ImagePreviewComponent {
  private _imgUrl: string | undefined;

  get imgUrl(): string | undefined {
    return this._imgUrl;
  }

  @Input()
  set imgUrl(value: string | undefined) {
    this._imgUrl = value || 'https://cyclingmagazine.ca/wp-content/uploads/2018/03/etap.shadowpsd_2048x.png';
  }
}
