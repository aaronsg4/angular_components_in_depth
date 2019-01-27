import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'components-indepth';

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    let obs = this.http.get('https://api.github.com/users/aaronsg4');
    obs.subscribe((response) => {
      return alert('Made a call in app.component.ts / ngOnInit' + response);
    });
  }
}
