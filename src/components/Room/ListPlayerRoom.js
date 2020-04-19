import React from 'react';
import ListCardTable from './ListCardTable'

class ListPlayerRoom extends React.Component {

  render() {
    let players = this.props.players
    let turn = this.props.turn
    let listCardTable = Object.keys(players).map((key, i) =>
      <ListCardTable key={i} player={players[key]} turn={turn===key} />
    );
    return (
      <React.Fragment>
        {listCardTable}
      </React.Fragment>
    );
  }
}

export default ListPlayerRoom;
