import Item from './components/Item'
import { useItemData } from './hooks/useItemData';


function App() {


const { data }  = useItemData();
  

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }



  

  return (
    <>

    <div className='bg-gray-300 flex w-[560px] rounded-lg p-4'>

    <form onSubmit={submitHandler} className='flex flex-col justify-around'>
      <h1 className='text-xl font-bold text-gray-700'>Cadastro de Produtos</h1>

      <div className='py-2 flex flex-col'>
        <label htmlFor="productName">Nome do Produto: </label>
        <input id='productName'placeholder='Nome do Produto' type="text" />
      </div>

      <div className='py-2 flex flex-col'>
        <label htmlFor="description">Descrição: </label>
        <input id='description'type="text" />
      </div>

      <div className='py-2 flex flex-col'>
        <label htmlFor="price">Preço:</label>
        <input id='price' placeholder='R$10,00' type="number" />
      </div>

      <div className='py-2 flex flex-col'>
        <label htmlFor="quantity">Quantidade: </label>
        <input id='quantity'placeholder='10' type="number" />
      </div>

      <div className='py-2 flex flex-col'>
        <label htmlFor="image">URL da Imagem:</label>
        <input id='image' type="text" />
      </div>

      <button className='bg-red-700 text-white rounded-md p-2'>Cadastrar</button>

    </form>

    </div>

    <div>
      {data?.map(itemData =>
      <Item
        name={itemData.productName}
        description={itemData.description}
        price={itemData.price}
        quantity={itemData.quantity}
        img={itemData.image}
        />)}
    </div>


    
    </>
  )
}

export default App
