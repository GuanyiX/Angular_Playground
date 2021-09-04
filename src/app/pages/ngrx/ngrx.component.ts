import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from 'src/app/_stores/actions/counter.action';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.scss']
})
export class NgrxComponent implements OnInit {

  count$!: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    // TODO: Connect `this.count$` stream to the current store `count` state
    this.count$ = store.select('count');
  }

  ngOnInit() {
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
