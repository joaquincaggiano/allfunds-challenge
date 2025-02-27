import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import News from '../models/news';

// Ruta al archivo db.json
const dbJsonPath = path.join(__dirname, 'db.json');

// Cargar el contenido del archivo db.json
const data = JSON.parse(fs.readFileSync(dbJsonPath, 'utf-8'));

// URL de conexión a MongoDB
const uri = process.env.MONGO_URI;

async function run() {
  try {
    // Conectar a la base de datos
    await mongoose.connect(uri);

    // Iterar sobre las colecciones en el JSON
    for (const [collectionName, documents] of Object.entries(data)) {
      // Purga la colección (elimina todos los documentos)
      switch (collectionName) {
        case 'news':
          await News.deleteMany({});
          await News.insertMany(documents);
          break;
        default:
          console.warn(
            `Colección "${collectionName}" no tiene un modelo definido.`
          );
          continue;
      }

      console.log(
        `Colección "${collectionName}" purgada y sembrada con éxito.`
      );
    }
  } catch (error) {
    console.error('Error durante la ejecución del seed:', error);
  } finally {
    // Cerrar la conexión
    await mongoose.disconnect();
  }
}

run();
