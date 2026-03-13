# projeto-web-n1

ARTHUR FERREIRA BARROS- 10439829
DAVID RODRIGUES DE OLIVEIRA- 10410867
ERICKA FERNANDA LIMA DE QUEIROZ- 10420084
GUSTAVO SANCHES SIMAO- 10436440
THAYNARA BARBOSA DE ALMEIDA DA SILVA- 10410900

O grupo decidiu desenvolver um serviço de assinatura de plantas focado na terceira idade. O projeto consiste em uma plataforma web mobile onde o usuário contrata uma assinatura para receber plantas periodicamente em casa. O diferencial está no aplicativo simplificado de acompanhamento, que utiliza uma linguagem clara e visual para ensinar o idoso a cuidar de cada espécie (frequência de rega, exposição ao sol, adubação), promovendo a terapia do cuidado e o bem-estar mental.
O processo de definição deste tema ocorreu através de um brainstorming focado em impacto social e acessibilidade, onde houve um debate de como a tecnologia poderia auxiliar no combate à solidão e no estímulo cognitivo de idosos. Durante a discussao, refinamos a ideia inicial de um simples e-commerce para um modelo de assinatura com suporte educativo, votando por esta proposta devido ao seu alto valor humano e ao desafio técnico de criar uma interface "Senior-Friendly" (amigável para idosos). A decisão foi consolidada pela percepção de que o cuidado com plantas é uma atividade terapêutica comprovada, e a tecnologia pode ser a ponte para facilitar esse hábito sem gerar frustrações técnicas ao usuário.
O projeto apresenta caráter extensionista ao aplicar o conhecimento tecnológico desenvolvido pelos estudantes para gerar impacto social na comunidade, especialmente na população idosa. A plataforma Plantibox busca promover bem-estar mental, estímulo cognitivo e redução da solidão por meio do cuidado com plantas, utilizando um aplicativo simples e acessível para orientar os usuários da terceira idade. Para ampliar esse impacto, o projeto prevê parceria com a Pastoral da Pessoa Idosa, organização que atua no apoio e acompanhamento de idosos no estado de São Paulo, possibilitando validar a solução com o público real, realizar testes de usabilidade e promover atividades educativas. Dessa forma, o projeto integra universidade e comunidade, utilizando a tecnologia como ferramenta de inclusão digital e promoção da qualidade de vida.

![WIREFRAME MOBILE](IMG_1398.jpeg)
![WIREFRAME DESKTOP](wireframe.jpeg)

~~~~
    <header>
        <a href="#">
            <img src="assets/logoplanticaixa.jpg" alt="Logo Ícone"> 
            <img src="assets/logoplantiescrito.jpg" alt="Logo PlantiBox">
        </a>

        <nav>
            <ul>
                <li><a href="#como-funciona">Como Funciona</a></li>
                <li><a href="#planos">Planos</a></li>
                <li><a href="#plantas">Nossas Plantas</a></li>
                <li><a href="#app">Nosso App</a></li>
                <li><a href="#planos">Assine Já</a></li>
            </ul>
        </nav>
    </header>
~~~~

Na header colocamos duas imagens para representar o ícone e uma imagem do Plantibox. Dentro do nav colocamos 5 links que redirecionam a diferentes abas. São elas: como funciona o site, nossos planos, nossas plantas, nosso aplicativo e o redirecionamento para fazer a assinatura.

~~~~
<main>
        <section>
            <h1>Reconecte-se com a natureza, uma planta por vez.</h1>
            <p>Receba mini-plantas em casa todo mês e transforme seu espaço em um refúgio verde. Cuidar de plantas nunca foi tão fácil e prazeroso.</p>
            <a href="#planos">Quero minhas plantas!</a>
        </section>

        <section id="como-funciona">
            <h2>Como funciona?</h2>
            <div>
                <h3>1. Escolha seu plano</h3>
                <p>Selecione o plano de assinatura que mais combina com seu espaço e sua rotina.</p>
            </div>
            <div>
                <h3>2. Receba sua caixa</h3>
                <p>Enviamos mensalmente uma caixa surpresa com mini-plantas saudáveis e cheias de vida.</p>
            </div>
            <div>
                <h3>3. Cuide com nosso app</h3>
                <p>Use nosso guia digital para aprender a cuidar, receber lembretes de rega e se conectar.</p>
            </div>
        </section>
~~~~

Abrimos uma tag main que mostrará a parte principal do site e começamos abrindo a primeira section incentivando o usuário a cuidar das suas plantas. Na mesma section colocamos um link que encaminha o usuário aos planos.
Na segunda section explicamos como funciona o site em 3 "div's" diferentes. Uma informando que você precisa selecionar a assinatura que mais gosta, uma informando sobre as caixas que enviaremos mensalmente e outra informando sobre o nosso app. Cada div será somente um "quadrado" com um texto informativo.
