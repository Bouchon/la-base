import express from 'express'
import passport from 'passport'
import OAuth2Strategy from 'passport-oauth2'
import request from 'request'

const gitterHost = 'https://gitter.im'
const port = 3000
const clientId = 'c5a0f4fcd415f0bf84bce4ce414bf3da6864805f'
const clientSecret = '6efbdd8f76f54bbb42825d9af8e739dcda7905f7'
const router = new express.Router()
const gitter = {
    fetch: function(path, token, cb) {
        var options = { url: gitterHost + path, headers: { 'Authorization': 'Bearer ' + token } }  
        request(options, (err, res, body) => {
            if (err) return cb(err)
            if (res.statusCode === 200) {
                cb(null, JSON.parse(body))
            } else {
                cb('err' + res.statusCode)
            }
        })
    },  
    fetchCurrentUser: function(token, cb) {
        this.fetch('/api/v1/user/', token, (err, user) => { cb(err, user[0]) })
    },  
    fetchRooms: function(user, token, cb) {
        this.fetch('/api/v1/user/' + user.id + '/rooms', token, (err, rooms) => { cb(err, rooms) })
    }
}

passport.use(new OAuth2Strategy({
        authorizationURL:   gitterHost + '/login/oauth/authorize',
        tokenURL:           gitterHost + '/login/oauth/token',
        clientID:           clientId,
        clientSecret:       clientSecret,
        callbackURL:        '/login/callback',
        passReqToCallback:  true
    },
    function (req, accessToken, refreshToken, profile, done) {
        req.session.token = accessToken
        gitter.fetchCurrentUser(accessToken, (err, user) => { return (err ? done(err) : done(null, user)) })
    }
))
passport.serializeUser((user, done) => { done(null, JSON.stringify(user)) })
passport.deserializeUser((user, done) => { done(null, JSON.parse(user)) })

router.get('/login', passport.authenticate('oauth2'))
router.get('/login/callback', passport.authenticate('oauth2', { 
    successRedirect: 'http://localhost:3000/success',
    failureRedirect: 'http://localhost:3000/error'
}))
router.get('/logout', (req, res) => { 
    req.session.destroy()
    res.redirect('http://localhost:3000/error')
})


export default router
