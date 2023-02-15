/*
    PROMISES

    O javascript permite ter comportamento síncrono e assíncrono
    
    Síncrona: Espera a tarefa acabar para continuar com a próxima.
    
    Assíncrona: Parte para próxima tarefa antes da anterior terminar.
    A tarefa será executada e quando terminada será colocada em fila.

    Com o comportamento assíncrono, é possível carregar um site ou executar 
    uma aplicação enquanto alguma tarefa ainda não terminou.
    Este continua sendo executada 'Por baixo dos panos', enquanto que
    as outras não ficam travadas esperando ela terminar.

    As funçoes no JS são executadas na sequência em que são chamadas. Não na sequência
    em que são definidas

    O objeto promise representa a eventual conclusão(ou falha) de uma operação
    assíncrona e seu valor resultante.

    Estado de uma Promise:

    pending: estado inicial ou pendente.
    fulfilled ou resolved: operação concluída com sucesso.
    rejected: operação falhou.

    Promise é uma função construtora, e por isso, é um objeto
    que permite modelar o comportamento assíncrono do JS.
    Ela isntancia 'Promessas', ou seja, tarefas que podem levar um tempo
    maior para terminar em relação a outras.

    isto acontece em alguns casos como por ex:
    - temos que receber dados de alguma API;
    - Uma API precisa receber dados de outra API;
    - uma API faz uma requisição a um banco de dados;

    Enquanto não temos repostas para estas requisições, nosso
    software não precisa ter seu funcionamento travado. Nestes casos,
    temos uma promessa de que os dados requisitados chegarão.

    then()
    As promises têm um método chamado .then(). Ele permite que se 
    realize alguma tarefa após a promise ser resolvida será invocado
    quando a função for resolvida.

    reject()
    Caso a promise não seja resolvida por algum motivo, será invocado o 
    método reject.

    Finally()
    Será invocado independente do resultado da promise.

*/