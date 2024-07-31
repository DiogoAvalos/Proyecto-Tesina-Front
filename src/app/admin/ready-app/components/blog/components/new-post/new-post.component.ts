import { Component } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'ico-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
})
export class NewPostComponent {
  public Editor: any = ClassicEditor;

  public default: string =
    '<h3 class="mb-0">hi,</h3><h4 class="m-t-0">we are Summernote</h4><p></p>';
}
