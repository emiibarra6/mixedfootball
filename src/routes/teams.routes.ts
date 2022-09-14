import { Router } from 'express'
import { getAllTeams } from '../services/teams.services'
import { checkAuth } from '../middleware/authMiddleware'
const route = Router()

// Enviar todos los equipos.
route.get('/', (req, res) => {
  const teams = getAllTeams('asd')
})

route.post('/', checkAuth, (req, res) => {
  res.send('Registramos un equipo')
})

route.patch('/:id', checkAuth, (req, res) => {
  res.send('Editamos un equipo')
})

route.delete('/:id', checkAuth, (req, res) => {
  res.send('Borramos un equipo')
})

export default route
