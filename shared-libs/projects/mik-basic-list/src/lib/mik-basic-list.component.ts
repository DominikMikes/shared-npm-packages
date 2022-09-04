import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-mik-basic-list',
  template: `
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  `,
  styles: [
  ]
})
export class MikBasicListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
