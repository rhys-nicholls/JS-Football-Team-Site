import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route} from 'react-router-dom';

import PrivateRoute from './Components/authRoutes/PrivateRoute';
import PublicRoute from './Components/authRoutes/PublicRoute';

import Home from './Components/Home';
import SignIn from './Components/signin';

// Admin routes
import Dashboard from './Components/admin/Dashboard';
import AdminMatches from './Components/admin/matches';
import AddEditMatch from './Components/admin/matches/AddEditMatch';

const Routes = (props) => {
  return (
   <Layout>
     <Switch>
     <PrivateRoute {...props} path="/admin_matches/edit_match/" exact component={AddEditMatch}/>
     <PrivateRoute {...props} path="/admin_matches/edit_match/:id" exact component={AddEditMatch}/>
      <PrivateRoute {...props} path="/admin_matches" exact component={AdminMatches}/>
      <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>
      <PublicRoute {...props} exact restricted={true} component={SignIn} path="/sign_in"/>
      <PublicRoute {...props} exact restricted={false} component={Home} path="/"/>
     </Switch>
   </Layout>
  )
}

export default Routes;
