import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListMoviesComponent } from "./components/movies/list-movies/list-movies.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListMoviesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'discover-angular19';
}
