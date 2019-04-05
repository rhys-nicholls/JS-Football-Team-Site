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

import { firebaseMatches } from '../../../firebase';
import { firebaseLooper, reverseArray } from '../../ui/misc';

export default class AdminMatches extends Component {
  state = {
    isloading: true,
    matches: []
  };

  componentDidMount() {
    firebaseMatches.once('value').then(snapshot => {
      const matches = firebaseLooper(snapshot);
      this.setState({
        isloading: false,
        matches: reverseArray(matches)
      });
    });
  }

  createTableRow(match, i) {
    return (
      <TableRow key={i}>
        <TableCell>{match.date}</TableCell>
        <TableCell>
          <Link to={`/admin_matches/edit_match/${match.id}`}>
            {match.local} <strong>vs</strong> {match.away}
          </Link>
        </TableCell>
        <TableCell>
          {match.resultLocal} <strong>-</strong> {match.resultAway}
        </TableCell>
        <TableCell>
          {match.final === 'Yes' ? (
            <span className="matches_tag_green">Final</span>
          ) : (
            <span className="matches_tag_red"> Not played yet</span>
          )}
        </TableCell>
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
                  <TableCell>Date</TableCell>
                  <TableCell>Match</TableCell>
                  <TableCell>Result</TableCell>
                  <TableCell>Final</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.matches
                  ? this.state.matches.map((match, i) =>
                      this.createTableRow(match, i)
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
