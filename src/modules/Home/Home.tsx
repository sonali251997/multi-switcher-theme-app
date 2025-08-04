import React, { useEffect } from "react"
import {DummyCard, Header} from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../thunks/productThunk";
import type { DummyCardProps } from "../../modals/modals";
import { useAppDispatch, useAppSelector } from "../../hooks";

const Home = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector(state=>{
        console.log("state",state.product.products);
        return state.product.products
    });


    useEffect(()=>{
        dispatch(getProduct());
    },[])

    return (
        <>
            <Header/>
            <div className="bg-[var(--color-bg-100)] ">
                <div className="p-6 max-w-7xl mx-auto">
                    {/* Title */}
                    <h1 className="text-4xl font-bold text-[var(--color-text-100)] mb-4">Home Page</h1>

                    {/* Paragraph */}
                    <p className="text-[var(--color-text-100)] mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    {/* Button */}
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mb-10">
                        Learn More
                    </button>

                    {/* List of Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {products && products.map((obj:DummyCardProps,i:number) => (
                            <DummyCard {...obj} key={`dummy-card-${i}`}/>
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home;