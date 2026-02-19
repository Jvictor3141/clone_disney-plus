document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]'); // Seleciona todos os botões de aba usando o atributo "data-tab-button", assim criamos um arrey com os botões
    const questions = document.querySelectorAll('[data-faq-question]'); // Seleciona todas as perguntas frequentes usando o atributo "data-faq-question", criando um array com as perguntas

    const heroHeight = document.querySelector('.hero').clientHeight; // Obtém a altura do elemento com a classe "hero" usando "clientHeight", que retorna a altura do elemento em pixels, incluindo o conteúdo, mas excluindo as bordas e margens

    window.addEventListener('scroll', function() { // Adiciona um evento de scroll à janela, para que possamos executar uma função sempre que o usuário rolar a página
        const currentPosition = window.scrollY; // Obtém a posição atual do scroll vertical usando "scrollY", que retorna a quantidade de pixels que o documento foi rolado para baixo

        if (currentPosition < heroHeight) { // Verifica se a posição atual do scroll é menor que a altura do elemento "hero"
            ocultaElementosDoHeader(); // Chama a função para ocultar os elementos do header, garantindo que eles fiquem ocultos enquanto o usuário estiver rolando dentro da área do "hero"
        } else {
            exibeElementosDoHeader(); // Chama a função para exibir os elementos do header, garantindo que eles fiquem visíveis quando o usuário rolar para além da área do "hero"
        }
    });

    //seção de atrações, programçao das abas
    for (let i = 0; i < buttons.length; i++) { // Percorre o array de botões
        buttons[i].addEventListener('click', function(botao) { // Adiciona um evento de clique a cada botão
            const abaAlvo = botao.target.dataset.tabButton; // Obtém o valor do atributo "data-tab-button" do botão clicado, que corresponde à aba a ser exibida
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`); // Seleciona a aba correspondente ao valor obtido do botão clicado, usando o atributo "data-tab-id" para associar o botão à aba

            hiddenTab(); // Chama a função para ocultar todas as abas, garantindo que apenas a aba selecionada seja exibida
            aba.classList.add('shows__list--is-active'); // Adiciona a classe "shows__list--is-active" à aba correspondente ao botão clicado, tornando-a visível
            removeActiveButton(); // Chama a função para remover a classe "shows__tabs__button--is-active" de todos os botões, garantindo que apenas o botão selecionado seja destacado
            botao.target.classList.add('shows__tabs__button--is-active'); // Adiciona a classe "shows__tabs__button--is-active" ao botão clicado, destacando-o como o botão ativo
        });
    }

    // Seção de perguntas frequentes, programação para abrir e fechar as respostas
    for (let i = 0; i < questions.length; i++) { // Percorre o array de perguntas frequentes
        questions[i].addEventListener('click', abreOuFechaResposta); // Adiciona um evento de clique a cada pergunta frequente, chamando a função "abreOuFechaResposta" quando uma pergunta for clicada
    }
});

function ocultaElementosDoHeader() { // Função para ocultar os elementos do header
    const header = document.querySelector('header'); // Seleciona o elemento "header" usando "querySelector", para que possamos manipular os elementos do header posteriormente
    header.classList.add('header--is-hidden'); // Adiciona a classe "header--is-hidden" ao elemento "header", ocultando-o
}

function exibeElementosDoHeader() { // Função para exibir os elementos do header
    const header = document.querySelector('header'); // Seleciona o elemento "header" usando "querySelector", para que possamos manipular os elementos do header posteriormente
    header.classList.remove('header--is-hidden'); // Remove a classe "header--is-hidden" do elemento "header", tornando-o visível novamente
}

function abreOuFechaResposta(elemento) { // Função para abrir ou fechar a resposta de uma pergunta frequente
    const classe = 'faq__questions__item--is-open'; // Define a classe que será adicionada ou removida para abrir ou fechar a resposta

    const elementoPai = elemento.target.parentNode; // Obtém o elemento pai da pergunta clicada, que é o item da pergunta frequente, usando "parentNode" para acessar o elemento pai
    
    elementoPai.classList.toggle(classe); // Alterna a classe definida no elemento pai, abrindo ou fechando a resposta associada à pergunta clicada, pois o toggle adiciona a classe se ela não estiver presente e remove a classe se ela já estiver presente, permitindo que a resposta seja exibida ou ocultada conforme o estado atual da classe.
}

function removeActiveButton() { // Função para remover a classe "shows__tabs__button--is-active" de todos os botões, garantindo que apenas o botão selecionado seja destacado
    const buttons = document.querySelectorAll('[data-tab-button]'); // Seleciona todos os botões de aba usando o atributo "data-tab-button", criando um array com os botões

    for (let i = 0; i < buttons.length; i++) { // Percorre o array de botões
        buttons[i].classList.remove('shows__tabs__button--is-active'); // Remove a classe "shows__tabs__button--is-active" de cada botão, garantindo que apenas o botão selecionado seja destacado
    }
}

function hiddenTab() { // Função para ocultar todas as abas
        const tabsContainer = document.querySelectorAll('[data-tab-id]'); // Seleciona todas as abas usando o atributo "data-tab-id" no HTML, para que possamos manipular as abas posteriormente

        for (let i = 0; i < tabsContainer.length; i++) { // Percorre o array de abas
            tabsContainer[i].classList.remove('shows__list--is-active'); // Remove a classe "shows__list--is-active" de cada aba, ocultando-as
        }
}