
// Constantes
const nome = document.getElementById( 'nome' );
const altura = document.getElementById( 'altura' );
const peso = document.getElementById( 'peso' );
const calcular = document.getElementById( 'calc' );
const imagem = document.getElementById( 'imagem-imc' );
const resultado = document.getElementById( 'resultado' );


// Função do IMC 
function imc () {
    const nome = document.getElementById( 'nome' ).value;
    const idade = document.getElementById( 'idade' ).value;
    const altura = document.getElementById( 'altura' ).value;
    const peso = document.getElementById( 'peso' ).value;
    const imagem = document.getElementById( 'imagem-imc' );
    const resultado = document.getElementById( 'resultado' );

    // Verificação do Resultado do IMC
    if (nome !== '' && altura !== '' && peso !== '') {
        const valor_imc = (peso / (altura * altura)).toFixed(1);

        let classificacao_para_adultos = '';
        let classificacao_para_idosos = '';


        // IMC dos Adultos
        if (idade >= 18 && idade <= 59) {
            if (valor_imc < 18.5) {
                classificacao_para_adultos = 'Abaixo do peso.';
                imagem.src = "../imagens/Baixo_Peso.jpeg"
                imagem.style.width = '300px';
                imagem.style.marginTop = '-400px';
                imagem.style.height = '600px';

            } else if (valor_imc > 18.5 && valor_imc <= 24.9) {
                classificacao_para_adultos = 'Com o peso ideal.';
                imagem.src = "../imagens/Peso_Normal.jpeg"
                imagem.style.width = '300px';
                imagem.style.height = '650px';

            } else if (valor_imc > 24.9 && valor_imc <= 29.9) {
                classificacao_para_adultos = 'Levemente acima do peso.';
                imagem.src = "../imagens/Sobrepeso.jpeg"
                imagem.style.width = '300px';
                imagem.style.height = '650px';

            } else if (valor_imc > 30 && valor_imc <= 34.9) {
                classificacao_para_adultos = 'Com obesidade de grau I';
                imagem.src = "../imagens/Obesidade_Grau_I.jpeg"
                imagem.style.width = '300px';
                imagem.style.height = '650px';

            } else if (valor_imc > 34.9 && valor_imc <= 40) {
                classificacao_para_adultos = 'Com obesidade de grau II';
                imagem.src = "../imagens/Obesidade_Grau_II.jpeg"
                imagem.style.width = '300px';
                imagem.style.height = '650px';

            } else {
                classificacao_para_adultos = 'Com obesidade de grau III.';
                imagem.src = "../imagens/Obesidade_Grau_III.jpeg"
                imagem.style.width = '300px';
                imagem.style.height = '650px';
            }

        }

        
        // IMC dos Idosos
        if (idade >= 60) {
            if (valor_imc < 22) {
                classificacao_para_idosos = 'Abaixo do peso.';
                imagem.src = "../imagens/Baixo_Peso.jpeg"
                imagem.style.width = '300px';
                imagem.style.height = '650px';

            }else if (valor_imc > 22 && valor_imc <= 27) {
                classificacao_para_idosos = 'Adequado ou Eurotrófico';
                imagem.src = "../imagens/Peso_Normal.jpeg"
                imagem.style.width = '300px';
                imagem.style.height = '650px';

            }else {
                classificacao_para_idosos = 'Sobrepeso';
                imagem.src = "../imagens/Sobrepeso.jpeg"
                imagem.style.width = '300px';
                imagem.style.height = '650px';
            }
        
        }

        if (classificacao_para_adultos) {
            resultado.textContent = `${nome} seu imc é ${valor_imc} e você está ${classificacao_para_adultos}`;
        }else if (classificacao_para_idosos) {
            resultado.textContent = `${nome} seu imc é ${valor_imc} e você está ${classificacao_para_idosos}`;
        }

    }else {
        resultado.textContent = 'Preencha Todos Os Campos!!';
    }
}

calc.addEventListener ( 'click' , imc );

