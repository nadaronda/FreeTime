import { conectDB } from '../lib/db'
import { ObjetivoGeneral } from '../models/objetivoGeneral.model'
import { Escalon } from '../models/pasoIntermedio.model'
import { Categoria } from '../models/categoria.model'

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

  await close()
})()
