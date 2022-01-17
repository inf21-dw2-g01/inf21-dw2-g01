import {Entity, model, property, hasMany} from '@loopback/repository';
import {Filmes} from './filmes.model';

@model()
export class Genero extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  genero: string;

  @property({
    type: 'number',
  })
  filmesId?: number;

  @hasMany(() => Filmes)
  genero_Filmes: Filmes[];

  constructor(data?: Partial<Genero>) {
    super(data);
  }
}

export interface GeneroRelations {
  // describe navigational properties here
}

export type GeneroWithRelations = Genero & GeneroRelations;
