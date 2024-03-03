import FormLabel from "./FormLabel";

import "../assets/styles/form.css"

const formLabelOptions = {
    gender: ["Women", "Men"],
    agedFrom: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    agedTo: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    caste: ["Reddy",
        "Kamma",
        "Kapu",
        "Balija",
        "Brahmin",
        "Velama",
        "Yadav",
        "Mala",
        "Madiga"]
}

export default function Form() {
    return (
            <form className="form-container"> 
                <FormLabel labelTitle="I'm looking for" selectOptions={formLabelOptions.gender}/>
                <FormLabel labelTitle="aged" selectOptions={formLabelOptions.agedFrom} selected="30"/>
                <FormLabel labelTitle="to" selectOptions={formLabelOptions.agedTo}/>
                <FormLabel labelTitle="of Caste" selectOptions={formLabelOptions.caste}/>

                <button className="form-btn">Let's Begin</button>

            </form>
    );
}