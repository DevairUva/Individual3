import './Pratos.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';



function Comandas({ id,hamburguer, bebida, acompanhamento, sobremesa, precoTotal }) {
    function formatValor(total) {
        //console.log(`Total antes->`, total);
        var total = total.toFixed(2).split('.');
        total[0] = total[0].split(/(?=(?:...)*$)/).join('.');
        return total.join(',');
    };

    async function loadCardapio() {
        console.log('id teste',id)
        try {
          const resp = await fetch(`https://projeto-individual-3-uy0v.onrender.com/comanda/${id}`, {
            method: 'DELETE',
          });
          console.log('resposta delete->', resp)
          if (resp.status == 200 || 201) {
            setTimeout(()=>{
                window.location.reload(false);
            }, 500);
           
           console.log('teste delete')
    
          }
    
        } catch (e) {
          console.log(e)
        }
      }

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
                                    <br />
                                    <h5>Total R$ {formatValor(precoTotal)}</h5>
                                    <Button variant="danger" onClick={loadCardapio}>Delete</Button>
                                </Card.Text>
                                
                                
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