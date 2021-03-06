import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './context/auth';
import { Home } from './pages/JoinChat';
import { Room } from './pages/Room';
import { HomePage } from './pages/HomePage';
import { Dashboard } from './pages/Dashboard';
import { theme } from './theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <Router>
                    <Switch>
                        <Route path="/dashboard/">
                            <Dashboard />
                        </Route>
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
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;
