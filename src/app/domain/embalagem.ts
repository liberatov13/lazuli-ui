import { Produto } from "./produto";
import { Marca } from "./marca";
import { UnidadeMedida } from "./unidade-medida";

export class Embalagem {
  idEmbalagem?: number;
  produto?: Produto;
  marca?: Marca;
  quantidade?: number;
  unidadeMedida?: UnidadeMedida;
  codigoEan?: string;
  dataCadastro?: Date;
}
