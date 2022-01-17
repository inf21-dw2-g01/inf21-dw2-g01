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
  Genero,
  Filmes,
} from '../models';
import {GeneroRepository} from '../repositories';

export class GeneroFilmesController {
  constructor(
    @repository(GeneroRepository) protected generoRepository: GeneroRepository,
  ) { }

  @get('/generos/{id}/filmes', {
    responses: {
      '200': {
        description: 'Array of Genero has many Filmes',
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
    return this.generoRepository.genero_Filmes(id).find(filter);
  }

  @post('/generos/{id}/filmes', {
    responses: {
      '200': {
        description: 'Genero model instance',
        content: {'application/json': {schema: getModelSchemaRef(Filmes)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Genero.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Filmes, {
            title: 'NewFilmesInGenero',
            exclude: ['id'],
            optional: ['generoId']
          }),
        },
      },
    }) filmes: Omit<Filmes, 'id'>,
  ): Promise<Filmes> {
    return this.generoRepository.genero_Filmes(id).create(filmes);
  }

  @patch('/generos/{id}/filmes', {
    responses: {
      '200': {
        description: 'Genero.Filmes PATCH success count',
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
    return this.generoRepository.genero_Filmes(id).patch(filmes, where);
  }

  @del('/generos/{id}/filmes', {
    responses: {
      '200': {
        description: 'Genero.Filmes DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Filmes)) where?: Where<Filmes>,
  ): Promise<Count> {
    return this.generoRepository.genero_Filmes(id).delete(where);
  }
}
