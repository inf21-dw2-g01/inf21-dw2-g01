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
  User,
} from '../models';
import {ListaFilmesRepository} from '../repositories';

export class ListaFilmesUserController {
  constructor(
    @repository(ListaFilmesRepository) protected listaFilmesRepository: ListaFilmesRepository,
  ) { }

  @get('/lista-filmes/{id}/user', {
    responses: {
      '200': {
        description: 'ListaFilmes has one User',
        content: {
          'application/json': {
            schema: getModelSchemaRef(User),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<User>,
  ): Promise<User> {
    return this.listaFilmesRepository.user_lista(id).get(filter);
  }

  @post('/lista-filmes/{id}/user', {
    responses: {
      '200': {
        description: 'ListaFilmes model instance',
        content: {'application/json': {schema: getModelSchemaRef(User)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof ListaFilmes.prototype.id_lista,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User, {
            title: 'NewUserInListaFilmes',
            exclude: ['id'],
            optional: ['listaFilmesId']
          }),
        },
      },
    }) user: Omit<User, 'id'>,
  ): Promise<User> {
    return this.listaFilmesRepository.user_lista(id).create(user);
  }

  @patch('/lista-filmes/{id}/user', {
    responses: {
      '200': {
        description: 'ListaFilmes.User PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User, {partial: true}),
        },
      },
    })
    user: Partial<User>,
    @param.query.object('where', getWhereSchemaFor(User)) where?: Where<User>,
  ): Promise<Count> {
    return this.listaFilmesRepository.user_lista(id).patch(user, where);
  }

  @del('/lista-filmes/{id}/user', {
    responses: {
      '200': {
        description: 'ListaFilmes.User DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(User)) where?: Where<User>,
  ): Promise<Count> {
    return this.listaFilmesRepository.user_lista(id).delete(where);
  }
}
