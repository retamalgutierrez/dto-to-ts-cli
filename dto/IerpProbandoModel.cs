using System;
using System.Collections.Generic;

namespace api.Data.dto
{
    public partial class IerpProbandoModel
    {
        #region Generated Properties
        public int IdPrueba { get; set; }

        public string Nombre { get; set; }

        #endregion
        public List<IerpMuyParecidaModel> ListaIerpMuyParecida { get; set; }
    }
}
