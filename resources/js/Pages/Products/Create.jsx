import { useEffect } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import FormProduct from "./Partials/Form";

const ProductCreate = ({ auth }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        description: "",
        price: "",
        stock: "",
        image: null,
    });

    useEffect(() => {
        return () => {
            reset();
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route("products.store"));
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Add Products
                </h2>
            }
        >
            <Head title="Create Product" />

            <div className="p-6 lg:px-32">
                <FormProduct
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

export default ProductCreate;
