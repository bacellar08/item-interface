import { useState } from 'react'
import Item from './components/Item'

function App() {

  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    price: 0,
    quantity: 0,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    
    const {id, value} = e.target;
    setFormData(prevState => ({...prevState, [id]: value}))

    
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
  }

  

  return (
    <>

    <div className='bg-gray-300 flex w-[560px] rounded-lg p-4'>

    <form onSubmit={submitHandler} className='flex flex-col justify-around'>
      <h1 className='text-xl font-bold text-gray-700'>Cadastro de Produtos</h1>
  
      <label htmlFor="productName">Nome do Produto: </label>
      <input id='productName' value={formData.productName} onChange={handleChange} placeholder='Nome do Produto' type="text" />
      <label htmlFor="description">Descrição: </label>
      <input id='description' value={formData.description} onChange={handleChange} type="text" />
      <label htmlFor="price">Preço:</label>
      <input id='price' value={formData.price} onChange={handleChange} type="number" />
      <label htmlFor="quantity">Quantidade: </label>
      <input id='quantity' value={formData.quantity} onChange={handleChange} placeholder='10' type="number" />

      <button className='bg-red-700 text-white rounded-md p-2'>Cadastrar</button>

    </form>

      <div><Item name="Baly Tropical" description='Energético sabor Tropical' price={10} img='https://crsupermercados.com.br/cdn/shop/files/ENERG-BALY-TROPICAL.png' stock={3512}/></div>

    </div>


    
    </>
  )
}

export default App
