
import {FileDB} from './file.model'
import { Vendedor } from './user.model';

export interface Produto{
    
    id: String;
    codigo:String;
    descricao:String;
    precoun: number;
    quantidade: number;
    tipo:String;
    unidade:String;
    data:String;
    vendedor_id:String;
    destaque: boolean;
    
}

export interface ProdutoDTO {
    
    
     id: String;
     codigo: String;
     descricao: String;
     precoun: String;
     Ventrada: String;
     quantidade: number;
     tipo: String;
     Unidade: String;
     UnidadeTributavel: String;
     data: String;
     loja: String;
     SubTotal: number;
     vendedor_id: String;
     files: FileDB[];
     urls: String[];

    }

export interface ResponseFile {

          name: String;
          url: String ;
          type: String;
          data: BlobPart[];

  }

export interface ProdutoVariacao {
 id: number;
  vendedor_id: string;
  produto_id: string;
  descricao: string;
}

export interface VariacaoDiversidade {
  id: number;
  variacao_id: string;
  descricao: string;
  precoun: string;
  imagem_id:  File | null;
  produto_id: String;
  qtd: number | 0;
}


export interface sessionData {
      ProdutosInCart: ProdutoDTO[],
      combinedList: { tipo: ProdutoVariacao, variacoes: VariacaoDiversidade[] }[],
      vendedor: Vendedor
    };

export interface CombinedData {
  produtos: ProdutoDTO[];
  tiposPorProduto: { produto: ProdutoDTO, tipos: ProdutoVariacao[] }[];
  variaçõesPorTipo: { tipo: ProdutoVariacao, variacoes: VariacaoDiversidade[] }[];
  vendedor: Vendedor;
}

export interface CombinedProduct {
  produto: ProdutoDTO;
  tipos: { tipo: ProdutoVariacao, variacoes: VariacaoDiversidade[] }[];
}


export interface CarrinhodeCompras {
  ProdutosInCart: CombinedProduct[];
  id_vendedor: String;
}
  
export interface CupomDesconto {
  id: number;
  idVendedor: number;
  dataValidade: string;
  dataCriacao: string;
  tipo: string;
  valor: string;
  codigo: string;
  ativo: string; // Note que aqui está como string, pois o campo original é uma String
}

export interface Categoria {
  id: number;
  vendedor: string;
  descricao: string;
  ativo: boolean;
}
