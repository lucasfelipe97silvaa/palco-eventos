interface IIngresso {
    nome: string;
    preco: number;
}

export interface IEvento {
    id: string;
    categoria: number;
    nome: string;
    data: Date;
    horaInicio: string;
    horaFim: string;
    endereco: string;
    descricao: string;
    imagem: string;
    ingressos: IIngresso[];
}

export interface ICategoria {
    id: number;
    nome: string;
}

interface IIngressoPedido {
    nome: string;
    preco: string;
    quantidade: number
}

export interface IPedido {
    id: string;
    usuario_id: string;
    evento_id: string;
    ingressos: IIngressoPedido[];
}

export interface IFavorito {
    id: string;
    evento_id: string;
    usuario_id: string;
}