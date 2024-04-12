import { useEffect, useState } from 'react'
import Item from './components/Item'
import axios from 'axios'
import { nanoid } from 'nanoid'


function App() {

  const [items, setItems] = useState([])
  const [formData, setFormData] = useState({
    id: nanoid(),
    productName: '',
    description: '',
    price: 0,
    quantity: 0,
  })

  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    
    const {id, value} = e.target;
    setFormData(prevState => ({...prevState, [e.target.id]: value}))

    
  }

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    

    try {
      
      await axios.post('http://localhost:8080/item/add', formData)
      console.log(formData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await axios.get('http://localhost:8080/item')
        setItems(response.data)
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }
    }

    
    getItems();
  }, [])



  

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

      <div><Item name={formData.productName} description={formData.description} price={formData.price} img='https://crsupermercados.com.br/cdn/shop/files/ENERG-BALY-TROPICAL.png' quantity={formData.quantity}/></div>

    </div>

    <div>
    <h1>Itens cadastrados:</h1>
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Item name={item.productName} description={item.description} price={item.price} img='Placeholder'/>
        </li>
      ))}
    </ul>
    </div>


    
    </>
  )
}

export default App
