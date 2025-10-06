export default function FakeStoreCard({ product }) {
  return (
    <div className="fakestore-card">
      <img src={product.image} alt={product.title} />
      <p className="title">{product.title}</p>
      <p className="price">€ {product.price}</p>
    </div>
  );
}