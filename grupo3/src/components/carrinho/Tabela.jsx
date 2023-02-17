import Table from 'react-bootstrap/Table';
import './Tabela.css'
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Alert } from 'react'
import Card from 'react-bootstrap/Card';
import Xbacon from '../../assets/Carrinho2.png'
import gif1 from '../../assets/gif1.gif'
import gif2 from '../../assets/gif2.gif'

function Tabela({ id }) {

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [Dados, setDados] = useState([]);
  //const [total,setValorTotal]=useState()

  useEffect(() => {
    loadId()
  }, [])

  //console.log('dados carrinho',Dados)


  async function loadId() {
    try {
      const resp = await fetch(`https://projeto-individual-3-uy0v.onrender.com/pedido/${id}`, {
        method: 'GET',
      });
      //console.log('resposta fetch carrinho->', resp)
      if (resp.status == 200 || 201) {
        const Dados1 = await resp.json();
        let itens = Dados1.itens
        // console.log(itens[0].nome)
        //const uniqueObjects = Dados.map(item => console.log(item.nome,item.preco)); 

        setDados(Dados1.itens);

      }

    } catch (e) {
      console.log(e)
    }
  }

  async function enviar() {
    var total = 0;
    for (let i = 0; i < Dados.length; i++) {
      total = total + Dados[i].preco
    }

    let dados = {
      id: id,
      hamburguer: Dados[0].nome,
      bebida: Dados[1].nome,
      sobremesa: Dados[2].nome,
      acompanhamento: Dados[3].nome,
      preco_total: total
    }
    console.log(dados)

    try {
      const resp = await fetch(`https://projeto-individual-3-uy0v.onrender.com/comanda`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados),
      });
      console.log('resposta fetch pedido->', resp)
      if (resp.status == 200 || 201) {
        console.log('dados enviados comanda')
        setShow(false)
        setShow2(true)
        setTimeout(function () {
          window.location.href = "https://spaceburguersquad1.onrender.com/#/comanda";
        }, 4000);
      }
    } catch (e) {
      console.log(e)
    }
  }


  function showTotal() {
    var total = 0;
    for (let i = 0; i < Dados.length; i++) {
      total = total + Dados[i].preco
    }

    return total;
  }
  function formatValor(total) {
    //console.log(`Total antes->`, total);
    var total = total.toFixed(2).split('.');
    total[0] = total[0].split(/(?=(?:...)*$)/).join('.');
    return total.join(',');
  };

  function getTotal() { }



  return (

    <Card className="text-darkCarrinho">
      <Card.Img className='imagem rounded-0' src={Xbacon} alt="Card image" />
      <Card.ImgOverlay>
        {/* <h2 className='textoCentro'>Carrinho</h2> */}
        <div className='centroCarrinho'>
          <div>
            <img src={gif1}/>
          </div>
          <div className='tabela'>
            <Table striped className='textoTabela'>
              <thead>
                <tr>
                  <th>Itens</th>
                  <th>Valor</th>

                </tr>
              </thead>
              <tbody>
                {Dados.map((item) => (
                  <tr>
                    <td>{item.nome == "" ? "Vazio" : item.nome}</td>
                    <td>{formatValor(item.preco) == "" ? null : formatValor(item.preco)}</td>

                  </tr>
                ))}

                <tr>
                  {/* <td>3</td> */}
                  <td><strong>Valor total</strong></td>
                  <td><strong>R$ {formatValor(showTotal())}</strong></td>
                </tr>
                <tr>

                  <td colSpan={2}>
                    <Button variant="info" className='botao-clique' onClick={handleShow}>
                      <strong>FINALIZAR PEDIDO</strong>
                    </Button>

                    <Modal show={show} onHide={handleClose}>
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
                        <Button variant="info" className='botao-clique' onClick={enviar}>
                          <strong>ENVIAR DADOS</strong>
                        </Button>
                      </Modal.Footer>
                    </Modal>

                    <Modal show={show2} onHide={handleClose}>
                      <Modal.Title className='modalTabela'>Pedido Enviado. Obrigado pela compra!<br /><br />👽👏🥳🥰👨‍🚀<br /><br />Enviaremos um e-mail ou um zap confirmando o pedido!<br /><br />👽🍟🍔🍨🍹👨‍🚀<br /></Modal.Title>
                    </Modal>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>

      </Card.ImgOverlay>
    </Card>
  );
}

export default Tabela;
