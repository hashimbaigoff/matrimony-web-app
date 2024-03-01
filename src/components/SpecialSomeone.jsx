import SomeoneCard from "./SomeoneCard";

import "../assets/styles/someone.css"
import squarePen from "../assets/icons/square-pen.png"
import communication from "../assets/icons/communication.png"
import inLove from "../assets/icons/in-love.png"

export default function SpecialSomeone() {
    return (
        <section className="someone-container">
            <h2 className="someone-main-heading">Find your Special Someone</h2>
            <div className="someone-icon-container">
                <SomeoneCard heading={"Sign Up"} description={"Register for free & put up your Matrimony Profile"} icon={squarePen}/>
                <SomeoneCard heading={"Connect"} description={"Select & Connect with Matches you like"} icon={inLove}/>
                <SomeoneCard heading={"Interact"} description={"Become a premium Member & Start a Conversation"} icon={communication}/>
            </div>
        </section>
    );
}