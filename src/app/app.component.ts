import { Component } from '@angular/core';
// import 'rxjs/add/observable/map';
// import 'rxjs/add/operator/tap';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  subject$ = new BehaviorSubject({ data: [{ id: 10, name: 'Alexey' }] });

  constructor() {
    // this.subject$
    //     .do(console.log)
    //     .map(results => results.data)
    //     .subscribe(results => {
    //       console.log('Results', results);
    //     });

    this.subject$.pipe(
      tap(console.log),
      map(results => results.data[0])
    ).subscribe(results => {
      console.log('Results', results);
    });
  }
}
