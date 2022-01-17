import {Entity, model, property, hasOne} from '@loopback/repository';
import {ListaFilmes} from './lista-filmes.model';

@model()
export class User extends Entity {
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
  first_name: string;

  @property({
    type: 'string',
    required: true,
  })
  last_name: string;

  @property({
    type: 'string',
    required: true,
  })
  mail: string;

  @property({
    type: 'array',
    itemType: 'number',
    required: true,
  })
  favoritos: number[];

  @hasOne(() => ListaFilmes)
  user_lista: ListaFilmes;

  @property({
    type: 'number',
  })
  listaFilmesId?: number;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
