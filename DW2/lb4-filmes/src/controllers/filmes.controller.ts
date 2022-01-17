import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Filmes} from '../models';
import {FilmesRepository} from '../repositories';

export class FilmesController {
  constructor(
    @repository(FilmesRepository)
    public filmesRepository : FilmesRepository,
  ) {}

  @post('/filmes')
  @response(200, {
    description: 'Filmes model instance',
    content: {'application/json': {schema: getModelSchemaRef(Filmes)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Filmes, {
            title: 'NewFilmes',
            exclude: ['id'],
          }),
        },
      },
    })
    filmes: Omit<Filmes, 'id'>,
  ): Promise<Filmes> {
    return this.filmesRepository.create(filmes);
  }

  @get('/filmes/count')
  @response(200, {
    description: 'Filmes model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Filmes) where?: Where<Filmes>,
  ): Promise<Count> {
    return this.filmesRepository.count(where);
  }

  @get('/filmes')
  @response(200, {
    description: 'Array of Filmes model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Filmes, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Filmes) filter?: Filter<Filmes>,
  ): Promise<Filmes[]> {
    return this.filmesRepository.find(filter);
  }

  @patch('/filmes')
  @response(200, {
    description: 'Filmes PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Filmes, {partial: true}),
        },
      },
    })
    filmes: Filmes,
    @param.where(Filmes) where?: Where<Filmes>,
  ): Promise<Count> {
    return this.filmesRepository.updateAll(filmes, where);
  }

  @get('/filmes/{id}')
  @response(200, {
    description: 'Filmes model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Filmes, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Filmes, {exclude: 'where'}) filter?: FilterExcludingWhere<Filmes>
  ): Promise<Filmes> {
    return this.filmesRepository.findById(id, filter);
  }

  @patch('/filmes/{id}')
  @response(204, {
    description: 'Filmes PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Filmes, {partial: true}),
        },
      },
    })
    filmes: Filmes,
  ): Promise<void> {
    await this.filmesRepository.updateById(id, filmes);
  }

  @put('/filmes/{id}')
  @response(204, {
    description: 'Filmes PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() filmes: Filmes,
  ): Promise<void> {
    await this.filmesRepository.replaceById(id, filmes);
  }

  @del('/filmes/{id}')
  @response(204, {
    description: 'Filmes DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.filmesRepository.deleteById(id);
  }
}
