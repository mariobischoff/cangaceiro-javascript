class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document); // mantem o document no contexto

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

    }

    adiciona(event) {
        event.preventDefault();


        let negociacao = new Negociacao(
            DateConverter.paraData(this._inputData.value), 
            parseInt(this._inputQuantidade.value), 
            parseFloat(this._inputValor.value)
        );

        let diaMesAno = DateConverter.paraTexto(negociacao.data);
        console.log(negociacao);
        
        console.log(diaMesAno);
        
    }

}
