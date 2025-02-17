const { html } = require("common-tags");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "sawbdj",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,//“video”: definimos a gravação em vídeo do teste para posterior playback.
    reporter: 'mochawesome',
    //“reporter”: essa propriedade define o padrão de geração de relatórios. 
    // Configurando como padrão no arquivo cypress.config.js, sempre que o comando npx cypress run for disparado, 
    // o tipo de relatório gerado será do Mochawesome, mesmo que não seja incluído a opção --reporter mochawesome.
    reporterOptions: {
      reportDir: 'cypress/results',//“reportDir”: diretório padrão onde serão gerados os relatórios.
      overwrite: false,//“overwrite”: caso não se inclua um timestamp, 
      // o relatório padrão é gerado com o nome mochawesome.json ou mochawesome.html. Para esses casos, definimos se o relatório será sobrescrito ou não.
      html: true,//“html”: passamos o parâmetro true ou false para indicar se o relatório será gerado em formato HTML.
      json: false,//“json”: passamos o parâmetro true ou false para indicar se o relatório será gerado em formato HTML.
      timestamp: "mmddyyyy_HHMMss" }//“timestamp”: formato de apresentação do relatório com relação à data e hora.
      //Ainda há outras configurações:
      //“charts”: dá a possibilidade de gerar gráficos quando unificamos os resultados.
      // “code”: mostra exatamente qual o código foi executado tanto na falha quanto no sucesso.
      // “reportTitle”: o título a ser apresentado no relatório.
  },
});
