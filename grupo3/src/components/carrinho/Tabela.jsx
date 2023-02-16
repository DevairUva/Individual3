import Table from 'react-bootstrap/Table';
import './Tabela.css'
import React, { useState ,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



function Tabela({id}) {
 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [Dados,setDados] = useState([]);
 const [removeLoading, setRemoveLoading]= useState(false)
  
  useEffect(() => {
    loadId()
  }, [])

  console.log('dados carrinho',Dados)
  

  async function loadId() {
    try {
      const resp = await fetch(`https://projeto-individual-3-uy0v.onrender.com/pedido/${id}`, {
        method: 'GET',
      });
      console.log('resposta fetch carrinho->', resp)
      if (resp.status == 200 || 201) {
        const Dados1 = await resp.json();
        setDados(Dados1);
        setRemoveLoading(true)
      }

    } catch (e) {
      console.log(e)
    }
  }

  return (
    
    <div className='centro'>
      {/* <div>
        <h2>Carrinho</h2>
      </div> */}
      <br />
      <div className='tabela'>
        <Table striped>
          <thead>
            <tr>
              <th>Sanduíche</th>
              <th>Quantidade</th>
              <th>Valor</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>X-Burguer</td>
              <td><input type="number" min='0' max='10'/></td>
              <td>10,00</td>
              <td>
                <button className='botao'><strong>X</strong></button>
              </td>
            </tr>
            <tr>
              <td>Coca</td>
              <td><input type="number" min='0' max='10'/></td>
              <td>6,00</td>
              <td>
                <button className='botao'><strong>X</strong></button>
              </td>
            </tr>
            <tr>
              <td>Batata</td>
              <td><input type="number" min='0' max='10'/></td>
              <td>8,00</td>
              <td>
                <button className='botao'><strong>X</strong></button>
              </td>
            </tr>
            <tr>
              <td>Sorvete</td>
              <td><input type="number" min='0' max='10'/></td>
              <td>15,00</td>
              <td>
                <button className='botao'><strong>X</strong></button>
              </td>
            </tr>
            <tr>
              {/* <td>3</td> */}
              <td colSpan={2}><strong>Valor total</strong></td>
              <td><strong>39,00</strong></td>
              <td>
                <Button variant="info" className='botao-clique' onClick={handleShow}>
                  <strong>FINALIZAR PEDIDO</strong>
                </Button>

                <Modal show={show} onHide={ console.log(id)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Obrigado pela compra!</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>Por favor, preencha alguns dados pessoais:</p>
                    <Form>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="nome@exemplo.com"
                          autoFocus
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Telefone:</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="(xx) xxxxx - xxxx"
                          autoFocus
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Observações sobre o pedido:</Form.Label>
                        <Form.Control
                          as="textarea" rows={2}
                          placeholder="Descreva se quer retirar algum ingrediente ou algo do tipo."
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="info" className='botao-clique'onClick={handleClose}>
                      <strong>ENVIAR DADOS</strong>
                    </Button>
                  </Modal.Footer>
                </Modal>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Tabela;
