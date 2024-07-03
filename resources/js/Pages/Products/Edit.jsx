import { useEffect } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import FormProduct from "./Partials/Form";

const ProductEdit = ({ auth, product }) => {
    console.log(product);
    const { data, setData, put, processing, errors, reset } = useForm({
        name: product.name,
        description: product.description,
        price: product.price,
        stock: product.stock,
        image: product.image,
    });

    useEffect(() => {
        return () => {
            reset();
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        put(route("products.update", product));
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Product
                </h2>
            }
        >
            <Head title="Create Product" />

            <div className="p-6 lg:px-32">
                <FormProduct
                    isEdit
                    setData={setData}
                    data={data}
                    errors={errors}
                    processing={processing}
                    submit={submit}
                />
            </div>
        </Authenticated>
    );
};

export default ProductEdit;
