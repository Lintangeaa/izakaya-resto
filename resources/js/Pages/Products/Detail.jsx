import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const ProductDetail = ({ auth, product }) => {
    console.log(product);
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Product Detail
                </h2>
            }
        >
            <Head title={`Product Detail - ${product.name}`} />
            <div className="p-6">
                <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="p-4 flex justify-between">
                        <div>
                            <h2 className="text-xl font-semibold mb-2">
                                {product.name}
                            </h2>
                            <p className="text-gray-700 mb-4">
                                {product.description}
                            </p>
                            <div className="flex items-center mb-4">
                                <span className="text-gray-700 mr-2">
                                    Price:
                                </span>
                                <span className="font-semibold">
                                    ${product.price}
                                </span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-gray-700 mr-2">
                                    Stock:
                                </span>
                                <span className="font-semibold">
                                    {product.stock}
                                </span>
                            </div>
                        </div>
                        <img src={product.image} alt="Image" />
                    </div>
                    <div className="p-4 border-t border-gray-200">
                        <a
                            href={`/products/${product.id}/edit`}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                        >
                            Edit
                        </a>
                        <form
                            action={`/products/${product.id}`}
                            method="POST"
                            className="inline-block"
                        >
                            <input
                                type="hidden"
                                name="_method"
                                value="DELETE"
                            />
                            <button
                                type="submit"
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Delete
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default ProductDetail;
