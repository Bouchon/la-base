import express from 'express'

const router = new express.Router()
router.post('/sessions', (req, res) => {
  setTimeout(() => {
    if (req.body.password === 'admin') {
      res.status(201).json({ status: 'authenticated' })
    } else {
      res.status(401).json({ status: 'authentication failed' })
    }
  }, 500)
})

export default router
