import { 
  Component ,
  OnInit,
  Input,
   ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  ViewChild,
  ElementRef
  } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.Emulated//None,Native
})
export class ServerElementComponent  implements OnInit, OnChanges,DoCheck,AfterContentInit {
   @Input('srvElement') element:{type:string, name: string, content:string};
   @Input() name: string;
   @ViewChild('heading') header:ElementRef;
  constructor() { 
    console.log('constructor called!');
  }

  ngOnInit () {
    console.log('ngOnInit called!');
    console.log(this.header.nativeElement.textContent);

  }
  ngOnChanges(changes:SimpleChanges) {
    console.log('OnChanges called!');
    console.log(changes);
  }
  ngDoCheck() {
    console.log('ngDoCheck called!');
    
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit called!')
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!')
  }
  }


