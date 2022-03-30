import { conectDB } from '../lib/db'
import { ObjetivoGeneral } from '../models/objetivoGeneral.model'
import { Escalon } from '../models/pasoIntermedio.model'
import { Categoria } from '../models/categoria.model'

export type Categoria = {
  name:string;
 }
export const list: Array <Categoria> = [
  { name: 'burocrático' },
  { name: 'familiar' },
  { name: 'economico' }
];

(async () => {
  const { close } = await conectDB()
  try {
    await ObjetivoGeneral.collection.drop()
  } catch (error) {
    console.log('There are no objetive to drop from db')
  }
  try {
    await Escalon.collection.drop()
  } catch (error) {
    console.log('There are no pasos intermedios to drop from db')
  }
  try {
    await Categoria.collection.drop()
  } catch (error) {
    console.log('There are no pasos intermedios to drop from db')
  }

  // Aquí podría añadir categorias predefinidas

  for (let i = 0; i < list.length; i++) {
    const categoria = new Categoria({
      name: list[i].name
    })
    const doc = await categoria.save()
    console.log(`created categoria ${categoria.name} whit objectId ${doc._id}`)
  };

  await close()
})()
