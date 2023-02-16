import Card from 'react-bootstrap/Card';
import Xburguer from "../../assets/Xburguer.png"
import Xbacon from "../../assets/Xbacon.png"
import Vegetariano from "../../assets/Vegetariano.png"
import './Pratos.css'
function Hamburguer({nome,ingredientes,preco,img}){
    function formatValor (total){
        //console.log(`Total antes->`, total);
        var total = total.toFixed(2).split('.');
        total[0] = total[0].split(/(?=(?:...)*$)/).join('.');
        return total.join(',');
      };
    return(
        <>
       
                
                    <Card style={{width: '24rem', height:'20.5rem'}} className='rosa'>
                        <Card.Img variant="top" src={img} className='fotos' />
                        <Card.Body>
                            <Card.Title className='textoCentro'>{nome}</Card.Title>
                            <Card.Text className='textoCentro'>
                                {ingredientes}
                                <br />
                                <h5>R$ {formatValor(preco)}</h5>
                            </Card.Text>
                            {/* <div className='textoCentro'>
                                <Button variant="primary">R$ 15,00</Button>
                            </div> */}
                        </Card.Body>
                    </Card>
                
                </>
    )
}
export default Hamburguer;