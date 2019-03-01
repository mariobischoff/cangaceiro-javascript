class NegociacaoService {

    obterNegociacoesDaSemana(cb) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'negociacoes/semana', true);
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4 && xhr.status == 200) {
                const negociacoes = JSON
                    .parse(xhr.responseText)
                    .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
                cb(null, negociacoes);
            } else {
                console.log(xhr.responseText);
                cb('Não foi possível obter as negociações da semana', null);
            }
            xhr.send();
        };
        xhr.send()
    }
}