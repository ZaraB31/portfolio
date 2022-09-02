import React from "react";
import Logo from "./images/Logo.png";

function home() {
    return (
        <main>
            <section className="black logo">
                <img src={ Logo } alt="" />
            </section>
            <section>
                <h2>About Me</h2>
            </section>
            <section className="black">
                <h2>My Skills</h2>
            </section>
            <section>
                <h2>My Work</h2>
            </section>
        </main>
    );
}

export default home