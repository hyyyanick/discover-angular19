export type ApiOneResponse = {
  description: string;
  favorite_count: number;
  id: number;
  item_count: number;
  iso_639_1: string;
  list_type: string;
  title: string;
  poster_path: string;
};

export type ApiResponse = {
  results: ApiOneResponse[];
};
