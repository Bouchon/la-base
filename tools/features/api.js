import express from 'express'
import qs from 'querystring'

const users = [{
  id: 0,
  logon: 'admin',
  password: 'admin',
  email: 'knoblauch.florian@gmail.com',
  firstName: 'Florian',
  lastName: 'Knoblauch'
}, {
  id: 1,
  logon: 'test',
  password: 'test',
  email: 'test@test.com',
  firstName: 'Foo',
  lastName: 'Bar'
}]

const router = new express.Router()
router.post('/sessions', (req, res) => {
  console.log(req.body)
  setTimeout(() => {
    const user = users.find(({ logon }) => logon === req.body.logon)

    if (user === undefined || user.password !== req.body.password) {
      res.status(401).json({ status: 'authentication failed' })
    } else {
      res.status(201).json({ status: 'authenticated' })
    }
  }, 500)
})

const oauthParams = {
  id: 'c5a0f4fcd415f0bf84bce4ce414bf3da6864805f',
  secret: '6efbdd8f76f54bbb42825d9af8e739dcda7905f7',
  host: 'https://gitter.im',
  tokenPath: '/login/oauth/token',
  authorizePath: '/login/oauth/authorize',
  redirect: 'http://localhost:3000/gitterCode',
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
  }
}

export default router
