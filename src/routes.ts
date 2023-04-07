import { Router } from 'express'
import { RoomController } from './controllers/RoomController'
import { SubjectController } from './controllers/SubjectController'
import { VideoController } from './controllers/VideoController'

const routes = Router()

routes.post('/subject', new SubjectController().create)
routes.post('/room', new RoomController().create)
routes.get('/room', new RoomController().list)
routes.post('/room/:idRoom/create', new VideoController().create)
routes.post('/room/:idRoom/subject', new RoomController().roomSubject)

export default routes