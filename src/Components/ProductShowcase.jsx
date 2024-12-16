import React from 'react';

const ProductShowcase = () => {
    
    const products = [
        {id: 0, name: 'Sweet Thang', price: "$15.00", image: '/src/assets/get some sweet thing in your life (1).png'},
        {id: 1, name: 'Cozy', price: "$25.00", image:'/src/assets/cozy.png', hoverImage: '/src/assets/cozy no spoon.png'},
        {id: 2, name: 'Sunday at 3PM', price: "$17.00", image: '/src/assets/leasteas_Sunday at 3 pm.png', hoverImage: '/src/assets/Sunday at 3 pm no spoon (2).png'},
        {id: 3, name: 'Elderpower', price: "$25.00", image: '/src/assets/leasteas_elderpower.png'},
        {id: 4, name: 'Holy Citrus', price: "$25.00", image: '/src/assets/leasteas_holy citrus.png'},
        {id: 5, name: 'Sunshine', price: "$17.00", image: '/src/assets/leasteas_sunshine.png', hoverImage: '/src/assets/sunshine no spoon.png'},
    ];

    return (
        <section className='ProductsShowcase'>
            <h2>Our Products</h2>
            <div className='products-grid'>
                {products.map((product) => (
                    <div className='product-card' key={product.id}>
                        <img src={product.image} alt={product.name} className='default-image' />
                        <img src={product.hoverImage} alt={`${product.name} hover`} className='hover-image' />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <button>Add to Cart</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductShowcase;