import { Component, OnInit } from '@angular/core';
//import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'ico-ck-editor',
  templateUrl: './ck-editor.component.html',
  styleUrls: ['./ck-editor.component.scss']
})
export class CkEditorComponent implements OnInit {

  text: string;
  locale = 'en_us';
  config = {};
  basic = [
    {name: 'document', items: ['Source', '-', 'NewPage', 'Preview', '-', 'Templates']},
    {name: 'clipboard', items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo']},
    {name: 'basicstyles', items: ['Bold', 'Italic']}
  ];

  public default = `<h2>WYSIWYG Editor</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper sapien non nisl facilisis bibendum in quis tellus. Duis in urna bibendum turpis pretium fringilla. Aenean neque velit, porta eget mattis ac, imperdiet quis nisi. Donec non dui et tortor vulputate luctus. Praesent consequat rhoncus velit, ut molestie arcu venenatis sodales.</p>
                      <h3>Lacinia</h3>
                      <ul>
                          <li>Suspendisse tincidunt urna ut velit ullamcorper fermentum.</li>
                          <li>Nullam mattis sodales lacus, in gravida sem auctor at.</li>
                          <li>Praesent non lacinia mi.</li>
                          <li>Mauris a ante neque.</li>
                          <li>Aenean ut magna lobortis nunc feugiat sagittis.</li>
                      </ul>
                      <h3>Pellentesque adipiscing</h3>
                      <p>Maecenas quis ante ante. Nunc adipiscing rhoncus rutrum. Pellentesque adipiscing urna mi, ut tempus lacus ultrices ac. Pellentesque sodales, libero et mollis interdum, dui odio vestibulum dolor, eu pellentesque nisl nibh quis nunc. Sed porttitor leo adipiscing venenatis vehicula. Aenean quis viverra enim. Praesent porttitor ut ipsum id ornare.</p>`;

  constructor() { }

  ngOnInit(): void {
  }

}
