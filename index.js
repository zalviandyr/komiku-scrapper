require('module-alias/register')
const { Route } = require('cores/Route')
const { app } = require('./app')

class App extends Route {
    init() {
        const port = process.env.PORT || 4000

        // register router
        app.use('/', super.init())
        app.use((req, res) => {
            res.status(404).send("Sorry can't find that!")
        })

        app.listen(port, () => {
            console.log(`Server running on port ${port}`)
        })
    }
}

new App().init()
