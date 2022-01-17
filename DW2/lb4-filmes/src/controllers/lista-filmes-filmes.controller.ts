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
  ListaFilmes,
  Filmes,
} from '../models';
import {ListaFilmesRepository} from '../repositories';

export class ListaFilmesFilmesController {
  constructor(
    @repository(ListaFilmesRepository) protected listaFilmesRepository: ListaFilmesRepository,
  ) { }

  @get('/lista-filmes/{id}/filmes', {
    responses: {
      '200': {
        description: 'Array of ListaFilmes has many Filmes',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Filmes)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Filmes>,
  ): Promise<Filmes[]> {
    return this.listaFilmesRepository.filmes_listas(id).find(filter);
  }

  @post('/lista-filmes/{id}/filmes', {
    responses: {
      '200': {
        description: 'ListaFilmes model instance',
        content: {'application/json': {schema: getModelSchemaRef(Filmes)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof ListaFilmes.prototype.id_lista,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Filmes, {
            title: 'NewFilmesInListaFilmes',
            exclude: ['id'],
            optional: ['listaFilmesId']
          }),
        },
      },
    }) filmes: Omit<Filmes, 'id'>,
  ): Promise<Filmes> {
    return this.listaFilmesRepository.filmes_listas(id).create(filmes);
  }

  @patch('/lista-filmes/{id}/filmes', {
    responses: {
      '200': {
        description: 'ListaFilmes.Filmes PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Filmes, {partial: true}),
        },
      },
    })
    filmes: Partial<Filmes>,
    @param.query.object('where', getWhereSchemaFor(Filmes)) where?: Where<Filmes>,
  ): Promise<Count> {
    return this.listaFilmesRepository.filmes_listas(id).patch(filmes, where);
  }

  @del('/lista-filmes/{id}/filmes', {
    responses: {
      '200': {
        description: 'ListaFilmes.Filmes DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Filmes)) where?: Where<Filmes>,
  ): Promise<Count> {
    return this.listaFilmesRepository.filmes_listas(id).delete(where);
  }
}
