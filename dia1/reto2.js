const fs = require('fs');

const user = {
  name: 'Pepe',
  surname: 'Perez',
  age: 40
};

fs.unlink('user.json', (err) => {
  if (err) throw err;
  console.log('El archivo ha sido borrado!');

  fs.writeFile('user.json', JSON.stringify(user), (err) => {
    if (err) throw err;
    console.log('el archivo ha sido guardado!');

    fs.readFile('user.json', (err, data) => {
      if (err) throw err;
      const user = JSON.parse(data);
      console.log(user);
    });
  });
});

