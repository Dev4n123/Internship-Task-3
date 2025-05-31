import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cards',
  imports: [RouterLink],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'

})
export class CardsComponent {
@Input() product:any;
}
