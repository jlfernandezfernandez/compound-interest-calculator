import Product from "./Product";

export default function ProductList() {
    return (
      <section>
          <div className="mb-4 p-4">
            {/* Aquí se podría renderizar el componente de tarjeta específico según product.type */}
            <Product productType="inversion"/>
          </div>
          <div className="mb-4 p-4">
            {/* Aquí se podría renderizar el componente de tarjeta específico según product.type */}
            <Product productType="pensión"/>
          </div>
          <div className="mb-4 p-4s">
            {/* Aquí se podría renderizar el componente de tarjeta específico según product.type */}
            <Product productType="cuenta"/>
          </div>
      </section>
    );
  }