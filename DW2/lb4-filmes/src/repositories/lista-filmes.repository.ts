import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {ListaFilmes, ListaFilmesRelations, User, Filmes} from '../models';
import {UserRepository} from './user.repository';
import {FilmesRepository} from './filmes.repository';

export class ListaFilmesRepository extends DefaultCrudRepository<
  ListaFilmes,
  typeof ListaFilmes.prototype.id_lista,
  ListaFilmesRelations
> {

  public readonly user_lista: HasOneRepositoryFactory<User, typeof ListaFilmes.prototype.id_lista>;

  public readonly filmes_listas: HasManyRepositoryFactory<Filmes, typeof ListaFilmes.prototype.id_lista>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>, @repository.getter('FilmesRepository') protected filmesRepositoryGetter: Getter<FilmesRepository>,
  ) {
    super(ListaFilmes, dataSource);
    this.filmes_listas = this.createHasManyRepositoryFactoryFor('filmes_listas', filmesRepositoryGetter,);
    this.registerInclusionResolver('filmes_listas', this.filmes_listas.inclusionResolver);
    this.user_lista = this.createHasOneRepositoryFactoryFor('user_lista', userRepositoryGetter);
    this.registerInclusionResolver('user_lista', this.user_lista.inclusionResolver);
  }
}
