import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Genero, GeneroRelations, Filmes} from '../models';
import {FilmesRepository} from './filmes.repository';

export class GeneroRepository extends DefaultCrudRepository<
  Genero,
  typeof Genero.prototype.id,
  GeneroRelations
> {

  public readonly genero_Filmes: HasManyRepositoryFactory<Filmes, typeof Genero.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('FilmesRepository') protected filmesRepositoryGetter: Getter<FilmesRepository>,
  ) {
    super(Genero, dataSource);
    this.genero_Filmes = this.createHasManyRepositoryFactoryFor('genero_Filmes', filmesRepositoryGetter,);
    this.registerInclusionResolver('genero_Filmes', this.genero_Filmes.inclusionResolver);
  }
}
