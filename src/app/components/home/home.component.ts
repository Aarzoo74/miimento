import { Component } from '@angular/core';
import { HowItWorksComponent } from "../how-it-works/how-it-works.component";
import { FooterComponent } from "../footer/footer.component";
import { RegistrationComponent } from "../registration/registration.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HowItWorksComponent, FooterComponent, RegistrationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}
