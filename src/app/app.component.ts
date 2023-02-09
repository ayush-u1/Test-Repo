import { Component } from '@angular/core';

/*decorator ---- conponent decorator is basically a fubnction that attaches to class just below it*/
@Component({
  //metadata
  selector: 'app-root',//selector is custom html tag
  templateUrl: './app.component.html', //templateurl points to the html flies that represent view for this component
  styleUrls: ['./app.component.css']
})
//class Appcompnt 
export class AppComponent {
  title = 'Ayush';
}
