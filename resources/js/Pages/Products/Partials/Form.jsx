import React from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";

const MAX_FILE_SIZE = 2 * 1024 * 1024;
const FormProduct = ({
    data,
    setData,
    submit,
    errors,
    processing,
    isEdit = false,
}) => {
    console.log(isEdit);
    const handleFileChange = (e) => {
        console.log("masuk sini");
        const file = e.target.files[0];
        console.log(file);
        if (file && file.size > MAX_FILE_SIZE) {
            setData("image", null);
        } else {
            console.log("sni");
            setData("image", file);
        }
    };

    console.log("setDat", data);
    return (
        <div className="bg-white rounded-lg p-10">
            <form onSubmit={submit}>
                <div className="mb-4">
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("name", e.target.value)}
                        required={!isEdit}
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mb-4">
                    <InputLabel htmlFor="description" value="Description" />

                    <textarea
                        id="description"
                        name="description"
                        value={data.description}
                        className="mt-1 block w-full h-32 resize-none border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        onChange={(e) => setData("description", e.target.value)}
                        required={!isEdit}
                    />

                    <InputError message={errors.description} className="mt-2" />
                </div>

                <div className="mb-4">
                    <InputLabel htmlFor="price" value="Price" />

                    <TextInput
                        id="price"
                        name="price"
                        type="number"
                        value={data.price}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("price", e.target.value)}
                        required={!isEdit}
                    />

                    <InputError message={errors.price} className="mt-2" />
                </div>

                <div className="mb-4">
                    <InputLabel htmlFor="stock" value="Stock" />

                    <TextInput
                        id="stock"
                        name="stock"
                        type="number"
                        value={data.stock}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("stock", e.target.value)}
                        required={!isEdit}
                    />

                    <InputError message={errors.stock} className="mt-2" />
                </div>

                <div className="mb-4">
                    <InputLabel htmlFor="image" value="Image" />

                    <TextInput
                        id="image"
                        type="file"
                        className="block w-full mt-1"
                        onChange={handleFileChange}
                        required={!isEdit}
                        accept=".png,.jpg,.jpeg"
                    />

                    <InputError message={errors.image} className="mt-2" />
                </div>

                <PrimaryButton disabled={processing || errors.length > 0}>
                    {isEdit ? "SAVE" : "CREATE"}
                </PrimaryButton>
            </form>
        </div>
    );
};

export default FormProduct;
