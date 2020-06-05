// dto\IerpProbandoModel.cs
import {IerpMuyParecidaInterface} from './ierp-muy-parecida.interface';

export interface IerpProbandoInterface {
    IdPrueba: number;
    Nombre: string;
    ListaIerpMuyParecida: IerpMuyParecidaInterface[];
}
