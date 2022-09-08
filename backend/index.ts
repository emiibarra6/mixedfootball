import express, { Application, json } from 'express'
import teams from './routes/teams.routes'
import dotenv from 'dotenv'

const app: Application = express()
app.use(json())
dotenv.config()

const PORT = process.env.PORT

// --------- START ROUTES ---------- //
app.use('/api/v1/teams', teams)
// --------- END ROUTES ---------- //

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})
