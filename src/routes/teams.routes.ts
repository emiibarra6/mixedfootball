import { Router } from 'express'
import { getAllTeams } from '../services/teams.services'
import { auth } from '../middleware/authMiddleware'
const route = Router()

// Enviar todos los equipos.
route.get('/', (req, res) => {
  const teams = getAllTeams('asd')
})

route.post('/', auth, (req, res) => {
  res.send('Registramos un equipo')
})

route.patch('/:id', auth, (req, res) => {
  res.send('Editamos un equipo')
})

route.delete('/:id', auth, (req, res) => {
  res.send('Borramos un equipo')
})

export default route
