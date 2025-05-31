import { Component } from '@angular/core';
import { ApiService } from '../../layout/api.service';
import { CardComponent } from '../../layout/components/card/card.component';


@Component({
  selector: 'app-home',
  
 imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 product: any;

 constructor(private apiservice: ApiService){
  this.apiservice.getProducts().subscribe((data : any)=> {
    this.product = data ;

  });
 }
}
