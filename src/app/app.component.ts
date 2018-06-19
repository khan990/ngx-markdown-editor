import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  content = '';
  mode = 'editor';
  options = {
    'hideIcons': [
      'Bold',
      'Italic',
      'Heading',
      'Refrence',
      'Link',
      'Image',
      'Ul',
      'Ol',
      'Code',
      'TogglePreview',
      'FullScreen'
    ]  // default is empty, the value is case-sensitive
  };

  preRenderFunc(content: string) {
    return content.replace(/something/g, 'new value'); // must return a string
  }
}
