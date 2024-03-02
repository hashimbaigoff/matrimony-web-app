export default function FormLabel({labelTitle, selectOptions}) {
    return (
        <div className="input-containers">
            <label htmlFor="">{labelTitle}</label>
            <select name="" id="">
                {
                    selectOptions.map(
                        (item, index)=> {
                            return <option key={index} value="">{item}</option>
                        }
                    )
                }
            </select>
        </div>
    );
}