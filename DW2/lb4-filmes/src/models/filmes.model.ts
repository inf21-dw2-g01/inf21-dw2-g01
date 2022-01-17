import {Entity, model, property} from '@loopback/repository';

@model()
export class Filmes extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @property({
    type: 'boolean',
    required: true,
  })
  adult: boolean;

  @property({
    type: 'string',
    required: true,
  })
  language: string;

  @property({
    type: 'string',
    required: true,
  })
  original_title: string;

  @property({
    type: 'date',
    required: true,
  })
  release_date: string;

  @property({
    type: 'number',
    required: true,
  })
  runtime: number;

  @property({
    type: 'array',
    itemType: 'number',
    required: true,
  })
  genre: number[];


  constructor(data?: Partial<Filmes>) {
    super(data);
  }
}

export interface FilmesRelations {
  // describe navigational properties here
}

export type FilmesWithRelations = Filmes & FilmesRelations;
