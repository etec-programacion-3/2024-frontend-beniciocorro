import React, { useState, useEffect } from 'react';
import './ProductGrid.css';
import { fetchProductos } from './ProductService'; // Importa las funciones del servicio

const ProductGrid = ({ selectedCategory, searchQuery, onAddToCart }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProductos = async () => {
            try {
                const fetchedProductos = await fetchProductos();
                setProducts(fetchedProductos);
            } catch (err) {
                setError('Error loading productos');
            } finally {
                setLoading(false);
            }
        };

        loadProductos();
    }, []);

    const filteredProducts = products.filter(product => {
        const matchesCategory = !selectedCategory || product.categoria_id === selectedCategory;
        const matchesSearch = product.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              product.descripcion.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="product-grid">
            {filteredProducts.map((product) => (
                <div key={product.id} className="product-card">
                    <div className="product-image-container">
                        <img src={product.imagen_url} alt={product.nombre} className="product-image" />
                        <button
                            className="add-to-cart-button"
                            onClick={() => onAddToCart(product)}
                        >
                            Add to Cart
                        </button>
                    </div>
                    <div className="product-info">
                        <h3 className="product-name">{product.nombre}</h3>
                        <p className="product-description">{product.descripcion}</p>
                        <span className="product-price">${product.precio}</span>
                    </div>
                </div>
            ))}

            {filteredProducts.length === 0 && (
                <div className="no-results">
                    <h2>No products found</h2>
                    <p>Try another search or category</p>
                </div>
            )}
        </div>
    );
};

export default ProductGrid;
