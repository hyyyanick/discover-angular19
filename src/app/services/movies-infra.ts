import { Injectable } from '@angular/core';
import { ApiResponse } from '.';

@Injectable({ providedIn: 'root' })
export class MoviesInfra {
  readonly host: string = 'https://api.themoviedb.org/3/movie/popular';
  async getAll(): Promise<ApiResponse> {
    const url = this.host;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Your Api Key',
      },
    };

    const response = await fetch(url, options);
    return await response.json();
  }
}
