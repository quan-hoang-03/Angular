import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() userName = '';

  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef;

  constructor() {}

  ngOnInit() {
    console.log('ngOnInit from the child component');
  }

  ngDoCheck() {
    console.log('ngDoCheck triggered');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges triggered', changes);

    if (!changes['userName'].isFirstChange()) {
      if (changes['userName'].currentValue === 'Quan') {
        this.userName = 'Hello ' + this.userName;
      } else {
        this.userName = changes['userName'].previousValue;
      }
    }
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit - wrapper', this.wrapper);
    console.log("ngAfterContentInit - 'contentWrapper", this.content);
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked triggered');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit - wrapper', this.wrapper);
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked triggered');
  }
  ngOnDestroy(): void {
   console.log('Child component is destroyed! :(');
}
}
