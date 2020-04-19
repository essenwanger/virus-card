import React from 'react'
import { Container } from 'react-bootstrap';
import { updateGame, tirarGuante } from '../logic/logicVirus'
import firebase from '../util/firebase'
import ListCardDeck from '../components/Room/ListCardDeck'
import ModalAlert from '../components/Room/ModalAlert'
import ModalMedicinaVirus from '../components/Room/ModalMedicinaVirus'
import ModalContagio from '../components/Room/ModalContagio'
import ModalLadron from '../components/Room/ModalLadron'
import ModalTransplante from '../components/Room/ModalTransplante'
import ModalError from '../components/Room/ModalError'
import WinnerRoom from '../components/Room/WinnerRoom'
import WarningRoom from '../components/Room/WarningRoom'
import ListPlayerRoom from '../components/Room/ListPlayerRoom'

class Room extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      keyRoom: null,
      keyPlayer: null,
      room: null,
      showModalAlert: false,
      selectDeckCard: null,
      showModalMedicinaVirus: false,
      listMedicinaVirus: [],
      showModalContagio: false, 
      listContagio: [],
      showModalLadron: false,
      listLadron: [],
      showModalTransplante: false,
      listTransplante: [],
      showModalError: false, 
      listError: []
    };
    this.onPressVisualizar = this.onPressVisualizar.bind(this);
    this.onPressDescartar = this.onPressDescartar.bind(this);
    this.onPressTirar = this.onPressTirar.bind(this);
  }

  componentDidMount() {
    this.onPressVisualizar()
  }

  componentWillUnmount() {
    let key = this.props.match.params.room
    firebase.database().ref('/room/' + key).off()
  }

  onPressVisualizar(){
    let key = this.props.match.params.room
    let keyPlayer = this.props.match.params.player
    var roomRef = firebase.database().ref('/room/' + key);
    roomRef.on('value', (snapshot)=> {
      let room = snapshot.val();
      this.setState({
        keyRoom: key,
        keyPlayer: keyPlayer,
        room: room,
        showModalAlert: false,
        selectDeckCard: null,
        showModalMedicinaVirus: false,
        listMedicinaVirus: [],
        showModalContagio: false, 
        listContagio: [],
        showModalLadron: false,
        listLadron: [],
        showModalTransplante: false,
        listTransplante: [],
        showModalError: false, 
        listError: []
      });
    });
  }

  onPressDescartar(player, descartar1, descartar2, descartar3){
    let deck = [];
    let descartar = [];
    if(descartar1){
      descartar.push(this.state.room.players[player].deck[0])
    }else{
      deck.push(this.state.room.players[player].deck[0])
    }
    if(descartar2){
      descartar.push(this.state.room.players[player].deck[1])
    }else{
      deck.push(this.state.room.players[player].deck[1])
    }
    if(descartar3){
      descartar.push(this.state.room.players[player].deck[2])
    }else{
      deck.push(this.state.room.players[player].deck[2])
    }
    let key = this.state.keyRoom
    let room = this.state.room
    let deckRoom = room.deck
    descartar.forEach(function (card, i) {
       deckRoom.push(card) 
    });
    while(deck.length!==3){
      deck.push(deckRoom[0])
      deckRoom.shift()
    }
    room.players[player].deck = deck
    updateGame(key, room)
  }

  onPressTirar(selectDeckCard){
    let selectCard = selectDeckCard.card
    let tipoCard = selectCard.valor.split('-')[0]
    if(tipoCard==='organo'){
      this.tirarOrgano(selectDeckCard)
    }
    if(tipoCard==='medicina' || tipoCard==='virus'){
      this.tirarMedicinaVirus(selectDeckCard)
    }
    if(tipoCard==='contagio'){
      this.tirarContagio(selectDeckCard)
    }
    if(tipoCard==='ladron'){
      this.tirarLadron(selectDeckCard)
    }
    if(tipoCard==='transplante'){
      this.tirarTransplante(selectDeckCard)
    }
    if(tipoCard==='guante'){
      let keyRoom = this.state.keyRoom
      let room = this.state.room
      tirarGuante(selectDeckCard, keyRoom, room)
    }
    if(tipoCard==='error'){
      this.tirarError(selectDeckCard)
    }
  }

  tirarOrgano(selectDeckCard){
    let player = selectDeckCard.player
    let selectCard = selectDeckCard.card
    let colorCard = selectCard.valor.split('-')[1]
    let pos = selectDeckCard.pos
    let key = this.state.keyRoom
    let room = this.state.room
    let deckRoom = room.deck
    let table = room.players[player].table
    if(table === undefined){
      table = []
      table.push({organo: selectCard})
      let deckPlayer = room.players[player].deck
      deckPlayer.splice(pos, 1)
      deckPlayer.push(deckRoom[0])
      deckRoom.shift()
      room.players[player].table = table
      updateGame(key, room)
    }else{
      let exist = false
      table.forEach((card)=>{
        if(card.organo.valor.split('-')[1]===colorCard){
          exist = true
        }
      });
      if(exist){
        this.setState({showModalAlert: true, messageModal: 'El organo ya existe'})
      }else{
        table.push({organo: selectCard})
        let deckPlayer = room.players[player].deck
        deckPlayer.splice(pos, 1)
        deckPlayer.push(deckRoom[0])
        deckRoom.shift()
        room.players[player].table = table
        updateGame(key, room)
      }
    }
  }

  tirarMedicinaVirus(selectDeckCard){
    let selectCard = selectDeckCard.card
    let colorCard = selectCard.valor.split('-')[1]
    let room = this.state.room
    let listMedicinaVirus = []
    Object.keys(room.players).forEach((key)=>{
      let table = room.players[key].table
      if(table !== undefined){
        table.forEach((groupCard, i)=>{
          if((groupCard.organo.valor.split('-')[1] === colorCard || 
            colorCard === 'jocker' || 
            groupCard.organo.valor.split('-')[1] === 'jocker') && 
            groupCard.item2 === undefined){
            listMedicinaVirus.push({
              player: key,
              organo: groupCard.organo,
              pos: i,
              name: room.players[key].name
            })
          }
        });
      }
    });
    this.setState({
      showModalMedicinaVirus: true, 
      listMedicinaVirus: listMedicinaVirus, 
      selectDeckCard: selectDeckCard
    })
  }

  tirarContagio(selectDeckCard){
    let room = this.state.room
    let listContagio = []
    let tableA = room.players[selectDeckCard.player].table
    if(tableA !== undefined){
      tableA.forEach((cardA, i)=>{
        if(cardA.item1 !== undefined && cardA.item2 === undefined){
          Object.keys(room.players).forEach((key)=>{
            if(room.players[key].table !== undefined && key !== (selectDeckCard.player)){
              room.players[key].table.forEach((cardB, iB)=>{
                if(cardB.item1 === undefined){
                  let colorCardA = cardA.item1.valor.split('-')[1]
                  let tipoCardA = cardA.item1.valor.split('-')[0]
                  let colorCardB = cardB.organo.valor.split('-')[1]
                  if(tipoCardA === 'virus'){
                    if(colorCardA === colorCardB || colorCardB === 'jocker' || colorCardA === 'jocker'){
                      listContagio.push({
                        tableA: {
                          tableCard: cardA,
                          pos: i,
                          player: selectDeckCard.player
                        },
                        tableB: {
                          tableCard: cardB,
                          pos: iB,
                          player: key,
                          name: room.players[key].name
                        },
                        disabled: false,
                        checked: false
                      })
                    }
                  }
                }
              })
            }
          })
        }
      })
    }
    this.setState({
      showModalContagio: true, 
      listContagio: listContagio, 
      selectDeckCard: selectDeckCard
    })
  }

  tirarLadron(selectDeckCard) {
    let room = this.state.room
    let listLadron = []
    let tableA = room.players[selectDeckCard.player].table
    Object.keys(room.players).forEach((key)=>{
      if(room.players[key].table !== undefined && key !== (selectDeckCard.player)){
        room.players[key].table.forEach((cardB, i)=>{
          if(cardB.item2 === undefined){
            let exist = false 
            if(tableA !== undefined){
              tableA.forEach((cardA)=>{
                let colorCardA = cardA.organo.valor.split('-')[1]
                let colorCardB = cardB.organo.valor.split('-')[1]
                if(colorCardA === colorCardB){
                  exist = true
                }
              })
            }
            if(!exist){
              listLadron.push({
                player: key,
                organo: cardB.organo,
                pos: i,
                name: room.players[key].name
              })
            }
          }
        })
      }
    });
    this.setState({
      showModalLadron: true, 
      listLadron: listLadron,
      selectDeckCard: selectDeckCard
    })
  }

  tirarTransplante(selectDeckCard) {
    let room = this.state.room
    let listTransplante = []
    let tableA = room.players[selectDeckCard.player].table
    if(tableA !== undefined){
      tableA.forEach((cardA, i2)=>{
        Object.keys(room.players).forEach((key)=>{
          if(room.players[key].table !== undefined && key !== (selectDeckCard.player)){
            room.players[key].table.forEach((cardB, i)=>{
              if(cardB.item2 === undefined){
                let colorCardA = cardA.organo.valor.split('-')[1]
                let colorCardB = cardB.organo.valor.split('-')[1]
                if(cardA.item2 === undefined && colorCardA === colorCardB){
                  listTransplante.push({
                    tableA: {
                      tableCard: cardA,
                      pos: i2,
                      player: selectDeckCard.player
                    },
                    tableB: {
                      tableCard: cardB,
                      pos: i,
                      player: key,
                      name: room.players[key].name
                    }
                  })
                }
              }
            })
          }
        });
      })
    }
    this.setState({
      showModalTransplante: true, 
      listTransplante: listTransplante,
      selectDeckCard: selectDeckCard
    })
  }

  tirarError(selectDeckCard){
    let room = this.state.room
    let listError = []
    Object.keys(room.players).forEach((key)=>{
      if(room.players[key].table !== undefined && key !== (selectDeckCard.player)){
        listError.push({
          key: key,
          name: room.players[key].name
        });
      }
    });
    this.setState({
      showModalError: true, 
      listError: listError,
      selectDeckCard: selectDeckCard
    })
  }

  render() {
    return (
      <Container fluid>
        {(this.state.room===null || this.state.room.creator === undefined) ? 
        (
          <WarningRoom />
        ) : (
          <React.Fragment>
        
            <WinnerRoom keyRoom={this.state.keyRoom} 
            room={this.state.room} keyPlayer={this.state.keyPlayer}/>

            <ListPlayerRoom players={this.state.room.players} turn={this.state.room.turn} />

            <ListCardDeck room={this.state.room} keyPlayer={this.state.keyPlayer}
            onPressTirar={this.onPressTirar} onPressDescartar={this.onPressDescartar} />

            <ModalAlert show={this.state.showModalAlert} 
            messageModal={this.state.messageModal}
            close={()=>this.setState({showModalAlert: false})} />

            <ModalMedicinaVirus show={this.state.showModalMedicinaVirus} 
            keyRoom={this.state.keyRoom}
            room={this.state.room}
            selectDeckCard={this.state.selectDeckCard}
            listMedicinaVirus={this.state.listMedicinaVirus}
            close={()=>this.setState({showModalMedicinaVirus: false})} />

            <ModalContagio show={this.state.showModalContagio} 
            keyRoom={this.state.keyRoom}
            room={this.state.room}
            selectDeckCard={this.state.selectDeckCard}
            listContagio={this.state.listContagio}
            close={()=>this.setState({showModalContagio: false})} />

            <ModalLadron show={this.state.showModalLadron} 
            keyRoom={this.state.keyRoom}
            room={this.state.room}
            selectDeckCard={this.state.selectDeckCard}
            listLadron={this.state.listLadron}
            close={()=>this.setState({showModalLadron: false})} />

            <ModalTransplante show={this.state.showModalTransplante} 
            keyRoom={this.state.keyRoom}
            room={this.state.room}
            selectDeckCard={this.state.selectDeckCard}
            listTransplante={this.state.listTransplante}
            close={()=>this.setState({showModalTransplante: false})} />

            <ModalError show={this.state.showModalError} 
            keyRoom={this.state.keyRoom}
            room={this.state.room}
            selectDeckCard={this.state.selectDeckCard}
            listError={this.state.listError}
            close={()=>this.setState({showModalError: false})} />

          </React.Fragment>)
        }
        
      </Container>
    );
  }
}

export default Room;
