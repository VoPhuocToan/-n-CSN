import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentOverviewByCliComponent } from "./component-overview-by-cli/component-overview-by-cli.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentOverviewByCliComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AOBAOM';
}
