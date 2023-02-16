import './Pratos.css'
import Card from 'react-bootstrap/Card';



function Comandas({ hamburguer, bebida, acompanhamento, sobremesa, precoTotal }) {
    // function formatValor (total){
    //     //console.log(`Total antes->`, total);
    //     let total = total.toFixed(2).split('.');
    //     total[0] = total[0].split(/(?=(?:...)*$)/).join('.');
    //     return total.join(',');
    //   };

    return (
        <div className="centro">
            <br />
            <br />
            <div>
                <div style={{msFlexDirection:'row'}}>
                    <br />

                    <div className='cards'>

                        <Card style={{ width: '24rem', height: '20.5rem' }} className='rosa'>
                            <Card.Body>
                                <Card.Title className='textoCentro'>Pedido Final</Card.Title>
                                <Card.Text className='textoCentro'>
                                    <br />
                                    <h5>{hamburguer} </h5>
                                    <h5>{bebida} </h5>
                                    <h5>{acompanhamento} </h5>
                                    <h5>{sobremesa} </h5>

                                    <h5>R$ precoTotal</h5>
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}
export default Comandas;