const app = document.querySelector("#app");

import { setupFormValidation, restoreVolunteers } from "./form.js";

const routes = {
    inicio: `
        <h1>ONG Esperança</h1>

        <section>
            <h2>Sobre a ONG</h2>
            <p>A ONG Esperança atua para promover inclusão social e melhorar a qualidade de vida de pessoas em situação de vulnerabilidade.</p>
        </section>

        <img src="../images/como-ajudar-ong-de-animais-petlove1.jpg" alt="Adote um animalzinho hoje!">

        <section>
            <h2>Nossa missão</h2>
            <p>Desenvolver projetos sociais e incentivar a participação da comunidade em ações solidárias.</p>
        </section>

        <section>
            <h2>Entre em contato</h2>
            <p>E-mail: contato@ongesperanca.org</p>
            <p>Telefone: (11) 98775-8771</p>
            <p>Endereço: São Paulo, SP</p>
        </section>
    `,

    projetos: `
        <h1>Projetos Sociais</h1>

        <section>
            <h2>Campanhas de Doação</h2>
            <p>Nossas campanhas arrecadam recursos para apoiar pessoas em situação de vulnerabilidade e manter nossos projetos.</p>

            <h3>Como doar</h3>
            <p>As doações podem ser realizadas através dos canais disponibilizados pela ONG.</p>
        </section>

        <section>
            <h2>Voluntariado</h2>
            <p>Os voluntários podem participar de ações sociais, eventos e atividades de apoio à comunidade.</p>

            <h3>Como participar</h3>
            <p>Para se voluntariar, acesse nossa página de cadastro e preencha o formulário.</p>

            <a href="#cadastro" data-route="cadastro">Quero ser voluntário</a>
        </section>

        <section class="feedback-section">
            <h2>Componentes de Feedback</h2>

            <div class="feedback-card">
                <h3>Badges</h3>
                <p>
                    <span class="badge badge-success">Ativo</span>
                    <span class="badge badge-warning">Pendente</span>
                    <span class="badge badge-danger">Cancelado</span>
                </p>
            </div>

            <div class="feedback-card">
                <h3>Alertas</h3>

                <div class="alert alert-success">
                    Cadastro realizado com sucesso!
                </div>

                <div class="alert alert-warning">
                    Atenção: verifique os dados informados.
                </div>

                <div class="alert alert-danger">
                    Não foi possível concluir a operação.
                </div>
            </div>

            <div class="feedback-card">
                <h3>Toast</h3>

                <div class="toast">
                    Alterações salvas com sucesso!
                </div>
            </div>

            <div class="feedback-card">
                <h3>Modal</h3>

                <div class="modal">
                    <div class="modal-content">
                        <h3>Confirmar ação</h3>
                        <p>Deseja realmente realizar esta ação?</p>

                        <button type="button">Confirmar</button>
                        <button type="button">Cancelar</button>
                    </div>
                </div>
            </div>
        </section>
    `,

    cadastro: `
        <h1>Cadastro de Voluntários</h1>

        <form id="form-cadastro">
            <fieldset>
                <legend>Dados pessoais</legend>

                <label for="nome">Nome completo:</label>
                <input type="text" id="nome" name="nome" required>

                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" required>

                <label for="nascimento">Data de nascimento:</label>
                <input type="date" id="nascimento" name="nascimento" required>

                <label for="cpf">CPF:</label>
                <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    required
                    pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                    placeholder="000.000.000-00"
                >
            </fieldset>

            <fieldset>
                <legend>Endereço</legend>

                <label for="endereco">Endereço:</label>
                <input type="text" id="endereco" name="endereco" required>

                <label for="cidade">Cidade:</label>
                <input type="text" id="cidade" name="cidade" required>

                <label for="estado">Estado:</label>
                <select id="estado" name="estado" required>
                    <option value="">Selecione</option>
                    <option value="SP">São Paulo</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PR">Paraná</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="RS">Rio Grande do Sul</option>
                </select>

                <label for="cep">CEP:</label>
                <input
                    type="text"
                    id="cep"
                    name="cep"
                    required
                    pattern="[0-9]{5}-[0-9]{3}"
                    placeholder="00000-000"
                >

                <label for="telefone">Telefone:</label>
                <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    required
                    pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                    placeholder="(00) 00000-0000"
                >
            </fieldset>

            <button type="submit">Cadastrar</button>
        </form>
    `
};


function render(route) {
    app.innerHTML = routes[route] || routes.inicio;

    if (route === "cadastro") {
        setupFormValidation();
        restoreVolunteers();
    }
}

document.addEventListener("click", event => {
    const link = event.target.closest("[data-route]");

    if (!link) {
        return;
    }

    event.preventDefault();

    const route = link.dataset.route;

    history.pushState({ route }, "", `#${route}`);

    render(route);
});

window.addEventListener("popstate", () => {
    const route = location.hash.replace("#", "") || "inicio";

    render(route);
});