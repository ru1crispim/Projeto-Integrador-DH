'user strict'

const fillOutForm = (endereco) =>{
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
};

const searchZipCode = async () => {
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/
    `;
    const dados = await fetch(url);
    const endereco = await dados.json();
    if (endereco.hasOwnProperty('erro')){
        alert('Digite um cep válido!')
    }else{
    fillOutForm(endereco);
    }
}


document.getElementById('cep')
.addEventListener('focusout', searchZipCode);



