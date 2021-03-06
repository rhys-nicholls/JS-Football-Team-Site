import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route} from 'react-router-dom';

import PrivateRoute from './Components/authRoutes/PrivateRoute';
import PublicRoute from './Components/authRoutes/PublicRoute';

import Home from './Components/Home';
import SignIn from './Components/signin';
import TheTeam from './Components/the_team';
import Matches from './Components/matches';

// Admin routes
import Dashboard from './Components/admin/Dashboard';
import AdminMatches from './Components/admin/matches';
import AddEditMatch from './Components/admin/matches/AddEditMatch';
import AdminPlayers from './Components/admin/players';
import AddEditPlayer from './Components/admin/players/AddEditPlayer';

const Routes = (props) => {
  return (
   <Layout>
     <Switch>
      <PrivateRoute {...props} path="/admin_players/add_player" exact component={AddEditPlayer}/>
      <PrivateRoute {...props} path="/admin_players/add_player/:id" exact component={AddEditPlayer}/>
      <PrivateRoute {...props} path="/admin_players" exact component={AdminPlayers}/>
      <PrivateRoute {...props} path="/admin_matches/edit_match/" exact component={AddEditMatch}/>
      <PrivateRoute {...props} path="/admin_matches/edit_match/:id" exact component={AddEditMatch}/>
      <PrivateRoute {...props} path="/admin_matches" exact component={AdminMatches}/>
      <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>
      <PublicRoute {...props} exact restricted={true} component={SignIn} path="/sign_in"/>
      <PublicRoute {...props} exact restricted={false} component={TheTeam} path="/the_team"/>
      <PublicRoute {...props} exact restricted={false} component={Matches} path="/the_matches"/>
      <PublicRoute {...props} exact restricted={false} component={Home} path="/"/>
     </Switch>
   </Layout>
  )
}

export default Routes;
