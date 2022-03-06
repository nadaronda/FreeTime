
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
  /*
  const categ = [{ name: 'economico' }, { name: 'burocratico' }, { name: 'familiar' },
    { name: 'sentimental' }, { name: 'otros' }]
  await Promise.all(categ.map(async (name) => {
    await Categoria.create({ name: Object.keys(name)[0] }).then((e) => console.log(`🍊Create categoria ${e.name}`))
  })) */ // no me funciona

  await close()
})()
