import { useState } from "react"
import { useItemDataMutation } from "../hooks/useItemDataMutation"
import { ItemData } from "../interface/ItemData"

interface InputProps {
    label: string,
    value: string | number,
    placeholder: string,
    updateValue(value: any): void,
}

const Input = ({label, value, updateValue, placeholder}: InputProps) => {

        return (
            <>
            <div className='py-2 flex flex-col' >

            </div>
            <label>{label}</label>
            <input value={value} placeholder={placeholder} onChange={event => updateValue(event.target.value)}  />

            </>
        )
}


const ItemModal = () => {

    const [productName, setProductName] = useState('')
    const [description, setDescription]= useState('')
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [image, setImage] = useState('') 
    const { postMutation } = useItemDataMutation()


    const submit = () => {
        const itemData: ItemData = {
            productName,
            description,
            price,
            quantity,
            image
        }

        postMutation.mutate(itemData)
    }



    return(

        <div className='bg-gray-300 flex w-[560px] rounded-lg p-4'>

        <form className='flex flex-col justify-around'>
            <h1 className="text-xl">Cadastrar novo Item</h1>
            <Input
            label='Nome do Produto' value={productName} placeholder="Nome do produto" updateValue={setProductName}
            />
            <Input
            label='Descrição' value={description} placeholder="" updateValue={setDescription}
            />
            <Input
            label='Preço' value={price} placeholder="R$10,00" updateValue={setPrice}
            />
            <Input
            label='Quantidade' value={quantity} placeholder="" updateValue={setQuantity}
            />
            <Input
            label='URL Imagem' value={image} placeholder="" updateValue={setImage}
            />

            <button onClick={submit} className='bg-red-700 text-white rounded-md p-2'>Cadastrar</button>
    
        </form>
    
        </div>
    )
}

export default ItemModal;