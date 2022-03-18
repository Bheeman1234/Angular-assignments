import { Component } from "@angular/core";

@Component({
  selector: 'app-warning-alert',
  template: `<h3>Warning Alert</h3>`,
  styles: [`
  h3 {
   padding: 20px;
   background-color: mistyrose;
   border: 1px solid red;
  }
  `]
})
export class WarningAlertComponent {

}
