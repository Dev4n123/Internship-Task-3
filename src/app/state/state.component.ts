import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-state',
  imports: [RouterLink],
  templateUrl: './state.component.html',
  styleUrl: './state.component.css'
})
export class StateComponent {

  @Input() title:string=''
  @Input() img:string=''
  @Input() id:any=''
  @Input() text:string=''

}
