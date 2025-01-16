import { Component, computed, inject, resource, signal } from '@angular/core';
import { initialValue, Movies } from '../../../models';
import { TableMoviesComponent } from '../table-movies/table-movies.component';
import { MoviesInfra } from '../../../services/movies-infra';
import { ApiOneResponse } from '../../../services';

@Component({
  selector: 'app-list-movies',
  imports: [TableMoviesComponent],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.css',
})
export class ListMoviesComponent {
  private readonly moviesInfra = inject(MoviesInfra);

  // movies = signal<Movies>(initialValue)

  itemsResource = resource({
    loader: async () => await this.moviesInfra.getAll(),
  });

  movies = computed(() =>
    this.itemsResource.value()?.results.map((item) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      posterPath: item.poster_path,
      count: item.favorite_count,
    }))
  );
}
