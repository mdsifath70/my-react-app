import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import '../styles/App.css';
import Layout from './Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Signup from './pages/Signup';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Layout>
                    <Switch>
                        <Route exact={true} path="/" component={Home} />
                        <PublicRoute exact={true} path="/my-react-app" component={Home} />
                        <PublicRoute exact={true} path="/signup" component={Signup} />
                        <PublicRoute exact={true} path="/login" component={Login} />
                        <PrivateRoute exact={true} path="/quiz" component={Quiz} />
                        <PrivateRoute exact={true} path="/result" component={Result} />
                    </Switch>
                </Layout>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
