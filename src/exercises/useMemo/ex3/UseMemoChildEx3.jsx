import React from 'react'

function UseMemoChildEx3({products, onSelect}) {

    console.log('Child render');
    
  return (
    <div>
        {products.map((product) => (
            <div key={product.id}>
                <p>{product.name} - ${product.price.toLocaleString('il-HE')}</p>
                <button onClick={() => onSelect(product)}>Select</button>
            </div>
        ))}
    </div>
  )
}

export default React.memo(UseMemoChildEx3)
