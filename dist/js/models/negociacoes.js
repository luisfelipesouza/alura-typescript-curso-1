export class Negociacoes {
    constructor() {
        // private negociacoes: Array<Negociacao> = [];
        // Array<Negociacao> = Negociacao[]
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // Readonly do TypeScript não posso modificar a lista
    // lista(): ReadonlyArray<Negociacao> {
    // ReadonlyArray<Negociacao> = readonly Negociacao[]
    lista() {
        // Poderia usar um spread operator e retornar uma nova lista com todos os elementos da lista "negociacoes"
        // return [...this.negociaoes]
        return this.negociacoes;
    }
}
