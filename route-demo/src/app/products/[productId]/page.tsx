export default function Products ({params}: {params: {productId: string}}) {
     const {productId} = params;    
    console.log('Product ID:', productId);
   
     const product = params.productId; 
  return (
    <div>
     <h1> Products Details {product} </h1>
    </div>
  );
}