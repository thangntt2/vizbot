import { Server } from 'hapi'
import Inert from 'inert'
import Vision from 'vision'
import HapiSwagger from 'hapi-swagger'
import api from './api/swagger/swagger.yaml'

export async function main() {
  const server = new Server()
  server.connection({
    host: 'localhost',
    port: process.env.PORT || 8080,
  })

  await server.register([
    Inert,
    Vision,
    {
      register: HapiSwagger,
      options: api,
    }])

  await server.start()
  server.log('server', `Server is listening at: ${server.info.uri.toLowerCase()}`)

  return server
}
