import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
function ProductTable({ products, inStockOnly, filterText}) {
    const rows = [];
    let lastCategory = null;

    products.forEach((element) => {
        if (element.name.toLowerCase().indexOf(filterText.toLowerCase())===-1) {
            return;
        }
        if (inStockOnly && !element.stocked) {
            return;
          }
        if (element.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow category={element.category} key={element.id} />
            );
        }
        rows.push(
            <ProductRow product={element} key={element.name} />
        );
        lastCategory = element.category;
    });

    return (
            <table className="table table-dark table-hover container my-5">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead> 
                <tbody>
                    {rows}
                </tbody>
            </table>
    );
}
export default ProductTable;
