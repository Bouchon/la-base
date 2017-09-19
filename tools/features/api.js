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

export default router
