import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  showSecretPwd = false;
  log:any = [];
  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetails() {
    this.showSecretPwd = !this.showSecretPwd;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

}
