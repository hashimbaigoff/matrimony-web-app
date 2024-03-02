import FormLabel from "./FormLabel";

import "../assets/styles/form.css"

const options = [
    ["Men", "Women"]
]

export default function Form() {
    return (
        // <form action="" className="matrimony-form">
        //     <FormLabel labelTitle="I'm Lookin for" selectOptions={options}/>
        // </form>
        <div >
            <form className="container">

                <div>
                    <label>Im Looking for</label>
                    <select>
                        <option>Select</option>
                        <option value="Women">Women</option>
                        <option value="Men">Men</option>
                    </select>
                </div>

                <div>
                    <label>aged</label>
                    <input type="number" id="hour" min="1" max="100" />
                </div>
                <div>
                    <label for="hour">to:</label>
                    <input type="number" id="hour" min="1" max="100" />
                </div>


                <div>
                    <label>of Religion</label>
                    <select>
                        <option>Select</option>
                        <option>Hindu</option>
                        <option>Muslim</option>
                        <option>Christian</option>
                        <option>Jain</option>
                        <option>Sikh</option>
                        <option>Buddist</option>
                    </select>
                </div>


                <div>
                    <label>and Mother tongue</label>
                    <select>
                        <option>Select</option>
                        <option>Telugu</option>
                        <option>Hindi</option>
                        <option>English</option>
                        <option>Tamil</option>
                        <option>Malayalam</option>
                        <option>Kannada</option>
                    </select>
                </div>


                    <button className="form-btn">Let's Begin</button>
                


            </form>

        </div>
    );
}