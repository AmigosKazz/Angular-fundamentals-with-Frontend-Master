import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <h1>If you are reading this...</h1>
    <p>Things have worked out well! 🎉</p>
    <ol>
        <li>ETA-NEwJeans</li>
        <li>REading Player One -</li>
        <li>Dodgeball</li>
    </ol>
  `,
  styles: [`
    ol {
    list-style-type: upper-roman;
    }
  `],
  standalone: true
})
export class AppComponent {

}
