
interface ItemProps {
    name: string,
    description: string,
    price: number,
    img: string
}



const Item: React.FC<ItemProps> = ({ name, description, price, img }) => {
    return (
        <div className="bg-slate-500 w-[50%]">
            {name} {description} {price} {img}
        </div>
    )
    
}

export default Item;