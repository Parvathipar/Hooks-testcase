import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
 
})
export class ChildComponent implements OnInit {
  @Input() data: number = 0; 


   constructor() { }

   ngOnInit():void{

   }
}
