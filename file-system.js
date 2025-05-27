const fs = require('fs');

// Écrire dans welcome.txt
fs.writeFileSync('welcome.txt', 'Hello Node', 'utf8');

// Lire depuis hello.txt (si le fichier existe déjà)
fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Erreur de lecture :', err);
    return;
  }
  console.log('Contenu de hello.txt :', data);
});
