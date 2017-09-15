import express from 'express'
import simpleOauthModule from 'simple-oauth2'
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

// oauth2
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
const oauth2 = simpleOauthModule.create({
  client: {
    id: 'efbb6db1cb8d0b21b46a',
    secret: '7eab121f4a350d4c8ad774cef19fc3fc34316d6f'
  },
  auth: {
    tokenHost: 'https://github.com',
    tokenPath: '/login/oauth/access_token',
    authorizePath: '/login/oauth/authorize'
  }
})
const authorizationUri = oauth2.authorizationCode.authorizeURL({
  redirect_uri: 'http://localhost:3000/api/v1/callback',
  scope: 'notifications',
  state: '3(#0!~'
})
router.get('/auth', (req, res) => {
  console.log(authorizationUri)
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.status(200).redirect(authorizationUri)
})
router.get('/callback', (req, res) => {
  console.log('callback!')
  const code = req.query.code
  const options = { code }
  oauth2.authorizationCode.getToken(options, (error, result) => {
    if (error) {
      console.error('Access Token Error', error.message)
      return res.json('Authentication failed')
    } else {
      console.log('The resulting token', result)
      return res.status(200).json(token)
    }
  })  
})
router.get('/success', (req, res) => {
  console.log('success')
  res.send('')
})

export default router
