import Card from 'react-bootstrap/Card';
import './Pratos.css'
import Acaii from "../../assets/Acaii.png"
import Napolitano from "../../assets/Napolitano.png"
import Salada from "../../assets/Salada.png"

function Sobremesas({ nome, sabor, preco, img }) {
    function formatValor(total) {
        //console.log(`Total antes->`, total);
        var total = total.toFixed(2).split('.');
        total[0] = total[0].split(/(?=(?:...)*$)/).join('.');
        return total.join(',');
    };
    return (
        <>

            <Card style={{ width: '24rem', height: '20.5rem' }} className='rosa'>
                <Card.Img variant="top" src={img} className='fotos' />
                <Card.Body>
                    <Card.Title className='textoCentro'>{nome}</Card.Title>
                    <Card.Text className='textoCentro'>
                        {sabor}
                        <br />
                        <h5>R$ {formatValor(preco)}</h5>
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>

        </>
    )
}
export default Sobremesas;