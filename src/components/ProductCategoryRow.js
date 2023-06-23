export default function ProductCategoryRow({ category }) {
    return (
        <tr>
            <th colSpan="2" className="text-center">{category}</th>
        </tr>
    );
}