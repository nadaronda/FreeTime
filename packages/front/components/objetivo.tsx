import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { getObjetivo } from '../lib/Api'

const errorColor = '#ff4d4f'

const FlexForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
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
const AllObjective = () => {
  const {
    watch,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()
  const onSubmit = handleSubmit(async (data) => {
    console.log(data)
    const objetivo = await getObjetivo(data)
    document.write('su objetivo se ha creado adecuadamente', data)

    reset()
  })
  console.log(errors)

  return (
    <div>

      <FlexForm onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Column>
            <label htmlFor = "Objetivo">Objetivo:</label>
            <CustomInput
              type="text"
              placeholder="Nombre del objetivo..."
              {...watch('objetivo', { required: true })}
            />
          </Column>

          <Column>
            <label htmlFor = "Descripción">Descripcion:</label>
            <CustomInput
              type="text"
              placeholder="Describe su objetivo..."
              {...watch('descripcion', { maxLength: 150 })}
            />
          </Column>
          <Column>
            <label htmlFor = "limitTime">Fecha límite:</label>
            <CustomInput
              type="date"
              placeholder="limitTime"
              {...watch('limitTime', { valueAsDate: true, required: true })}
            />
          </Column>
        </Row>

        <Row>
          <Column>
            <CustomBtn onClick={onSubmit} type="submit">Añadir</CustomBtn>
          </Column>
        </Row>
      </FlexForm>

    </div>

  )
}

export default AllObjective
