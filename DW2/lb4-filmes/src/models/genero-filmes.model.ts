import {Entity, model, property} from '@loopback/repository';

@model()
export class GeneroFilmes extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @property({
    type: 'number',
    required: true,
  })
  id_filme: number;

  @property({
    type: 'number',
    required: true,
  })
  id_genero: number;


  constructor(data?: Partial<GeneroFilmes>) {
    super(data);
  }
}

export interface GeneroFilmesRelations {
  // describe navigational properties here
}

export type GeneroFilmesWithRelations = GeneroFilmes & GeneroFilmesRelations;
