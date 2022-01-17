import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {GeneroFilmes, GeneroFilmesRelations} from '../models';

export class GeneroFilmesRepository extends DefaultCrudRepository<
  GeneroFilmes,
  typeof GeneroFilmes.prototype.id,
  GeneroFilmesRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(GeneroFilmes, dataSource);
  }
}
