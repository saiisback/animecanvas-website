import React from 'react';

const products = [
  { id: 1, name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES', price: '$125', imageUrl: 'link-to-shoe1-image' },
  { id: 2, name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES', price: '$125', imageUrl: 'link-to-shoe2-image' },
  { id: 3, name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES', price: '$125', imageUrl: 'link-to-shoe3-image' },
  { id: 4, name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES', price: '$125', imageUrl: 'link-to-shoe4-image' },
];

// Define a custom type for styles
interface StyleProperties extends React.CSSProperties {
  [key: string]: any; // Allow additional properties
}

const styles: { [key: string]: StyleProperties } = {
  container: {
    backgroundColor: '#f3f4f6',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#3264fe',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '40px',
  },
  productList: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '15px',
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '15px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    width: '23%',
    textAlign: 'center',
    position: 'relative',
  },
  productContainer: {
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '15px',
  },
  productName: {
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  productPrice: {
    color: '#ff6b6b',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  newBadge: {
    backgroundColor: '#3264fe',
    color: '#fff',
    padding: '3px 8px',
    borderRadius: '4px',
    fontSize: '0.7rem',
    position: 'absolute',
    top: '15px',
    left: '15px',
  },
  viewProductButton: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '4px',
  },
};

function ProductCard({ product }: { product: { id: number; name: string; price: string; imageUrl: string } }) {
  return (
    <div style={styles.productCard}>
      <div style={styles.productContainer}>
        <span style={styles.newBadge}>New</span>
        <img style={styles.productImage} src={product.imageUrl} alt={product.name} />
      </div>
      <h3 style={styles.productName}>{product.name}</h3>
      <p style={styles.productPrice}>{product.price}</p>
      <button style={styles.viewProductButton}>View Product</button>
    </div>
  );
}

function FeaturedProducts() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Don't Miss Out<br />New Drops</h1>
      <button style={styles.button}>Shop New Drops</button>
      <div style={styles.productList}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;