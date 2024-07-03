import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const Index = ({ auth, products }) => {
    console.log(products);
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Products
                </h2>
            }
        >
            <Head title="Products" />
            <div className="p-20">
                {products.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="table-auto min-w-full bg-white border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">Description</th>
                                    <th className="px-4 py-2">Price</th>
                                    <th className="px-4 py-2">Stock</th>
                                    <th className="px-4 py-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <tr
                                        key={product.id}
                                        className="border-b border-gray-200"
                                    >
                                        <td className="px-4 py-2">
                                            {product.name}
                                        </td>
                                        <td className="px-4 py-2">
                                            {product.description}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            ${product.price}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {product.stock}
                                        </td>
                                        <td className="px-4 py-2 flex justify-center">
                                            <a
                                                href={`/products/${product.id}`}
                                                className="text-blue-600 hover:text-blue-900 mr-2"
                                            >
                                                View
                                            </a>
                                            <a
                                                href={`/products/${product.id}/edit`}
                                                className="text-green-600 hover:text-green-900 mr-2"
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
                                                    className="text-red-600 hover:text-red-900"
                                                >
                                                    Delete
                                                </button>
                                            </form>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="alert alert-info bg-blue-100 border border-blue-300 text-blue-900 px-4 py-3 rounded">
                        <p>No products found.</p>
                    </div>
                )}
                <a
                    href="/products/create"
                    className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
                >
                    Add Product
                </a>
            </div>
        </Authenticated>
    );
};

export default Index;
