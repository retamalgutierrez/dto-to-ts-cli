// dto\DboPruebaModel.cs
import { DboPruebaMantenedorQueryDataInterface } from './dbo-prueba-mantenedor-query-data.interface';

export interface DboPruebaInterface {
    Prueba: number;
    Filtro: DboPruebaMantenedorQueryDataInterface;
}
