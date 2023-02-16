import Form from 'react-bootstrap/Form';
import './Formulario.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Comidas from '../../contexts/Contexts'
import { Link } from 'react-router-dom';


function Formulario() {

  useEffect(() => {
    loadId();
    loadCardapio();

  }, [])





  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectH, setSelectH] = useState('')
  const [selectB, setSelectB] = useState('')
  const [selectA, setSelectA] = useState('')
  const [selectS, setSelectS] = useState('')
  const [precotH, setprecoH] = useState('')
  const [precoB, setprecoB] = useState('')
  const [precoA, setprecoA] = useState('')
  const [precoS, setprecoS] = useState('')
  const [id, setId] = useState(0)
  const [dados1, setdados1] = useState([])
  const [bebidas, setbebidas] = useState([])
  const [acompanhamentos, setacompanhamentos] = useState([])
  const [sobremesa, setsobremesa] = useState([])
  const [hamburguer, sethamburguer] = useState([])
  const dados = {
    hamburguer: selectH,
    bebida: selectB,
    sobremesa: selectS,
    acompanhamento: selectA

  }

  const H = hamburguer
  const B = bebidas
  const A = acompanhamentos
  const S = sobremesa






  async function loadCardapio() {
    try {
      const resp = await fetch(`https://projeto-individual-3-uy0v.onrender.com/cardapio`, {
        method: 'GET',
      });
      //console.log('resposta fetch->', resp)
      if (resp.status == 200 || 201) {
        const Dados = await resp.json();

        //console.log('Dados do fetc->', Dados);
        setdados1(Dados)
        sethamburguer(Dados[0].hamburguer)
        setbebidas(Dados[1].bebidas)
        setsobremesa(Dados[2].sobremesas)
        setacompanhamentos(Dados[3].acompanhamentos)

      }

    } catch (e) {
      console.log(e)
    }
  }

  async function loadId() {
    try {
      const resp = await fetch(`https://projeto-individual-3-uy0v.onrender.com/pedido`, {
        method: 'GET',
      });
      //console.log('resposta fetch ID->', resp)
      if (resp.status == 200 || 201) {
        const getIds = await resp.json();

        const id1 = getIds[getIds.length - 1].id;
        //console.log('id anterior',id1)
        setId(id1 + 1);
      }

    } catch (e) {
      console.log(e)
    }
  }

  async function enviar() {

    let dados = {

      id: id,
      itens: [
        {
          nome: selectH,
          preco: Number(selectH.split("").filter(n => (Number(n) || n == 0)).join(""))
        },
        {
          nome: selectB,
          preco: Number(selectB.split("").filter(n => (Number(n) || n == 0)).join(""))
        },
        {
          nome: selectS,
          preco: Number(selectS.split("").filter(n => (Number(n) || n == 0)).join(""))

        },
        {
          nome: selectA,
          preco: Number(selectA.split("").filter(n => (Number(n) || n == 0)).join(""))

        }
      ]


    }
    console.log('dados id novo', dados)
    try {
      const resp = await fetch(`https://projeto-individual-3-uy0v.onrender.com/pedido`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados),
      });
      console.log('resposta fetch pedido->', resp)
      if (resp.status == 200 || 201) {
        console.log('dados enviados')
        setShow(true)

      }

    } catch (e) {
      console.log(e)
    }
  }
  function handleCreate(e) {
    e.preventDefault()
    alert(selectS)
  }


  return (
    <Comidas.Provider value={{}}>
      <div className='fundo-pedido'>
        <div className='titulo'>
          <br />
          <h2>Monte o seu combo</h2>
        </div>
        <div className='colunas'>
          <div className='tabelaF'>
            <br />
            <strong className='titulos'>Escolha o seu Hambúrguer:</strong>
            <Form className='tabelas'>
              <Form.Group>
                <Form.Select className='tabelaF' value={selectH} onChange={e => {
                  setSelectH(e.target.value)
                }}>
                  {H.map((item) =>
                    <option value={item.nome + item.preco}>{item.nome}</option>
                  )}
                </Form.Select><br />
              </Form.Group>
            </Form>
            <strong className='titulos'>E a bebida?</strong>
            <Form>
              <Form.Group>
                <Form.Select className='tabelaF' value={selectB} onChange={e => setSelectB(e.target.value)}>
                  {B.map((item) =>
                    <option value={item.nome + item.preco}>{item.nome}</option>
                  )}
                </Form.Select><br />
              </Form.Group>
            </Form>
            <strong className='titulos'>Algum acompanhamento?</strong>
            <Form>
              <Form.Group>
                <Form.Select className='tabelaF' value={selectA} onChange={e => setSelectA(e.target.value)}>
                  {A.map((item) => (
                    <option value={item.nome + item.preco}>{item.nome}</option>
                  ))}
                </Form.Select><br />
              </Form.Group>
            </Form>
            <strong className='titulos'>Não esquece a sobremesa!</strong>
            <Form>
              <Form.Group>
                <Form.Select className='tabelaF' value={selectS} onChange={e => setSelectS(e.target.value)}>
                  {S.map((item) => (
                    <option value={item.nome + item.preco}>{item.nome}</option>
                  ))}
                </Form.Select><br />
              </Form.Group>
              <Button variant="info" className='buton' onClick={() => enviar()}>


                <strong>CONCLUIR PEDIDO</strong>
              </Button>
              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Pedido adicionado ao carrinho!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Seu pedido foi enviado ao carrinho.<br />
                  Veja seu(s) pedido na aba "carrinho".
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Fechar
                  </Button>
                  <Link to={`/carrinho/${id}`}><Button variant="info">Carrinho</Button></Link>
                </Modal.Footer>
              </Modal>
            </Form>
          </div>
          <div className='tabelaF'>
            <h4 className='titulos'>Lembre os ingredientes:</h4>
            <br />
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>X-Bacon</Accordion.Header>
                <Accordion.Body>
                  Pão, carne, queijo, presunto e bacon.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>X-Burguer</Accordion.Header>
                <Accordion.Body>
                  Pão, carne, queijo e picles.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Vegetariano</Accordion.Header>
                <Accordion.Body>
                  Pão e planta.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Sorvete</Accordion.Header>
                <Accordion.Body>
                  Napolitano.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Salada de frutas</Accordion.Header>
                <Accordion.Body>
                  Maçã, banana, mamão e laranja.
                </Accordion.Body>
              </Accordion.Item>

            </Accordion>
          </div>
        </div>
        <br />
      </div>
    </Comidas.Provider>
  );
}

export default Formulario;