import React from 'react'
import { Container } from 'react-bootstrap';
import firebase from '../util/firebase'
import ListPlayer from '../components/PreRoom/ListPlayer'
import LinkRoom from '../components/PreRoom/LinkRoom'
import JoinRoom from '../components/PreRoom/JoinRoom'
import EnterRoom from '../components/PreRoom/EnterRoom'

class PreRoom extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listPlayer: [],
      keyRoom: null,
      keyPlayer: null,
      player: null
    };
    this.onCreatePlayer = this.onCreatePlayer.bind(this);
    this.enterRoom = this.enterRoom.bind(this);
  }

  componentDidMount() {
    let keyRoom = this.props.match.params.room
    var playersRef = firebase.database().ref('/room/' + keyRoom + '/players');
    playersRef.on('value', (snapshot)=> {
      let keyPlayer = this.state.keyPlayer===null? this.props.match.params.player : this.state.keyPlayer
      let listPlayer = []
      snapshot.forEach((childSnapshot)=> {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        childData.key = childKey
        listPlayer.push(childData)
      });
      this.setState({
        listPlayer: listPlayer,
        keyRoom: keyRoom,
        keyPlayer: keyPlayer,
        player: snapshot.val()[keyPlayer]
      });
    });
  }

  componentWillUnmount() {
    let keyRoom = this.props.match.params.room
    var playersRef = firebase.database().ref('/room/' + keyRoom + '/players');
    playersRef.off()
  }

  onCreatePlayer(name) {    
    let keyRoom = this.state.keyRoom
    let keyPlayer = firebase.database().ref().child('room/'+ keyRoom + '/players').push().key
    let player = {name}
    firebase.database().ref('/room/' + keyRoom).once('value').then((snapshot) => {
      let room = snapshot.val();
      if(room.creator === undefined){
        firebase.database().ref('room/'+ keyRoom + '/players/' + keyPlayer).set(player);
        this.props.history.replace('/preroom/'+keyRoom+'/'+keyPlayer)
        this.setState({
          keyPlayer: keyPlayer
        });
      }
    });
  }

  enterRoom() {
    let keyRoom = this.state.keyRoom
    let keyPlayer = this.state.keyPlayer
    let player = this.state.player
    if(player!==undefined && player.creator!==undefined){
      firebase.database().ref('/room/' + keyRoom).once('value').then((snapshot) => {
        let room = snapshot.val();
        let deck = room.deck;
        if(room.creator === undefined){
          Object.keys(room.players).forEach((key)=>{
            let deckPlayer = [];

            deckPlayer.push(deck[0])
            deck.shift()
            deckPlayer.push(deck[0])
            deck.shift()
            deckPlayer.push(deck[0])
            deck.shift()

            room.players[key].deck = deckPlayer
          });

          room.creator = true
          
          firebase.database().ref('room/' + keyRoom).set(room);
        }
        this.props.history.push('/room/'+keyRoom+'/'+keyPlayer)
      });
    }else{
      this.props.history.push('/room/'+keyRoom+'/'+keyPlayer)
    }
    
  }

  render() {
    return (
      <Container fluid style={{paddingTop: '50px'}}>
        <LinkRoom keyRoom={this.props.match.params.room} keyPlayer={this.state.keyPlayer} />
        <ListPlayer list={this.state.listPlayer} />
        <JoinRoom keyPlayer={this.state.keyPlayer} 
        numberPlayer={this.state.listPlayer.length} 
        onCreatePlayer={this.onCreatePlayer} />
        <EnterRoom keyPlayer={this.state.keyPlayer} 
        numberPlayer={this.state.listPlayer.length}
        player={this.state.player}
        enterRoom={this.enterRoom} />
      </Container>
    );
  }
}

export default PreRoom;
