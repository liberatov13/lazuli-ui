import { TipoProduto } from "./tipo-produto";

export class Produto {
  idProduto?: number;
  descricaoBasica?: string;
  descricaoCompleta?: string;
  tipoProduto?: TipoProduto;
  status?: boolean;
  dataCadastro?: Date;
}
