import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../services/api";

import ProductImage from "../Components/products/ProductImage";
import ProductInfo from "../Components/products/ProductInfo";
import RelatedProducts from "../Components/products/RelatedProduct";

const ProductDetails = () => {

    const { id } = useParams();

    const [product, setProduct] = useState(null);

    const [loading, setLoading] = useState(true);

    const getProduct = async () => {

        try {

            const response = await api.get(`/products/${id}`);

            setProduct(response.data);

        }

        catch (error) {

            console.log(error);

        }

        finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        getProduct();

    }, [id]);

    if (loading) {

        return (

            <h1 className="text-white text-center mt-20">
                Loading...
            </h1>

        );

    }

    return (

        <div className="max-w-7xl mx-auto px-8 py-10">

            <div className="grid md:grid-cols-2 gap-14">

                <ProductImage
                    image={product.image}
                    title={product.title}
                />

                <ProductInfo
                    product={product}
                />

            </div>

            <RelatedProducts
                category={product.category}
                currentId={product.id}
            />

        </div>

    );

};

export default ProductDetails;