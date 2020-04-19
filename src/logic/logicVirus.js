import firebase from '../util/firebase'

export function updateGame(key, room) {
  let table = room.players[room.turn].table
  let totalOrgan = 0
	if(table !== undefined){
		table.forEach((card)=>{
      if(card.item1 === undefined || card.item1 === null || 
      	(card.item1 !== undefined && card.item1.valor.split('-')[0] === 'medicina')){
      		totalOrgan++
      }
    });
	}
	if(totalOrgan > 3){
		let turn = room.turn
		room.winner = turn
    if(room.players[room.winner].win === undefined){
      room.players[room.winner].win = 1
    }else{
      room.players[room.winner].win = room.players[room.winner].win + 1
    }
	}
  let numberPlayer = Object.keys(room.players).length
  let iPlayer = 0
  Object.keys(room.players).forEach((key, i)=>{
    if(room.turn === key){
      iPlayer=i
    }
  })
  iPlayer++
  if(numberPlayer === iPlayer){
    room.turn = Object.keys(room.players)[0]
  }else{
    room.turn = Object.keys(room.players)[iPlayer]
  }
  firebase.database().ref('room/' + key).set(room);
}

export function shuffleArray(arr) {
  return arr.map(a => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map(a => a[1])
}

export function tirarGuante(selectDeckCard, keyRoom, room) {
  let deckRoom = room.deck
  deckRoom.push(selectDeckCard.card)
  let deckPlayer = room.players[selectDeckCard.player].deck
  deckPlayer.splice(selectDeckCard.pos, 1)
  deckPlayer.push(deckRoom[0])
  deckRoom.shift()
  Object.keys(room.players).forEach((key)=>{
    if(room.players[key].table !== undefined && key !== (selectDeckCard.player)){
      let deckPlayerB = room.players[key].deck
      deckRoom.push(deckPlayerB[0])
      deckRoom.push(deckPlayerB[1])
      deckRoom.push(deckPlayerB[2])
      deckPlayerB.shift()
      deckPlayerB.shift()
      deckPlayerB.shift()
      deckPlayerB.push(deckRoom[0])
      deckRoom.shift()
      deckPlayerB.push(deckRoom[0])
      deckRoom.shift()
      deckPlayerB.push(deckRoom[0])
      deckRoom.shift()
    }
  });
  firebase.database().ref('room/' + keyRoom).set(room);
}