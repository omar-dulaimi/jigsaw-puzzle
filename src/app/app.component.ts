import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'JigsawPuzzle';

  puzzle = [
    '../assets/images/puzzle/row-2-col-3.jpg',
    '../assets/images/puzzle/row-2-col-1.jpg',
    '../assets/images/puzzle/row-2-col-2.jpg',
    '../assets/images/puzzle/row-1-col-1.jpg',
    '../assets/images/puzzle/row-1-col-2.jpg',
    '../assets/images/puzzle/row-1-col-3.jpg',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.puzzle, event.previousIndex, event.currentIndex);
  }
}
