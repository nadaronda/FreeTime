import { conectDB } from '../lib/db';
import { objetivoGeneral } from '../models/objetivoGeneral.model';
import { escalon } from '../models/pasoIntermedio.model';

(async () => {
    const { close } = await conectDB();
    try {
      await objetivoGeneral.collection.drop();
    } catch (error) {
      console.log('There are no objetive to drop from db');
    }
    try {
        await escalon.collection.drop();
      } catch (error) {
        console.log('There are no pasos intermedios to drop from db');
      }
  
    /*const recipe = [{ apples: '1kg' }, { flour: '2cups' }, { butter: '3spoons' }, { eggs: '6uds' }, { milk: '1l' }];
  
    await Promise.all(recipe.map(async (ing) => {
      await Ingredient.create({ name: Object.keys(ing)[0], quantity: Object.values(ing)[0] }).then((e) => console.log(`🍊Create ingredient ${e.name}`));
    }));*/
  
    await close();
  })();