import './Pratos.css'
import Hamburguer from './Hamburguer';
import Bebidas from './Bebidas';
import Acompanhamentos from './Acompanhamentos'
import Sobremesas from './Sobremesas'


function Pratos({ hamburguer, bebidas, acompanhamentos, sobremesa }) {
    function enviar(id,nome){
        console.log(`id clicado ${id},nome ${nome}`)
    }
    return (
        <div className="centro">
            <br />
            
            <div>
                <h5 className='titulo2'>Hambúrgueres</h5>
                <div className='cards'>
                    {hamburguer.map((element) => (

                        <Hamburguer id={element.id} nome={element.nome} ingredientes={element.ingredientes} preco={element.preco} img={element.img} key={element.id}  />

                    )
                    )}
                </div>
                <br />
                <div>
                    <h5 className='titulo3'>Bebidas</h5>
                    <div className='cards'>
                        {bebidas.map((element) => (
                            <Bebidas id={element.id} nome={element.nome} preco={element.preco} img={element.img} key={element.id}  />

                        )
                        )}
                    </div>
                    <br />
                    <h5 className='titulo3'>Acompanhamentos</h5>
                    <div className='cards'>
                        {acompanhamentos.map((element) => (
                            <Acompanhamentos id={element.id} nome={element.nome} img={element.img} preco={element.preco} key={element.id} />

                        )
                        )}
                    </div>
                    <br />
                    <h5 className='titulo3'>Sobremesas</h5>
                    <div className='cards'>
                        {sobremesa.map((element) => (
                            <Sobremesas id={element.id} nome={element.nome} img={element.img} preco={element.preco} sabor={element.sabor} key={element.id}  />

                        )
                        )}
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}
export default Pratos;