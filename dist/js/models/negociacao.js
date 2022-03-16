export class Negociacao {
    // Se no construtor colocar o modificador private ou public
    // o Typescript irá criar uma propriedade da sua classe
    // com o mesmo nome dos parâmetros do construtor
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        // Programação defensiva
        // copia o objeto _data em um novo objeto e retorna
        // blinda o acesso direto à propriedade
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
