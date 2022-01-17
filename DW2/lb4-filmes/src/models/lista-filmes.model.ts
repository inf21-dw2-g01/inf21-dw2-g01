import {Entity, model, property, hasOne, hasMany} from '@loopback/repository';
import {User} from './user.model';
import {Filmes} from './filmes.model';

@model()
export class ListaFilmes extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id_lista: number;

  @property({
    type: 'number',
    required: true,
  })
  id_filme: number;

  @property({
    type: 'number',
    required: true,
  })
  id: number;

  @property({
    type: 'number',
  })
  userId?: number;

  @hasOne(() => User)
  user_lista: User;

  @property({
    type: 'number',
  })
  filmesId?: number;

  @hasMany(() => Filmes)
  filmes_listas: Filmes[];

  constructor(data?: Partial<ListaFilmes>) {
    super(data);
  }
}

export interface ListaFilmesRelations {
  // describe navigational properties here
}

export type ListaFilmesWithRelations = ListaFilmes & ListaFilmesRelations;
