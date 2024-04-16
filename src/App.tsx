import Item from './components/Item'
import ItemModal from './components/ItemModal';
import { useItemData } from './hooks/useItemData';


function App() {


const { data }  = useItemData();
  

  return (
    <>

    <ItemModal/>

    <div className='flex'>
      {data?.map(itemData =>
      <Item key={itemData.id}
      id={itemData.id}
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
