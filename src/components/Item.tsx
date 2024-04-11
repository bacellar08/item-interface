


interface ItemProps {
    name?: string,
    description?: string,
    price?: number,
    img?: string,
    stock?: number
}



const Item: React.FC<ItemProps> = ({ name, description, price, img, stock }) => {
    return (
        <div className="bg-gray-300 p-4 w-[350px] h-[350px] rounded-md flex flex-col items-center">
            <div className="bg-white rounded-md w-[280px]">
                <img src={img} alt="Baly Tropical" />
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
                R${price?.toFixed(2)}
                </div>

                <div className="flex flex-col items-center px-2">
                <h3>
                Estoque:
                </h3>
                {stock}
                </div>               
            </div>
            </div>
        </div>
    )
    
}

export default Item;