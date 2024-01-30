const fs = require('fs');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let user;

reader.question('Introduce tu nombre: ', (nombre) => {
  user = {
    nombre,
  };

  reader.question('Introduce tu apellido: ', (apellido) => {
    user.apellido = apellido;

    reader.question('Introduce tu edad: ', (edad) => {
      user.edad = edad;

      // Escribimos el objeto en el archivo solo si existe
      if (fs.existsSync('user.json')) {
        fs.writeFile('user.json', JSON.stringify(user), (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log('Archivo actualizado correctamente');
            console.log(user); 
          }
        });
      // } else {
      //   // Creamos el archivo si no existe
      //   fs.writeFile('user.json', JSON.stringify(user), (err) => {
      //     if (err) {
      //       console.error(err);
      //     } else {
      //       console.log('Archivo creado correctamente'); 
      //     }
      //   });
        
      }

      reader.close();
    });
  });
});

