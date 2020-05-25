import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
} from '@angular/cdk/drag-drop';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})

export class QuizComponent implements OnInit {
  constructor( private snackBar: MatSnackBar ) {}

  answers = [
  'Save water',
  'Use plastic straws',
  'Recycle paper',
  'Use as much plastic as possible',
  'Use reusable bags',
  'Throw you rubbish on the ground',
  'Use public transportation',
  'Use glass bottles over plastic bottles',
  'Cut trees',
  'Use cars to go everywhere'
];

submitted = [];

correct = [
  'Save water',
  'Recycle paper',
  'Use reusable bags',
  'Use public transportation',
  'Use glass bottles over plastic bottles'
];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  /** Predicate function that only allows even numbers to be dropped into a list. */
  correctPredicate(item: CdkDrag<string>) {
  //  return this.correct;
  }

  /** Predicate function that doesn't allow items to be dropped into a list. */
  noReturnPredicate() {
    return false;
  }

  submit() {
   // console.log(this.submitted);
    if (JSON.stringify(this.submitted).length === JSON.stringify(this.correct).length) {
     this.snackBar.open('Great job! You are up for your new life!', 'Dismiss', {
       duration: 3000,
       panelClass: ['mat-snack-bar-container', 'mat-stroked-button']
      });
    } else {
      this.snackBar.open('Sorry! You have missed the mark, go back and try again :/', 'Dismiss', {
        duration: 3000,
        panelClass: ['mat-snack-bar-container', 'mat-stroked-button']
      });
    }
  }

  ngOnInit() {}
}
