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
  User,
  ListaFilmes,
} from '../models';
import {UserRepository} from '../repositories';

export class UserListaFilmesController {
  constructor(
    @repository(UserRepository) protected userRepository: UserRepository,
  ) { }

  @get('/users/{id}/lista-filmes', {
    responses: {
      '200': {
        description: 'User has one ListaFilmes',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ListaFilmes),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<ListaFilmes>,
  ): Promise<ListaFilmes> {
    return this.userRepository.user_lista(id).get(filter);
  }

  @post('/users/{id}/lista-filmes', {
    responses: {
      '200': {
        description: 'User model instance',
        content: {'application/json': {schema: getModelSchemaRef(ListaFilmes)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof User.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListaFilmes, {
            title: 'NewListaFilmesInUser',
            exclude: ['id_lista'],
            optional: ['userId']
          }),
        },
      },
    }) listaFilmes: Omit<ListaFilmes, 'id_lista'>,
  ): Promise<ListaFilmes> {
    return this.userRepository.user_lista(id).create(listaFilmes);
  }

  @patch('/users/{id}/lista-filmes', {
    responses: {
      '200': {
        description: 'User.ListaFilmes PATCH success count',
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
    return this.userRepository.user_lista(id).patch(listaFilmes, where);
  }

  @del('/users/{id}/lista-filmes', {
    responses: {
      '200': {
        description: 'User.ListaFilmes DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(ListaFilmes)) where?: Where<ListaFilmes>,
  ): Promise<Count> {
    return this.userRepository.user_lista(id).delete(where);
  }
}
