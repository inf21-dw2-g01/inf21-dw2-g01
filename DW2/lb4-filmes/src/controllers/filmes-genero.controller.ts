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
  Genero,
} from '../models';
import {FilmesRepository} from '../repositories';

export class FilmesGeneroController {
  constructor(
    @repository(FilmesRepository) protected filmesRepository: FilmesRepository,
  ) { }

  @get('/filmes/{id}/generos', {
    responses: {
      '200': {
        description: 'Array of Filmes has many Genero',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Genero)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Genero>,
  ): Promise<Genero[]> {
    return this.filmesRepository.genero_Filmes(id).find(filter);
  }

  @post('/filmes/{id}/generos', {
    responses: {
      '200': {
        description: 'Filmes model instance',
        content: {'application/json': {schema: getModelSchemaRef(Genero)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Filmes.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Genero, {
            title: 'NewGeneroInFilmes',
            exclude: ['id'],
            optional: ['filmesId']
          }),
        },
      },
    }) genero: Omit<Genero, 'id'>,
  ): Promise<Genero> {
    return this.filmesRepository.genero_Filmes(id).create(genero);
  }

  @patch('/filmes/{id}/generos', {
    responses: {
      '200': {
        description: 'Filmes.Genero PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Genero, {partial: true}),
        },
      },
    })
    genero: Partial<Genero>,
    @param.query.object('where', getWhereSchemaFor(Genero)) where?: Where<Genero>,
  ): Promise<Count> {
    return this.filmesRepository.genero_Filmes(id).patch(genero, where);
  }

  @del('/filmes/{id}/generos', {
    responses: {
      '200': {
        description: 'Filmes.Genero DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Genero)) where?: Where<Genero>,
  ): Promise<Count> {
    return this.filmesRepository.genero_Filmes(id).delete(where);
  }
}
