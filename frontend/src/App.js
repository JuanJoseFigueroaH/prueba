import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autenticacion/authState';
import PerfilState from './context/perfil/perfilState';
import RepositorioState from './context/repositorio/repositorioState';
import Dashboard from './components/dashboard/dashboard';
import RutaPrivada from './components/rutas/RutaPrivada';
import Perfil from './components/perfil/Perfil';
import Repositorios from './components/repositorio/Repositorio';
import tokenAuth from './config/token';
const token = localStorage.getItem('token');
if(token) {
  tokenAuth(token);
}

function App() {
  return (
    <RepositorioState>
      <PerfilState>
        <AlertaState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
                <RutaPrivada exact path="/dashboard" component={Dashboard} />
                <RutaPrivada exact path="/perfil" component={Perfil} />
                <RutaPrivada exact path="/repositorios" component={Repositorios} />
              </Switch>
            </Router>
          </AuthState>
        </AlertaState>
      </PerfilState>
    </RepositorioState>
  );
}

export default App;
