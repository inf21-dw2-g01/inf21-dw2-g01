import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {User, UserRelations, ListaFilmes} from '../models';
import {ListaFilmesRepository} from './lista-filmes.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {

  public readonly user_lista: HasOneRepositoryFactory<ListaFilmes, typeof User.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('ListaFilmesRepository') protected listaFilmesRepositoryGetter: Getter<ListaFilmesRepository>,
  ) {
    super(User, dataSource);
    this.user_lista = this.createHasOneRepositoryFactoryFor('user_lista', listaFilmesRepositoryGetter);
    this.registerInclusionResolver('user_lista', this.user_lista.inclusionResolver);
  }
}
