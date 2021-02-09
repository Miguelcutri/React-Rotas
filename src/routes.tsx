import { Route, Switch} from 'react-router-dom'
import Home from './pages/Home/Home'
import Contato from './pages/Contato/contato'
import Portifolio from './pages/Portifolio/portifolio'

function Routes() {
  return(
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contato" exact component={Contato}/>
      <Route path="/portifolio" exact component={Portifolio}/>
    </Switch>
  )
}

export default Routes