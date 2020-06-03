import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-component',
  template: `
    <p>
      component works!
    </p>
  `,
  styles: []
})
export class ComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
