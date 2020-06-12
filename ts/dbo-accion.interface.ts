// dto\DboAccionModel.cs
export interface DboAccionInterface {
    IdAccion: number;
    IdAplicacion: number;
    Controller: string;
    Action: string;
    Resource: string;
    Caption: string;
    Descripcion: string;
    Activo?: number;
    Tipo?: number;
    IdAccionSuper?: number;
    FkAccionAccionSuper: DboAccionInterface;
}
