// dto\RequestDataTableModel.cs
import {DboTest} from './dbo-test';

export interface RequestDataTableInterface<T> {
    Start: number;
    elemento: DboTest;
    listaprueba: DboTest[];
    Limit: number;
    Filter: T;
}
