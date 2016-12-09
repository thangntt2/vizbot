import Hapi from 'hapi'
import SwaggerHapi from 'swagger-hapi'

const server = new Hapi.Server()

const config = {
  appRoot: './src'
}

SwaggerHapi.create(config, (err, swaggerHapi) => {
  if (err) {
    throw err
  }

  const port = process.env.PORT || 8080
  server.connection({ port })
  server.address = () => ({ port })

  server.register(swaggerHapi.plugin, (err) => {
    if (err) {
      console.error('Failed to load plugin:', err)
      return
    }
    server.start(() => {
      if (err) {
        throw err
      }
      console.log(`Server dev running at: ${server.info.uri}`)
    })
  })
})