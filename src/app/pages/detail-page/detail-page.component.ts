import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  imports: [],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.css'
})
export class DetailPageComponent {

  selectedData:any

  district=[
    {
      id: 1,
      img: 'https://cdn.londonerinsydney.com/wp-content/uploads/2018/04/12161231/places-to-visit-in-fort-kochi.jpg?strip=all&lossy=1&ssl=1',
      title: 'Thiruvananthapuram',
      description: 'Capital city of Kerala, known for its beaches and temples.'
    },
    {
      id: 2,
      img: 'https://cdn.londonerinsydney.com/wp-content/uploads/2018/04/12161231/places-to-visit-in-fort-kochi.jpg?strip=all&lossy=1&ssl=1',
      title: 'Kollam',
      description: 'Famous for its backwaters, beaches, and cashew industry.'
    },
    {
      id: 3,
      img: 'https://cdn.londonerinsydney.com/wp-content/uploads/2018/04/12161231/places-to-visit-in-fort-kochi.jpg?strip=all&lossy=1&ssl=1',
      title: 'Pathanamthitta',
      description: 'Known for the Sabarimala temple and lush greenery.'
    },
    {
      id: 4,
      img: 'https://cdn.londonerinsydney.com/wp-content/uploads/2018/04/12161231/places-to-visit-in-fort-kochi.jpg?strip=all&lossy=1&ssl=1',
      title: 'Alappuzha',
      description: 'Venice of the East, popular for houseboat cruises.'
    },
    {
      id: 5,
      img: 'https://cdn.londonerinsydney.com/wp-content/uploads/2018/04/12161231/places-to-visit-in-fort-kochi.jpg?strip=all&lossy=1&ssl=1',
      title: 'Kottayam',
      description: 'Land of letters, latex, and lakes.'
    },
    {
      id: 6,
      img: 'https://cdn.londonerinsydney.com/wp-content/uploads/2018/04/12161231/places-to-visit-in-fort-kochi.jpg?strip=all&lossy=1&ssl=1',
      title: 'Idukki',
      description: 'Mountainous district with dams and wildlife sanctuaries.'
    },
    {
      id: 7,
      img: 'https://cdn.londonerinsydney.com/wp-content/uploads/2018/04/12161231/places-to-visit-in-fort-kochi.jpg?strip=all&lossy=1&ssl=1',
      title: 'Ernakulam',
      description: 'Commercial capital of Kerala, home to Kochi city.'
    },
    {
      id: 8,
      img: 'https://cdn.londonerinsydney.com/wp-content/uploads/2018/04/12161231/places-to-visit-in-fort-kochi.jpg?strip=all&lossy=1&ssl=1',
      title: 'Thrissur',
      description: 'Cultural capital, known for Thrissur Pooram festival.'
    },
    {
      id: 9,
      img: 'https://cdn.londonerinsydney.com/wp-content/uploads/2018/04/12161231/places-to-visit-in-fort-kochi.jpg?strip=all&lossy=1&ssl=1',
      title: 'Palakkad',
      description: 'Gateway to Kerala, rich in paddy fields and heritage.'
    },
    {
      id: 10,
      img: 'https://cdn.londonerinsydney.com/wp-content/uploads/2018/04/12161231/places-to-visit-in-fort-kochi.jpg?strip=all&lossy=1&ssl=1',
      title: 'Malappuram',
      description: 'Known for its cultural heritage and historic sites.'
    },
    {
      id: 11,
      img: 'https://cdn.londonerinsydney.com/wp-content/uploads/2018/04/12161231/places-to-visit-in-fort-kochi.jpg?strip=all&lossy=1&ssl=1',
      title: 'Kozhikode',
      description: 'Historic port city where Vasco da Gama landed.'
    },
    {
      id: 12,
      img: 'https://cdn.londonerinsydney.com/wp-content/uploads/2018/04/12161231/places-to-visit-in-fort-kochi.jpg?strip=all&lossy=1&ssl=1',
      title: 'Wayanad',
      description: 'Hilly district with wildlife sanctuaries and waterfalls.'
    },
    {
      id: 13,
      img: 'https://cdn.londonerinsydney.com/wp-content/uploads/2018/04/12161231/places-to-visit-in-fort-kochi.jpg?strip=all&lossy=1&ssl=1',
      title: 'Kannur',
      description: 'Known for Theyyam rituals and handloom industry.'
    },
    {
      id: 14,
      img: 'https://cdn.londonerinsydney.com/wp-content/uploads/2018/04/12161231/places-to-visit-in-fort-kochi.jpg?strip=all&lossy=1&ssl=1',
      title: 'Kasaragod',
      description: 'Northernmost district, famous for forts and beaches.'
    }
   ]
  constructor(private route:ActivatedRoute){
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id']; // '+' converts string to number
      this.selectedData = this.district.find(item => item.id == id);
      console.log('w',this.selectedData)
    });
  }

}
