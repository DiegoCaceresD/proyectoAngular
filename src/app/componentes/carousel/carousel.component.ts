import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imgCollection: Array<object> = [
    {
      image: '../assets/carrousel1.jpg',
      thumbImage: '../assets/carrousel1.jpg',
      alt: 'Image 1',

    }, {
      image: '../assets/carrousel2.jpg',
      thumbImage: '../assets/carrousel2.jpg',
      alt: 'Image 2'
    }, {
      image: '../assets/carrousel3.jpg',
      thumbImage: '../assets/carrousel3.jpg',
      alt: 'Image 3'
    }, {
      image: '../assets/carrousel4.jpg',
      thumbImage: '../assets/carrousel4.jpg',
      alt: 'Image 4'
    }, {
      image: '../assets/carrousel5.jpg',
      thumbImage: '../assets/carrousel5.jpg',
      alt: 'Image 5'
    }, {
      image: '../assets/carrousel6.jpg',
      thumbImage: '../assets/carrousel6.jpg',
      alt: 'Image 6'
    }, {
      image: '../assets/carrousel7.jpg',
      thumbImage: '../assets/carrousel7.jpg',
      alt: 'Image 7'
    }, {
      image: '../assets/carrousel8.jpg',
      thumbImage: '../assets/carrousel8.jpg',
      alt: 'Image 8'
    }, {
      image: '../assets/carrousel9.jpg',
      thumbImage: '../assets/carrousel9.jpg',
      alt: 'Image 9'
    }, {
      image: '../assets/carrousel10.jpg',
      thumbImage: '../assets/carrousel10.jpg',
      alt: 'Image 10'
    }
  ];
}
