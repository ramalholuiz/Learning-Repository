# Exercícios de Fixação

1. Segundo Frederick Brooks, desenvolvimento de software enfrenta dificuldades essenciais (para as quais não há bala de prata) e acidentais (para as quais existe uma solução melhor). Dê um exemplo de dificuldade acidental que já tenha experimentado ao desenvolver programas, mesmo que pequenos. Sugestão: elas podem estar relacionadas a ferramentas que tenha usado, como compiladores, IDEs, bancos de dados, sistemas operacionais, etc.

-   Resposta: <span style="color:red">Já enfrentei dificuldades relacionadas ao uso de ferramentas de gerenciamento de pacotes (npm com node) no momento de subir código para produção.<span>

2. Diferencie requisitos funcionais de requisitos não-funcionais.

-   Resposta:
    <div style="color:red">
    <ul>
    <li>Requisitos funcionais: são inerentes ao funcionamento do programa, definindo o que o sistema deve fazer. Ex.: Sistema escolar: informar nota dos alunos, cadastrar professores, entre outros.</li>
    <li>Requisitos não-funcionais: definem como o sistema deve operar. Ex.: Sistema de aeronave: responder comandos em menos de 1 segundo, ser capaz de registrar 1 milhão de dados a cada vôo.</li>
    </ul>
    <div>

3. Explique por que testes podem ser considerados tanto uma atividade de verificação como de validação de software. Qual tipo de teste é mais adequado se o objetivo for verificação? Qual tipo de teste é mais adequado se o objetivo for validar um sistema de software?

-   Resposta:
    <span style="color:red">
    <ul>
    <li>Verificação: verifica se o sistema foi implementado de acordo com os requisitos. Testes de unidade, integração e performance são adequados para verificação de requisitos.</li>
    <li>Validação: atesta se o sistema foi implementado de forma correnta, isto é, se atende às expectativas do cliente/mercado. Testes de usabilidade são bem impregados nesta área.</li>
    </ul>
    <span>

4. Por que testes não conseguem provar a ausência de bugs?

-   Resposta: <span style="color:red">O fato de um teste não encontrar bugs, não conclui que não existam bugs no software, apenas que aquele teste em específico não encontrou nenhum bug.<span>

5. Suponha um programa que tenha uma única entrada: um inteiro de 64 bits. Em um teste exaustivo, temos que testar esse programa com todos os possíveis inteiros (logo, 2^64). Se cada teste levar 1 nanossegundo (10-9 segundos), quanto tempo levará esse teste exaustivo?

-   Resposta: <span style="color:red">2^64 x 10^-9 = 1,84x10^19 segundos</span>

6. Se considerarmos o contexto histórico, por que foi natural que os primeiros processos de desenvolvimento de software tivessem características sequenciais e fossem baseados em planejamento e documentação detalhados?

-   Resposta: <span style="color:red">Os primeiros processos de desenvolvimento de software tinham estas características (planejamento e documentação detalhados) por serem derivados dos processos das engenharias clássicas (civil, elétrica, mecânica, etc.), que se baseiam em planejamento e projeto preciso antes da execução, além de utilizarem métodos em cascata</span>

7. Alguns estudos mostram que os custos com manutenção e evolução podem alcançar 80% ou mais dos custos totais alocados a um sistema de software, durante todo o seu ciclo de vida. Explique por que esse valor é tão alto.

-   Resposta: <span style="color:red">São diversos os tipos de manutençãoem software, tais como corretiva, preventiva, adaptativa, refactoring e evolutiva, sendo necessários para que haja bom funcionamento e continuidade de serviço, elevando bastante os custos.</span>

8. Refactoring é uma transformação de código que preserva comportamento. Qual o significado da expressão preservar comportamento? Na prática, qual restrição ela impõe a uma operação de refactoring?

-   Resposta: <span style="color:red">Preservar o comportamento significa manter o objetivo de cada parte do código. Quando levamos este conceito para POO, o entendimento é mais simples, pois as classes não devem perder suas características. O objetivo do refactoring é tornar o código mais legível e mais manitenível, sem prejudicar seu funcionamento/comportamento.</span>

9. Dê exemplos de sistemas A (Acute, ou críticos) e B (Business, ou comerciais) com os quais já tenha interagido.

-   Resposta:
    </span>
    <span style="color:red">
    <ul>
    <li>A: sistemas hospitalares, sistemas de aviação</li>
    <li>B: websites coorporativos</li>
    <li>C: programa para elaboração de listas de tarefas</li>
    </ul>
    </span>

10. Dê exemplos de sistemas C (casuais) que você já tenha desenvolvido.

-   Resposta:
    <span style="color:red">
    <ul>
    <li>elaboração de lista de tarefas</li>
    <li>controle de ponto</li>
    <li>caixinha de sugestões</li>
    </ul>
    </span>

11. Em 2015, descobriu-se que o software instalado em mais de 11 milhões de carros da Volkswagen detectava quando eles estavam sendo testados em um laboratório de certificação. Nessas situações, o carro emitia poluentes dentro das normas legais. Fora do laboratório, emitia-se mais poluentes, para melhorar o desempenho. Ou seja, o código incluía uma estrutura de decisão como a seguinte (meramente ilustrativa, para fins deste exercício):

```
if "Carro sendo testado em um laboratório"
"Emita poluentes dentro das normas"
else
"Emita poluentes fora das normas"
```

O que você faria se seu chefe pedisse para escrever um if como o acima? Para mais informações sobre esse episódio, consulte [essa](https://en.wikipedia.org/wiki/Volkswagen_emissions_scandal) página da Wikipedia.

-   Resposta: <span style="color:red">Decisão difícil... Questionaria o meu chefe, e se possível, pediria para que esta tarefa não fosse alocada para mim.</span>
