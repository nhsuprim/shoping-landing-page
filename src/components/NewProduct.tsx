import React from "react";

const NewProduct = () => {
    const data = [
        {
            id: 1,
            name: "JACKET",
            price: 150,
            image: "https://artisanclick.com/wp-content/uploads/2023/12/RESIZE-800x1132.jpg",
            description: "Lorem ipsum dolor sit amet.",
        },
        {
            id: 2,
            name: "COAT",
            price: 200,
            image: "https://www.bodenimages.com/productimages/r1aproductlarge/23waut_u0154_cam.jpg",
            description: "Lorem ipsum dolor sit amet.",
        },
        {
            id: 3,
            name: "HOODIE",
            price: 120,
            image: "https://artisanclick.com/wp-content/uploads/2021/12/274-scaled.jpg",
            description: "Lorem ipsum dolor sit amet.",
        },
        {
            id: 4,
            name: "SHIRT",
            price: 80,
            image: "https://img.freepik.com/free-photo/handsome-hipster-model-man-stylish-summer-clothes-posing-hat_158538-14728.jpg",
            description: "Lorem ipsum dolor sit amet.",
        },
        {
            id: 5,
            name: "T-SHIRT",
            price: 50,
            image: "https://img.freepik.com/free-psd/isolated-white-t-shirt-front-view_125540-1194.jpg",
            description: "Lorem ipsum dolor sit amet.",
        },
        {
            id: 6,
            name: "SWEATER",
            price: 100,
            image: "https://img.freepik.com/free-photo/pink-sweater-front_125540-746.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1719360000&semt=ais_user",
            description: "Lorem ipsum dolor sit amet.",
        },
    ];

    return (
        <div className="container py-6">
            <h1 className="text-3xl text-center">
                New <span className="text-accent">Product</span>
            </h1>
            <div className="flex flex-wrap gap-4">
                {data.map((product) => (
                    <div
                        key={product.id}
                        className="card bg-base-100 w-96 shadow-xl mx-auto"
                    >
                        <figure className="pt-10 ">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="rounded-xl object-cover h-48 w-fit"
                            />
                        </figure>
                        <div className="card-body items-center text-start">
                            <h2 className="card-title text-left text-accent">
                                {product.name}
                            </h2>
                            <p>{product.description}</p>
                            <p className="font-bold">Price: ${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewProduct;
