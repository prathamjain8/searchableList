import React, { useState } from 'react';
import ProductTabele from "./ProductTable";
import SearchBar from "./SearchBar";
export default function FilterableTbale({ products }) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    return (
        <div>
            <SearchBar filterText={filterText} inStockOnly={inStockOnly} onFilterTextChange={setFilterText} onInStockOnlyChange={setInStockOnly} />
            <ProductTabele products={products} filterText={filterText} inStockOnly={inStockOnly} />
        </div>
    );
}
