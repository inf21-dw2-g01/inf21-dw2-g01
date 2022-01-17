import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Filmes,
  ListaFilmes,
} from '../models';
import {FilmesRepository} from '../repositories';

export class FilmesListaFilmesController {
  constructor(
    @repository(FilmesRepository) protected filmesRepository: FilmesRepository,
  ) { }

  @get('/filmes/{id}/lista-filmes', {
    responses: {
      '200': {
        description: 'Array of Filmes has many ListaFilmes',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ListaFilmes)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<ListaFilmes>,
  ): Promise<ListaFilmes[]> {
    return this.filmesRepository.filmes_listas(id).find(filter);
  }

  @post('/filmes/{id}/lista-filmes', {
    responses: {
      '200': {
        description: 'Filmes model instance',
        content: {'application/json': {schema: getModelSchemaRef(ListaFilmes)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Filmes.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListaFilmes, {
            title: 'NewListaFilmesInFilmes',
            exclude: ['id_lista'],
            optional: ['filmesId']
          }),
        },
      },
    }) listaFilmes: Omit<ListaFilmes, 'id_lista'>,
  ): Promise<ListaFilmes> {
    return this.filmesRepository.filmes_listas(id).create(listaFilmes);
  }

  @patch('/filmes/{id}/lista-filmes', {
    responses: {
      '200': {
        description: 'Filmes.ListaFilmes PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListaFilmes, {partial: true}),
        },
      },
    })
    listaFilmes: Partial<ListaFilmes>,
    @param.query.object('where', getWhereSchemaFor(ListaFilmes)) where?: Where<ListaFilmes>,
  ): Promise<Count> {
    return this.filmesRepository.filmes_listas(id).patch(listaFilmes, where);
  }

  @del('/filmes/{id}/lista-filmes', {
    responses: {
      '200': {
        description: 'Filmes.ListaFilmes DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(ListaFilmes)) where?: Where<ListaFilmes>,
  ): Promise<Count> {
    return this.filmesRepository.filmes_listas(id).delete(where);
  }
}
