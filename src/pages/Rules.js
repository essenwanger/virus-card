import React from 'react'
import { Container, Media, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { 
  faBriefcaseMedical, faVirus, faMitten, 
  faViruses, faSyncAlt, faUserFriends, faHandHoldingHeart, 
  faBone, faLungs, faHeart, faBrain, faChild, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faBriefcaseMedical, faVirus, faMitten, 
  faViruses, faSyncAlt, faUserFriends, faHandHoldingHeart,
  faBone, faLungs, faHeart, faBrain, faChild, faInfoCircle );

class Rules extends React.Component {

  render() {
    return (
      <Container style={styleMain}>
        <Media>
          <Media.Body>
            <h5>REGLAS</h5>
            <p>
              VIRUS! es un juego para 2 a 6 jugadores, en el que tendrás 
              que construir un cuerpo humano mientras evitas que tus rivales 
              infecten, destruyan o roben tus órganos.
            </p>
          </Media.Body>
        </Media>
        <Media>
          <Media.Body>
            <h5>OBJETIVO DEL JUEGO</h5>
            <p>
              Sé el primer jugador en completar tu cuerpo.
              Un cuerpo lo forman 4 órganos, uno de cada color. Si logras reunir sobre la
              mesa, frente a ti, tus 4 órganos diferentes sanos, ¡habrás ganado la partida!
            </p>
            <p>
              Consideramos como órganos sanos aquellos que están libres de virus, vacunados o inmunizados.
            </p>
          </Media.Body>
        </Media>
        <Media>
          <Media.Body>
            <h5>FASES DEL JUEGO</h5>
            <p>
              VIRUS! es un juego dinámico: elige entre jugar una carta o descartarte de ellas.
              Después roba tantas cartas como necesites antes de pasar el turno al siguiente
              jugador. No puedes pasar tu turno sin haberlo jugado.
            </p>
          </Media.Body>
        </Media>
        <Media>
          <div style={{paddingBottom: '10px'}}>
          <Card style={{backgroundColor: '#f8d7da', borderColor: '#f5c6cb', marginRight: '10px', width: '50px', marginBottom: '10px'}} 
          className="text-center">
            <Card.Body style={{padding: '1.25rem 0.25rem'}}>
              <FontAwesomeIcon icon="heart" size="2x" />
            </Card.Body>
          </Card>
          <Card style={{backgroundColor: '#d4edda', borderColor: '#c3e6cb', marginRight: '10px', width: '50px'}} 
          className="text-center">
            <Card.Body style={{padding: '1.25rem 0.25rem'}}>
              <FontAwesomeIcon icon="lungs" size="2x" />
            </Card.Body>
          </Card>
          </div>
          <div style={{paddingBottom: '10px'}}>
          <Card style={{backgroundColor: '#fff3cd', borderColor: '#ffeeba', marginRight: '10px', width: '50px', marginBottom: '10px'}} 
          className="text-center">
            <Card.Body style={{padding: '1.25rem 0.25rem'}}>
              <FontAwesomeIcon icon="bone" size="2x" />
            </Card.Body>
          </Card>
          <Card style={{backgroundColor: '#cce5ff', borderColor: '#b8daff', marginRight: '10px', width: '50px'}} 
          className="text-center">
            <Card.Body style={{padding: '1.25rem 0.25rem'}}>
              <FontAwesomeIcon icon="brain" size="2x" />
            </Card.Body>
          </Card>
          </div>
          <Media.Body>
            <h5>ÓRGANOS</h5>
            <p>
              Reúne cuatro órganos sanos de distinto
              color para ganar el juego. No puedes tener en tu
              cuerpo dos órganos iguales en ningún momento.
            </p>
          </Media.Body>
        </Media>
        <Media>
          <Card style={{backgroundColor: '#c4a5f3',borderColor: '#9885b5', marginRight: '10px', width: '50px'}} 
          className="text-center">
            <Card.Body style={{padding: '1.25rem 0.25rem'}}>
              <FontAwesomeIcon icon="child" size="2x" />
            </Card.Body>
          </Card>
          <Media.Body>
            <h5>ÓRGANO MULTICOLOR</h5>
            <p>
              Este órgano actúa como un comodín para ayudarte a completar tu cuerpo y
              cuenta como órgano a todos sus efectos.
              Puede vacunarse con una medicina de cualquier color, pero también puede ser
              infectado por un virus de cualquier color.
            </p>
            <p>
              Nota: Tu cuerpo podrá tener cinco órganos distintos si uno de ellos es el
              multicolor, y puedes ganar la partida si cuatro de ellos están sanos.
            </p>
          </Media.Body>
        </Media>
        <Media>
          <Media.Body>
            <h5>VIRUS</h5>
            <p>
              Usa las cartas de virus para destruir los órganos y medicinas de tus rivales.
              Los virus sólo tienen efecto sobre órganos y medicinas de su mismo color.
            </p>
          </Media.Body>
        </Media>
        <Media>
          <div style={{paddingBottom: '10px'}}>
          <Card style={{backgroundColor: '#fff', marginRight: '10px', width: '50px'}} 
          className="text-center">
            <Card.Body style={{padding: '1.25rem 0.25rem'}}>
              <FontAwesomeIcon icon="heart" size="2x" />
            </Card.Body>
          </Card>
          <Card style={{backgroundColor: '#fff', marginRight: '10px', width: '50px'}} 
          className="text-center">
            <Card.Body style={{padding: '0.75rem 0.25rem'}}>
              <FontAwesomeIcon icon="virus" size="2x" rotation={90}/>
            </Card.Body>
          </Card>
          </div>
          <Media.Body>
            <h5>INFECTAR</h5>
            <p>
              Coloca una carta de virus sobre un órgano libre de su color para
              infectarlo. No podrás completar tu cuerpo si alguno de tus
              órganos está infectado por un virus.
            </p>
          </Media.Body>
        </Media>
        <Media>
          <div style={{paddingBottom: '10px'}}>
          <Card style={{backgroundColor: '#fff', marginRight: '10px', width: '50px'}} 
          className="text-center">
            <Card.Body style={{padding: '1.25rem 0.25rem'}}>
              <FontAwesomeIcon icon="heart" size="2x" />
            </Card.Body>
          </Card>
          <Card style={{backgroundColor: '#fff', marginRight: '10px', width: '50px'}} 
          className="text-center">
            <Card.Body style={{padding: '0.75rem 0.25rem'}}>
              <FontAwesomeIcon icon="virus" size="2x" rotation={90}/>
            </Card.Body>
          </Card>
          <Card style={{backgroundColor: '#fff', marginRight: '10px', width: '50px'}} 
          className="text-center">
            <Card.Body style={{padding: '0.75rem 0.25rem'}}>
              <FontAwesomeIcon icon="virus" size="2x" rotation={90}/>
            </Card.Body>
          </Card>
          </div>
          <Media.Body>
            <h5>EXTIRPAR</h5>
            <p>
              Destruye un órgano infectado. Coloca un segundo virus sobre
              un órgano ya infectado: Ese órgano es destruido y las tres
              cartas van a parar la pila de descarte.
            </p>
          </Media.Body>
        </Media>
        <Media>
          <div style={{paddingBottom: '10px'}}>
          <Card style={{backgroundColor: '#fff', marginRight: '10px', width: '50px'}} 
          className="text-center">
            <Card.Body style={{padding: '1.25rem 0.25rem'}}>
              <FontAwesomeIcon icon="heart" size="2x" />
            </Card.Body>
          </Card>
          <Card style={{backgroundColor: '#fff', marginRight: '10px', width: '50px'}} 
          className="text-center">
            <Card.Body style={{padding: '0.75rem 0.25rem'}}>
              <FontAwesomeIcon icon="briefcase-medical" size="2x" rotation={90}/>
            </Card.Body>
          </Card>
          <Card style={{backgroundColor: '#fff', marginRight: '10px', width: '50px'}} 
          className="text-center">
            <Card.Body style={{padding: '0.75rem 0.25rem'}}>
              <FontAwesomeIcon icon="virus" size="2x" rotation={90}/>
            </Card.Body>
          </Card>
          </div>
          <Media.Body>
            <h5>DESTRUIR VACUNA</h5>
            <p>
              Destruye una vacuna. Elimina una carta de medicina que se
              encuentre sobre un órgano. Envía el virus y la medicina a la pila
              de descarte.
            </p>
          </Media.Body>
        </Media>
        <Media>
          <Card style={{backgroundColor: '#c4a5f3',borderColor: '#9885b5', marginRight: '10px', width: '50px', marginBottom: '10px'}} 
          className="text-center">
            <Card.Body style={{padding: '1.25rem 0.25rem'}}>
              <FontAwesomeIcon icon="virus" size="2x" />
            </Card.Body>
          </Card>
          <Media.Body>
            <h5>VIRUS MULTICOLOR</h5>
            <p>
              Este virus comodín puede infectar un órgano o destruir una vacuna de cualquier
              color. Sin embargo, también puede ser curado por medicinas de cualquier color.
            </p>
          </Media.Body>
        </Media>
        <Media>
          <Media.Body>
            <h5>MEDICINAS</h5>
            <p>
              Las cartas de medicina sirven para proteger tus órganos de los virus. Pueden
              destruir cartas de virus o proteger órganos para evitar que sean infectados. Utiliza
              las cartas de medicina sólo sobre cartas (virus u órganos) de su mismo color.
            </p>
          </Media.Body>
        </Media>
        <Media>
          <div style={{paddingBottom: '10px'}}>
          <Card style={{backgroundColor: '#fff', marginRight: '10px', width: '50px'}} 
          className="text-center">
            <Card.Body style={{padding: '1.25rem 0.25rem'}}>
              <FontAwesomeIcon icon="heart" size="2x" />
            </Card.Body>
          </Card>
          <Card style={{backgroundColor: '#fff', marginRight: '10px', width: '50px'}} 
          className="text-center">
            <Card.Body style={{padding: '0.75rem 0.25rem'}}>
              <FontAwesomeIcon icon="virus" size="2x" rotation={90}/>
            </Card.Body>
          </Card>
          <Card style={{backgroundColor: '#fff', marginRight: '10px', width: '50px'}} 
          className="text-center">
            <Card.Body style={{padding: '0.75rem 0.25rem'}}>
              <FontAwesomeIcon icon="briefcase-medical" size="2x" rotation={90}/>
            </Card.Body>
          </Card>
          </div>
          <Media.Body>
            <h5>CURAR</h5>
            <p>
              Destruye un virus. Utiliza una carta de medicina para descartar
              un virus de su mismo color que se encuentre sobre un órgano.
              Envía ambas cartas a la pila de descarte.
            </p>
          </Media.Body>
        </Media>
        <Media>
          <div style={{paddingBottom: '10px'}}>
          <Card style={{backgroundColor: '#fff', marginRight: '10px', width: '50px'}} 
          className="text-center">
            <Card.Body style={{padding: '1.25rem 0.25rem'}}>
              <FontAwesomeIcon icon="heart" size="2x" />
            </Card.Body>
          </Card>
          <Card style={{backgroundColor: '#fff', marginRight: '10px', width: '50px'}} 
          className="text-center">
            <Card.Body style={{padding: '0.75rem 0.25rem'}}>
              <FontAwesomeIcon icon="briefcase-medical" size="2x" rotation={90}/>
            </Card.Body>
          </Card>
          </div>
          <Media.Body>
            <h5>VACUNAR</h5>
            <p>
              Protege un órgano. Coloca una medicina sobre un órgano libre
              de su mismo color. Ahora tus rivales necesitan dos virus para
              infectar tu órgano.
            </p>
          </Media.Body>
        </Media>
        <Media>
          <div style={{paddingBottom: '10px'}}>
          <Card style={{backgroundColor: '#fff', marginRight: '10px', width: '50px'}} 
          className="text-center">
            <Card.Body style={{padding: '1.25rem 0.25rem'}}>
              <FontAwesomeIcon icon="heart" size="2x" />
            </Card.Body>
          </Card>
          <Card style={{backgroundColor: '#fff', marginRight: '10px', width: '50px'}} 
          className="text-center">
            <Card.Body style={{padding: '0.75rem 0.25rem'}}>
              <FontAwesomeIcon icon="briefcase-medical" size="2x" rotation={90}/>
            </Card.Body>
          </Card>
          <Card style={{backgroundColor: '#fff', marginRight: '10px', width: '50px'}} 
          className="text-center">
            <Card.Body style={{padding: '0.75rem 0.25rem'}}>
              <FontAwesomeIcon icon="briefcase-medical" size="2x" rotation={90}/>
            </Card.Body>
          </Card>
          </div>
          <Media.Body>
            <h5>INMUNIZAR</h5>
            <p>
              Coloca una segunda medicina sobre un órgano. Éste queda
              protegido para siempre contra el ataque de cualquier virus y no
              podrá ser destruido ni afectado por cartas de tratamiento. Gira las
              dos medicinas sobre el órgano para indicar que éste es inmune.
            </p>
          </Media.Body>
        </Media>
        <Media>
          <Card style={{backgroundColor: '#c4a5f3',borderColor: '#9885b5', marginRight: '10px', width: '50px', marginBottom: '10px'}} 
          className="text-center">
            <Card.Body style={{padding: '1.25rem 0.25rem'}}>
              <FontAwesomeIcon icon="briefcase-medical" size="2x" />
            </Card.Body>
          </Card>
          <Media.Body>
            <h5>MEDICINAS MULTICOLOR</h5>
            <p>
              Estas medicinas son comodines. Utilízalas para curar virus o vacunar órganos
              de cualquier color. Del mismo modo, pueden ser destruidas por virus de
              cualquier color. 
            </p>
          </Media.Body>
        </Media>
        <Media>
          <Media.Body>
            <h5>TRATAMIENTOS</h5>
            <p>
              Las cartas de tratamiento pueden alterar el juego para ayudarte a ganar.
              Utilízalas en tu beneficio o para evitar que tus rivales completen su cuerpo antes
              que tú. Estas cartas se juegan sobre la pila de descartes y tienen efecto inmediato. 
            </p>
          </Media.Body>
        </Media>
        <Media>
          <Card style={{backgroundColor: '#c4a5f3',borderColor: '#9885b5', marginRight: '10px', width: '50px'}} 
          className="text-center">
            <Card.Body style={{padding: '1.25rem 0.25rem'}}>
              <FontAwesomeIcon icon="sync-alt" size="2x" />
            </Card.Body>
          </Card>
          <Media.Body>
            <h5>TRANSPLANTE</h5>
            <p>
              Intercambia un órgano por otro entre dos jugadores cualesquiera.
              No importa si el color de estos órganos es diferente, ni si están sanos,
              infectados o vacunados. Sencillamente el jugador cambia el órgano
              escogido por otro, siempre y cuando ninguno de los dos jugadores
              tenga dos órganos del mismo color ni éstos estén inmunizados.  
            </p>
          </Media.Body>
        </Media>
        <Media>
          <Card style={{backgroundColor: '#c4a5f3',borderColor: '#9885b5', marginRight: '10px', width: '50px'}} 
          className="text-center">
            <Card.Body style={{padding: '1.25rem 0.25rem'}}>
              <FontAwesomeIcon icon="hand-holding-heart" size="2x" />
            </Card.Body>
          </Card>
          <Media.Body>
            <h5>LADRÓN DE ÓRGANOS</h5>
            <p>
              Roba un órgano de otro jugador y añádelo a tu cuerpo. Puedes robar
              órganos sanos, vacunados o infectados, pero no inmunes. Recuerda
              que no puedes tener dos órganos del mismo color.
            </p>
          </Media.Body>
        </Media>
        <Media>
          <Card style={{backgroundColor: '#c4a5f3',borderColor: '#9885b5', marginRight: '10px', width: '50px'}} 
          className="text-center">
            <Card.Body style={{padding: '1.25rem 0.25rem'}}>
              <FontAwesomeIcon icon="viruses" size="2x" />
            </Card.Body>
          </Card>
          <Media.Body>
            <h5>CONTAGIO</h5>
            <p>
              Traslada tantos virus como puedas de tus órganos infectados a los
              órganos de los demás jugadores.
              No puedes utilizar el contagio sobre órganos vacunados o infectados,
              sólo podrás contagiar órganos libres.
            </p>
          </Media.Body>
        </Media>
        <Media>
          <Card style={{backgroundColor: '#c4a5f3',borderColor: '#9885b5', marginRight: '10px', width: '50px'}} 
          className="text-center">
            <Card.Body style={{padding: '1.25rem 0.25rem'}}>
              <FontAwesomeIcon icon="mitten" size="2x" />
            </Card.Body>
          </Card>
          <Media.Body>
            <h5>GUANTE DE LÁTEX</h5>
            <p>
              Todos los jugadores, excepto el que utliza el guante, descartan su
              mano. Al comienzo de su siguiente turno, al no tener cartas, estos
              jugadores tan solo podrán robar una nueva mano, perdiendo así un
              turno de juego.
            </p>
          </Media.Body>
        </Media>
        <Media>
          <Card style={{backgroundColor: '#c4a5f3',borderColor: '#9885b5', marginRight: '10px', width: '50px'}} 
          className="text-center">
            <Card.Body style={{padding: '1.25rem 0.25rem'}}>
              <FontAwesomeIcon icon="user-friends" size="2x" />
            </Card.Body>
          </Card>
          <Media.Body>
            <h5>ERROR MÉDICO</h5>
            <p>
              Intercambia todo tu cuerpo por el de otro jugador, incluyendo
              órganos, virus y vacunas. No importa el número de cartas que cada
              uno tenga en mesa. Cuando usas esta carta, los órganos inmunizados también son intercambiados.
            </p>
          </Media.Body>
        </Media>
      </Container>
    );
  }
}

const styleMain = { 
  paddingTop: '10px'
}

export default Rules;
