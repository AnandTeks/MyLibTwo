import { Component, OnInit } from '@angular/core';
import {SharedService} from '@anandmohankp/shared';

@Component({
  selector: 'lib-my-libtwo',
  template: `
    <p>
      my-libtwo works!
      
    </p>
    <a> Content From shared library ---- {{serviceContent}} </a>
  `,
  styles: [
  ]
})
export class MyLibtwoComponent implements OnInit {

  serviceContent:string = "";
  constructor(private sharedService: SharedService){
    console.log('-------'+this.sharedService.getSharedServiceContent())
    this.serviceContent = this.sharedService.getSharedServiceContent();
  }
  ngOnInit(): void {
  }

}
