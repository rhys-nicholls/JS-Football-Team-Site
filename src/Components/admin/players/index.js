import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../../Hoc/AdminLayout';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  CircularProgress
} from '@material-ui/core';

import { firebasePlayers } from '../../../firebase';
import { firebaseLooper, reverseArray } from '../../ui/misc';

export default class AdminPlayers extends Component {
  state = {
    isLoading: true,
    players: []
  };

  componentDidMount() {
    firebasePlayers.once('value').then(snapshot => {
      const players = firebaseLooper(snapshot);

      this.setState({
        isLoading: false,
        players: reverseArray(players)
      });
    });
  }

  createTableRow(player, i) {
    return (
      <TableRow key={i}>
        <TableCell>
          <Link to={`/admin_players/add_player/${player.id}`}>
            {player.name}
          </Link>
        </TableCell>
        <TableCell>
          <Link to={`/admin_players/add_player/${player.id}`}>
            {player.lastname}
          </Link>
        </TableCell>
        <TableCell>{player.number} </TableCell>
        <TableCell>{player.position}</TableCell>
      </TableRow>
    );
  }

  render() {
    return (
      <AdminLayout>
        <div>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>First name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Number</TableCell>
                  <TableCell>Position</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.players
                  ? this.state.players.map((player, i) =>
                      this.createTableRow(player, i)
                    )
                  : null}
              </TableBody>
            </Table>
          </Paper>
        </div>
        <div className="admin_progress">
          {this.state.isloading ? (
            <CircularProgress
              thickness={5}
              style={{
                color: '#98c5e9'
              }}
            />
          ) : null}
        </div>
      </AdminLayout>
    );
  }
}
