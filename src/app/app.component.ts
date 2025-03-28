import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopHeaderComponent } from './top-header/top-header.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { OurClientComponent } from './our-client/our-client.component';

@Component({
  selector: 'app-root',
  imports: [TopHeaderComponent,HeaderComponent,CarouselComponent,OurServicesComponent,WhyUsComponent,OurClientComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'adypsoe-tcl';
}
