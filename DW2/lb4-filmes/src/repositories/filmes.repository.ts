import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Filmes, FilmesRelations, Genero, ListaFilmes} from '../models';
import {GeneroRepository} from './genero.repository';
import {ListaFilmesRepository} from './lista-filmes.repository';

export class FilmesRepository extends DefaultCrudRepository<
  Filmes,
  typeof Filmes.prototype.id,
  FilmesRelations
> {

  public readonly genero_Filmes: HasManyRepositoryFactory<Genero, typeof Filmes.prototype.id>;

  public readonly filmes_listas: HasManyRepositoryFactory<ListaFilmes, typeof Filmes.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('GeneroRepository') protected generoRepositoryGetter: Getter<GeneroRepository>, @repository.getter('ListaFilmesRepository') protected listaFilmesRepositoryGetter: Getter<ListaFilmesRepository>,
  ) {
    super(Filmes, dataSource);
    this.filmes_listas = this.createHasManyRepositoryFactoryFor('filmes_listas', listaFilmesRepositoryGetter,);
    this.registerInclusionResolver('filmes_listas', this.filmes_listas.inclusionResolver);
    this.genero_Filmes = this.createHasManyRepositoryFactoryFor('genero_Filmes', generoRepositoryGetter,);
    this.registerInclusionResolver('genero_Filmes', this.genero_Filmes.inclusionResolver);
  }
}
