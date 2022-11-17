import React from "react";
import PDF from './images/Logo.png';

function footer() {
    return (
        <footer>
            <article>
                <a href="https://www.linkedin.com/in/zara-bostock-49857618a/" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/ZaraB31" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>                
                <a href={ PDF } target="pdf-frame _blank" rel="noreferrer"><i class="fa-solid fa-file-arrow-down"></i></a>
            </article>
            <article>
                <p>&copy; Zara Bostock 2022</p>
            </article>
        </footer>
    ); 
}

export default footer