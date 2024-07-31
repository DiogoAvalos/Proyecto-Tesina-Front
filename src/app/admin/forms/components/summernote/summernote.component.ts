import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'ico-summernote',
  templateUrl: './summernote.component.html',
  styleUrls: ['./summernote.component.scss']
})
export class SummernoteComponent implements OnInit {

  public Editor:any = ClassicEditor;

  public default:string = `Hello there,
  <br/>
  <p>The toolbar can be customized and it also supports various callbacks such as <code>oninit</code>, <code>onfocus</code>, <code>onpaste</code> and many more.</p>
  <p>Please try <b>paste some texts</b> here</p>`;
  constructor() { }

  ngOnInit(): void {
  }

}
