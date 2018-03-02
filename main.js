const cleanDir = require('./');

const filter = file => file !== 'a';

cleanDir('./vincy', { filter })
  .then((files) => {
    console.log('files:', files);
  })
  .catch((err) => {
    console.log('err:', err);
  });

