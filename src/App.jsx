import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link

} from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
    return (
        <div>
            <h1>App</h1>
            <Router>

                <Switch>
                    <Route exact path="/">
                        <WelcomePage></WelcomePage>
                    </Route>
                    <Route path="/main">
                        <MainPage></MainPage>
                    </Route>
                    <Route path="/city">
                        <CityPage></CityPage>
                    </Route>
                    <Route>
                      <NotFoundPage></NotFoundPage>
                    </Route>
                </Switch>

            </Router>
        </div>
    )
}

export default App
