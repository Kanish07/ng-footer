import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-footer',
  template: `
    <div class="d-flex flex-column h-100">
      <footer class="d-md-flex p-2 mt-auto" style="background-color: #F1F4F5;">
          <div class="container">
              <div class="row">
                <div class="col">
                    <img class="d-flex justify-content-start" [src]="logoUrl" alt="kovai.co" width="100px" />
                </div>
                <div class="col">
                    <span class="d-flex justify-content-end" style="font-weight: bold;">Copyright © 2022 Kovai Limited</span>
                </div>
              </div>
          </div>
        </footer>
    </div>
  `,
  styles: [
  ]
})
export class NgFooterComponent implements OnInit {

  @Input() logoUrl!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
