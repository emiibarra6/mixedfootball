import { Router } from 'express'
import { getAllTeams } from '../services/teams.services'

const route = Router()

// Enviar todos los equipos.
route.get('/', (req, res) => {
  const teams = getAllTeams('asd')
})

route.post('/', (req, res) => {
  res.send('Registramos un equipo')
})

route.patch('/:id', (req, res) => {
  res.send('Editamos un equipo')
})

route.delete('/:id', (req, res) => {
  res.send('Borramos un equipo')
})

export default route
