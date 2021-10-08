import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/JoinChat';
import { Room } from './pages/Room';
import { HomePage } from './pages/HomePage';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/room/:name/">
                    <Room />
                </Route>
                <Route path="/join/">
                    <Home />
                </Route>
                <Route exact path="/">
                    <HomePage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
