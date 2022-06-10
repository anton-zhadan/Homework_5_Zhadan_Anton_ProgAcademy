// Створити об'єкт "Документ", в якому Визначити властивості "Заголовок, тіло, футер, дата". 
// Створити в об'єкті вкладений об'єкт- "додаток". Створити в об'єкті "додаток", вкладені об'єкти,"Заголовок, тіло, футер, дата". 
// Створити методи для заповнення і відображення документа.

const doc = {

    header: '',
    body: '',
    footer: '',
    date: '',
  
    program: {
        
        header: {
          name: '',
        },
  
        body: {
          name: '',
        },
  
        footer: {
          name: '',
        },
  
        date: {
          name: '',
        },
    },
  
    enterParDoc: function() {
      this.header = 'Objects in JS';
      this.body = 'What are objects and how to use them?';
      this.footer = 'Author of the article';
      this.date = '10.06.2022';
    },
  
    enterParDocOutput: function() {
      document.write(`Заголовок документа - "${this.header}"`);
      document.write(`<br> Тіло документа - "${this.body}"`);
      document.write(`<br> Нижній колонтитул документа - "${this.footer}"`);
      document.write(`<br> Дата документа - "${this.date}"`);
    },
  
    enterParProgram: function() {
      this.program.header.name = 'VS Code';
      this.program.body.name = 'Lets go!';
      this.program.footer.name = 'Panel with information';
      this.program.date.name = '10.06.2022';
    },
  
    enterParProgramOutput: function() {
      document.write(`<br>`);
      document.write(`<br> Назва програми - "${this.program.header.name}"`);
      document.write(`<br> Тіло програми - "${this.program.body.name}"`);
      document.write(`<br> Нижній колонтитул програми - "${this.program.footer.name}"`);
      document.write(`<br> Дата програми - "${this.program.date.name}"`);
    },
  }
  
doc.enterParDoc();
doc.enterParDocOutput();
  
doc.enterParProgram();
doc.enterParProgramOutput();