import { Component } from '@angular/core';
import { StateComponent } from "../state/state.component";

@Component({
  selector: 'app-district',
  imports: [StateComponent],
  templateUrl: './district.component.html',
  styleUrl: './district.component.css'
})
export class DistrictComponent {
  district=[
    {
      id: 1,
      img: 'https://sp.yimg.com/ib/th?id=OIP.BQVkDWdG3i6jTm-aZFkJbQHaFj&pid=Api&w=148&h=148&c=7&rs=1',
      title: 'Thiruvananthapuram',
      description: 'Capital city of Kerala, known for its beaches and temples.'
    },
    {
      id: 2,
      img: 'https://www.keralabackwater.com/blog/wp-content/uploads/2019/01/jatayupara.jpg',
      title: 'Kollam',
      description: 'Famous for its backwaters, beaches, and cashew industry.'
    },
    {
      id: 3,
      img: 'https://www.dtpcpathanamthitta.com/uploads/ebrochures/images/pathanamthittaebrochure-20230505131306993091.webp',
      title: 'Pathanamthitta',
      description: 'Known for the Sabarimala temple and lush greenery.'
    },
    {
      id: 4,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHAlJXVg8TUZYYlxT2HnnbL3ux3GFbrZAp2w&s',
      title: 'Alappuzha',
      description: 'Venice of the East, popular for houseboat cruises.'
    },
    {
      id: 5,
      img: 'https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fmobile%2Fkottayam-1713787819_042f91610233d30c0fdf.webp&w=3840&q=75',
      title: 'Kottayam',
      description: 'Land of letters, latex, and lakes.'
    },
    {
      id: 6,
      img: 'https://static.toiimg.com/thumb/msid-65196823,width-1070,height-580,resizemode-75,imgsize-11424370,pt-32,y_pad-40/65196823.jpg',
      title: 'Idukki',
      description: 'Mountainous district with dams and wildlife sanctuaries.'
    },
    {
      id: 7,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbC9rfWNYIkaJxhkhfFqXajdk9B1n1iUZQJQ&s',
      title: 'Ernakulam',
      description: 'Commercial capital of Kerala, home to Kochi city.'
    },
    {
      id: 8,
      img: 'https://images.deccanherald.com/deccanherald%2F2024-04%2F65575ceb-6ac0-4418-bbeb-4be841295b38%2Ffile7v2h8yw8dqc74vdc1dr.jpg?rect=0%2C9%2C975%2C512&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100',
      title: 'Thrissur',
      description: 'Cultural capital, known for Thrissur Pooram festival.'
    },
    {
      id: 9,
      img: 'https://i0.wp.com/indiacurrents.com/wp-content/uploads/2023/12/Greenery-beckons-in-Palakkad-photo-credit-Kerala-Tourism.jpg?fit=1200%2C675&ssl=1',
      title: 'Palakkad',
      description: 'Gateway to Kerala, rich in paddy fields and heritage.'
    },
    {
      id: 10,
      img: 'https://up.yimg.com/ib/th?id=OIP.ExLdJ8WVINAvDQxvHCzWpwHaFj&pid=Api&rs=1&c=1&qlt=95&w=139&h=104',
      title: 'Malappuram',
      description: 'Known for its cultural heritage and historic sites.'
    },
    {
      id: 11,
      img: 'https://i0.wp.com/planashleygo.com/wp-content/uploads/2024/08/i-love-kozhikode.jpg?resize=1000%2C750&ssl=1',
      title: 'Kozhikode',
      description: 'Historic port city where Vasco da Gama landed.'
    },
    {
      id: 12,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Blue%2C_Green_%26_White.jpg/1200px-Blue%2C_Green_%26_White.jpg',
      title: 'Wayanad',
      description: 'Hilly district with wildlife sanctuaries and waterfalls.'
    },
    {
      id: 13,
      img: 'https://assets-news.housing.com/news/wp-content/uploads/2022/09/02151433/places-to-visit-in-kannur-shutterstock_1604282707-1200x700-compressed.jpg',
      title: 'Kannur',
      description: 'Known for Theyyam rituals and handloom industry.'
    },
    {
      id: 14,
      img: 'https://trip2kerala.com/wp-content/uploads/2021/11/Bekal-540x480.jpg',
      title: 'Kasaragod',
      description: 'Northernmost district, famous for forts and beaches.'
    }
   ]
}
