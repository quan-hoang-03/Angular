import { Component, Input, OnInit, VERSION } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent  {
  isChildDestroyed = false;
  ngOnInit() {
    console.log('ngOnInit from the parent component');
  }
  // userName = 'QuanHoang';

  // updateUser() {
  //   this.userName = 'Quan';
  // }
  // updateUserAgain() {
  //   this.userName = 'QuanHoang';
  // }

  exit() {
    this.isChildDestroyed = true;
  }

  //data binding
  // user = {
  //   name: 'Quan',
  //   age: 18,
  // };
  // name = 'Angular' + VERSION.major;
  // show = false;
  // <!-- structual directive  -->
  // @Input()
  // name!: string;

  // @Input() item = '';

  // structual directive NgFor
}
