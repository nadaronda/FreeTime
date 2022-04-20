import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { addEscalon } from '../../lib/Api'
import Añadir from '../botonMas'
const errorColor = '#ff4d4f'

const FlexForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  border: 1px solid black;
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background:  #CED3D4 ;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`

const CustomLabel = styled.span`
  margin: 4px 8px;
  color: #a1a1a1;
`

const CustomInput = styled.input`
  width: 200px;
  height: 32px;
  padding: 0px 16px;
  margin: 0 8px;
  border: 1px solid lightgray;
  border-radius: 4px;
  box-sizing: border-box;
`

const CustomBtn = styled.button` // estilo boton enviar
  width: 200px;
  height: 32px;
  margin: 0 8px;
  border: 0;
  border-radius: 4px;
  background-color: lightgreen;
  &:hover {
    background-color: #69d769;
  }
`

const CustomResetBtn = styled.button`
  width: 200px;
  height: 32px;
  margin: 0 8px;
  border: 0;
  border-radius: 4px;
  color: black;
  background-color: lightgray;
  &:hover {
    background-color: #bdbbbb;
  }
`

const ErrorMessageText = styled.p`
  font-size: 12px;
  margin: 4px 8px;
  color: #ff4d4f;
`
const NewEscalon = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()
  const onSubmit = handleSubmit(async (data) => {
    console.log(data)
    const objetivo = await addEscalon(data)
    console.log('su escalon se ha creado adecuadamente', objetivo)

    reset()
  })
  console.log(errors)

  return (
    <div>
      <h4>Formulario Escalones/microbjetivos</h4>

      <FlexForm onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Column>
            <label htmlFor = "escalón">Escalón:</label>
            <CustomInput
              type="text"
              placeholder="Nombre del escalón..."
              {...register('escalon', { required: true })}
            />
          </Column>

          <Column>
            <label htmlFor = "Descripción">Descripcion:</label>
            <CustomInput
              type="text"
              placeholder="Descripción ..."
              {...register('descripcion', { required: true })}
            />
          </Column>
          <Column>
            <label htmlFor = "timeImport">Fecha límite:</label>
            <CustomInput
              type="date"
              placeholder="timeImport"
              {...register('timeImport', { valueAsDate: true, required: true })}
            />
          </Column>
        </Row>

        <Row>
          <Column>
            <CustomBtn type="submit" >Enviar </CustomBtn>
           {/* <Añadir type="submit"/> */}
          </Column>
        </Row>
      </FlexForm>
    </div>
  )
}

export default NewEscalon
