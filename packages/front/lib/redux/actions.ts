import { addObjetivo, deleteObjetivo, getObjetivo } from '../api'
// Redux action generator
// ACTION: Add item to local store
export const addItem = (objetivo) => {
  console.log('Adding Objetivo')
  return {
    type: 'ADDITEM',
    objetivo
  }
}

export const deleteAll = () => {
  console.log('Removien all items')
  return {
    type: 'DELETEALL'
  }
}

export const saveOnServer = (objetivo) => {
  console.log('Saving on server...')
  return async (dispatch) => {
    const saveObj = await addObjetivo(objetivo)
    dispatch(addItem(saveObj))
  }
}

// THUNK: request API ingredients, Dispatch deleteAll() action,
// dispatch one addItem action for each ingredient recived by the API
export const refreshServerObjetivos = () => async (dispatch) => {
  const objetivo = await getObjetivo()
  dispatch(deleteAll())
  console.log('objetivo', objetivo)
  objetivo.forEach((objetivo) => dispatch(addItem(objetivo)))
}

// THUNK: delete ingredient on server via API call and refresh
// local visualization by bruteforce get all ingredients
// aNote: this can be improve by removing the local deleted ingredient
//  without requesting a refresh
export const deleteOneObjetivo = (_id:string) => async (dispatch) => {
  await deleteObjetivo(_id)
  dispatch(refreshServerObjetivos)
}
