export default function SearchBar({filterText, inStockOnly,onInStockOnlyChange, onFilterTextChange}) {
    return (
        <>
        <form>
            <div className="input-group my-4 container">
                <input type="text"  value={filterText} className="form-control " placeholder="Search..." aria-label="Username" aria-describedby="basic-addon1"
                onChange={(e) => onFilterTextChange(e.target.value)} />
            </div>
            <div className="form-check me-5 container form-switch">
            <label>
                <input className="form-check-input" checked={inStockOnly} type="checkbox" role="switch" id="flexSwitchCheckDefault"
                onChange={(e) => onInStockOnlyChange(e.target.checked)}/>
                {' '}
                <strong>Show Products in Stock</strong>
                </label>
            </div>
        </form>
        </>
    );
}