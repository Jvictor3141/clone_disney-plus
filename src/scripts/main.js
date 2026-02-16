document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]'); // Seleciona todos os botões de aba usando o atributo "data-tab-button", assim criamos um arrey com os botões

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
});

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