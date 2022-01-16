const ProductFeed = ({ products }) => {
  return (
    <div>
      {products.map(({ id, title, price, description, category, image }) => (
        <p key={title}>{title}</p>
      ))}
    </div>
  );
};

export default ProductFeed;
