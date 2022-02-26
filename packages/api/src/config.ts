import dotenv from 'dotenv'

dotenv.config()
const checkEnv = (envVar: string) => {
  if (!process.env[envVar]) {
    throw new Error(`Please define the Enviroment variable ${envVar}`)
  } else {
    return process.env[envVar] as String
  }
}
export const PORT:number = (checkEnv('PORT'), 10)
export const DB_URL:any = process.env.DB_URL
