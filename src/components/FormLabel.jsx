export default function FormLabel({ labelTitle, selectOptions }) {
    return (
        <div className="input-container">
                <label>{labelTitle}</label>
                <select className="form-select">
                    {
                        selectOptions.map((items, index)=> {
                            return  <option key={index} value={items}>{items}</option>
                        })
                    }
                </select>
        </div>
    );
}