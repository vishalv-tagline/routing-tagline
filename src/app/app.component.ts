import { Component } from '@angular/core';
import { Heading } from './common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routing-tagline';
  navbar: string[] = ['Case Study', 'About', 'Hire developer', 'Technology', 'Industry']

  heading: Heading = {
    head1: 'Software Development Company ',
    head2: '& IT Consultancy',
    title1: 'Serving',
    title2: 'Start-UPs To Fortune 500 ',
    des1: 'With the help of Innovation and Technology, We give you the power to ',
    des2: 'change the world with your ideas.',
    button: 'Schedule a meeting',
    image: '../assets/images/images.png'
  }
}
