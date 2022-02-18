const service = () => {
    const getAllProducts = () => {
        const response = fetch(
            "https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&q=shoes&currency=USD&sizeSchema=US&lang=en-US",
            {
                method: "GET",
                headers: {
                    "x-rapidapi-host": "asos2.p.rapidapi.com",
                    "x-rapidapi-key":
                        "b37fc0b8e8mshbe5101d64550532p167de9jsn854593e8731b",
                },
            }
        )
            .then((res) => res.json())
            .then((data) => data.products)
            .catch((err) => err);

        return response;
    };

    return { getAllProducts };
};

export const ProductService = service();
