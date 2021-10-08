import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Room } from './pages/Room';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/room/:name/">
                    <Room />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
