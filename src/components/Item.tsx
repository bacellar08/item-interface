import { FaPencilAlt } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";


interface ItemProps {
    name?: string,
    description?: string,
    price?: number,
    img?: string,
    quantity?: number
}



const Item: React.FC<ItemProps> = ({ name, description, price, img, quantity }) => {
    return (
        <div className="bg-gray-300 p-4 w-[350px] m-2 rounded-md flex flex-col items-center">
            <div className="bg-white rounded-md w-[280px]">
                <img src={img} alt="Foto do produto" />
            </div>
            <div className="flex flex-col items-center p-5 content-between">
            <h2 className="font-bold text-red-700 text-xl">
            {name}
            </h2>
            <p className="text-slate-600">
            {description}
            </p>
            <div className="flex p-4">
                <div className="flex flex-col items-center px-2">
                <h3>
                Preço:
                </h3>
                R${price},00
                </div>

                <div className="flex flex-col items-center px-2">
                <h3>
                Estoque:
                </h3>
                {quantity}
                </div>               
            </div>
            <div>
                <button className="px-2 w-[100px] h-10 bg-slate-500 text-white rounded-md m-1">Editar <FaPencilAlt className="inline mx-1" /></button>
                <button className="px-2 w-[100px] h-10 bg-red-800 text-white rounded-md m-1">Excluir <FaTrashCan className="inline mx-1" /></button>
            </div>
            </div>
        </div>
    )
    
}

export default Item;