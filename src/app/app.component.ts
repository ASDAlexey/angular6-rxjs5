import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // subject$ = new BehaviorSubject({ data: [{ id: 10, name: 'Alexey' }] });

  constructor() {
    Observable.of(1)
      .map(x => x + x)
      // .mergeMap(n => of(n + 1, n + 2)
      //   .filter(x => x % 1 == 0)
      //   .scan((acc, x) => acc + x, 0)
      // )
      // .catch(err => of('error found'))
      .subscribe((data) => {
        console.log(data);
      });

    // this.subject$.pipe(
    //   tap(console.log),
    //   map(results => results.data[0])
    // ).subscribe(results => {
    //   console.log('Results', results);
    // });
  }
}
