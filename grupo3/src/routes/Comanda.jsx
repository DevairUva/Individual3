import { useState, useEffect } from "react"
import Comandas from "../components/cardapio/Comandas"
import Fundo from "../components/contato/Fundo"
import styles from './Cardapio.module.css'
function Comanda() {
  const [dados, setdados] = useState([])
 

  useEffect(() => {
    console.log('teste')
    loadComanda();
  }, [])
  async function loadComanda() {
    try {
      const resp = await fetch(`https://projeto-individual-3-uy0v.onrender.com/comanda`, {
        method: 'GET',
      });
      console.log('resposta fetch->', resp)
      if (resp.status == 200 || 201) {
        const Dados = await resp.json();

        console.log('Dados do fetc->', Dados);
        setdados(Dados)
       

      }

    } catch (e) {
      console.log(e)
    }
  }
    return (
     
      <div className={styles.fundo}>
        <>
        <h3 className='titulo3' style={{textAlign:'center', color:'#fff'}}>Veja seus pedidos Finais</h3>
        <div style={{flexDirection:'row'}}>
        {
            dados.map((item)=>(<Comandas hamburguer={item.hamburguer} bebida={item.bebida} acompanhamento={item.acompanhamento} sobremesa={item.sobremesa} precoTotal={item.preco_total==""?item.preco_total="0":item.preco_total}/>))
        }
        </div>
       
        
      </>
      </div>
    )
 

}
export default Comanda;
