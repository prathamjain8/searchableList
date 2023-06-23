export default function ProductRow({ product }) {
    const name = product.stocked ? product.name :<p style={{ color: "red" }}>{product.name}</p>;
    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
}