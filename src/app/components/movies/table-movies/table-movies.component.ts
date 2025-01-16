import { Component, input } from '@angular/core';
import { Movies } from '../../../models';

@Component({
  selector: 'app-table-movies',
  imports: [],
  templateUrl: './table-movies.component.html',
  styleUrl: './table-movies.component.css'
})
export class TableMoviesComponent {
  readonly movies = input.required<Movies>();

}
