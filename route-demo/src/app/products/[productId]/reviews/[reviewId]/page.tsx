export default function review ({params}: {params: {productId: string, reviewId: string}}) {
  const {productId, reviewId} = params;
  return ( <div>

<h1>{reviewId} for review product- {productId}  </h1>


  </div>
    
      
  );
}