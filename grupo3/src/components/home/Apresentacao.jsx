import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import AstroHome from '../../assets/AstroHome.png'
import Alien3 from '../../assets/Alien3.png'
import './Apresentacao.css'
import Xbacon from "../../assets/Xbacon.png"
import Xburguer from "../../assets/Xburguer.png"
import Vegetariano from "../../assets/Vegetariano.png"
import Topo3 from "../../assets/Topo3.png"
import Carousel from 'react-bootstrap/Carousel';

function Apresentacao() {
  return (
    <div>
      <div>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Topo3}
              alt="First slide"
            />
            <Carousel.Caption>
              <div className='centroHome'>
                <div className='textoHome'>
                  <h3 className='text-home'>
                  Experimente nossos burgueres que são de <strong><br/>outro mundo!</strong><br />
                    <strong><br />
                      <Button className='button' variant="info" href='/cardapio'><strong>ESCOLHA O SEU</strong></Button>
                    </strong>
                  </h3>
                </div>
                <img src={AstroHome} alt="astronauta" className='astroHome' />
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Topo3}
              alt="First slide"
            />
            <Carousel.Caption>
              <div className='centroHome'>
                <div className='textoHome'>
                  <h3 className='text-home'>
                  Esqueça os sabores <br/>do planeta terra.<br/>
                  Conheça nosso cardápio <br/>e faça <strong>uma viagem espacial.</strong><br />
                    <strong>
                      <br />
                      <Button className='button' variant="info" href='/cardapio'><strong>VIAJAR AGORA</strong></Button>
                    </strong>
                  </h3>
                </div>
                <img src={Alien3} alt="astronauta" className='astroHome2' />
              </div> 
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='infoHome'>
        <h2 className='h1Home'>Conheça nossos produtos:</h2>
        <div className='centroHome'>
          <div className='colunasHome'>
            <Card style={{ width: '15rem', height: '20.5rem' }} className='rosa'>
              <Card.Img variant="top" src={Xbacon} className='fotosHome' />
              <Card.Body>
                <Card.Title className='textoCentroHome'>X-Bacon</Card.Title>
                <Card.Text className='textoCentroHome'>
                  Pão, carne, queijo e bacon.
                  <h6>Preço R$ 15,00</h6>
                </Card.Text>
                <div className='textoCentroHome'>
                  <Button className='button' variant="info" href='/cardapio'><strong>EU QUERO</strong></Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className='colunasHome'>
            <Card style={{ width: '15rem', height: '20.5rem' }} className='rosa'>
              <Card.Img variant="top" src={Xburguer} className='fotosHome' />
              <Card.Body>
                <Card.Title className='textoCentroHome'>X-Burger</Card.Title>
                <Card.Text className='textoCentroHome'>
                  Pão, carne, queijo e picles.
                  <br />
                  <h6>Preço R$ 15,00</h6>
                </Card.Text>
                <div className='textoCentroHome'>
                  <Button className='button' variant="info" href='/cardapio'><strong>EU QUERO</strong></Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className='colunasHome'>
            <Card style={{ width: '15rem', height: '20.5rem' }} className='rosa'>
              <Card.Img variant="top" src={Vegetariano} className='fotosHome' />
              <Card.Body>
                <Card.Title className='textoCentroHome'>Vegetariano</Card.Title>
                <Card.Text className='textoCentroHome'>
                  Pão e uma incrível salada.
                  <br />
                  <h6>Preço R$ 15,00</h6>
                </Card.Text>
                <div className='textoCentroHome'>
                  <Button className='button' variant="info" href='/cardapio'><strong>EU QUERO</strong></Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Apresentacao;
