import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { MoviesList, MoviesInsert, MoviesUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/spotifies/list" exact component={SpotifiesList} />
                <Route path="/spotifies/create" exact component={SpotifiesInsert} />
                <Route
                    path="/spotifies/update/:id"
                    exact
                    component={SpotifiesUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App
