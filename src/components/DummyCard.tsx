import { type FC } from "react";
import type { DummyCardProps } from "../modals/modals";

const DummyCard: FC<DummyCardProps> = ({ id, title, image, price, description, brand, model, color, category, discount }) => {
    return (
        <div className="max-w-sm rounded-2xl shadow-[var(--shadow-lg)] overflow-hidden  bg-[var(--color-bg-80)]">
            <img className="w-full h-48 object-contain bg-white" src={image} alt={title} />
            <div className="p-4 space-y-2">
                <h2 className="text-xl text-[var(--color-text-100)] line-clamp-3">{title}</h2>
                <p className="text-sm text-[var(--color-text-60)]  line-clamp-3">{description}</p>

                <div className="text-sm text-[var(--color-text-10)]">
                    <p><span className="font-medium">ID:</span> {id}</p>
                    <p><span className="font-medium">Brand:</span> {brand}</p>
                    <p><span className="font-medium">Model:</span> {model}</p>
                    <p><span className="font-medium">Category:</span> {category}</p>
                    <p><span className="font-medium">Color:</span> {color}</p>
                </div>

                <div className="flex justify-between items-center mt-3">
                    <span className="text-lg font-bold text-green-600">${price}</span>
                    <span className="text-sm text-red-500 bg-red-100 px-2 py-1 rounded-md">
                        {discount}% OFF
                    </span>
                </div>
            </div>
        </div>

    );
}

export default DummyCard;