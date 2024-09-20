interface IIngresso {
    nome: string;
    preco: number;
}

export enum Categorias{
    SHOWS = 1,
    STANDUP = 2,
    TEATRO = 3,
    BALADAS = 4,
    FESTIVAIS = 5
}

export interface IEvento {
    id: string;
    categoria_id: number;
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