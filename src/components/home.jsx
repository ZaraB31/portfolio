import React from "react";
import Logo from "./images/Logo.png";
import placeholder from "./images/placeholder.jpg";

import antelopeManagement from "./images/antelopeManagement.png";
import antelopeAdmin from "./images/antelope-admin.png";
import antelopeContact from "./images/antelope-contact.png";
import antelopeDashboard from "./images/antelope-dashboard.png";
import antelopeProject from "./images/antelope-project.png";

import doggiewalksHome from "./images/doggiewalks - home.png";
import doggiewalksContact from "./images/doggiewalks - contact.png";
import doggiewalksFooter from "./images/doggiewalks - footer.png";
import doggiewalksGallery from "./images/doggiewalks - gallery.png";
import doggiewalksTeam from "./images/doggiewalks - team.png";

import aParryConstruction from "./images/aParryConstruction.png";
import parrysAbout from "./images/parrys - about.png";
import parrysHome from "./images/parrys - home.png";
import parrysStudy from "./images/parrys - casestudy.png";
import parrysContact from "./images/parrys - contact.png";

import megaevHome from "./images/megaev-home.png";
import megaevBlog from "./images/megaev-blog.png";
import megaevBrands from "./images/megaev-brands.png";
import megaevContact from "./images/megaev-contact.png";
import megaevTwitter from "./images/megaev-twitter.png";

function home() {
    
    const open = (project) => {
        const element = document.getElementById(project);
        element.style.display = "block";
    }

    const close = (project) => {
        const element = document.getElementById(project);
        element.style.display = "none";
    }

    const openImage = (number, project) => {
        var image = document.getElementById(number);
        var project = document.getElementById(project);
        var expandImg = project.querySelector("#expandedImage");
        var imgText = project.querySelector('#imageText');
        expandImg.src = image.src;
        imgText.innerHTML = image.alt;
    }

    return (
        <main>
            <section className="black logo">
                <img src={ Logo } alt="" />
            </section>

            <section className="about">
                <h1>About Me</h1>
                <article>
                    <img src={ placeholder} alt="" />
                    <div>
                        <p>Hi, I'm Zara, a full stack developer based in North Wales. I started my coding journey in 2018 
                            and from there went on to recieve a 2:1 degree in Website Design and Developement from Edge 
                            Hill University. Since graduating in 2022 I have been working freelance, creating projects 
                            for local businesses, as well as personal projects to develop my skills further.
                        </p>
                    </div>
                </article>
            </section>

            <section className="black skills">
                <h2>My Skills</h2>
                <article>
                    <div>
                        <i className="fa-brands fa-html5"></i>
                        <h3>HTML</h3>
                    </div>
                    <div>
                        <i className="fa-brands fa-css3-alt"></i>
                        <h3>CSS</h3>
                    </div>
                    <div>
                        <i className="fa-brands fa-js"></i>
                        <h3>JavaScript</h3>
                    </div>
                    <div>
                        <i className="fa-brands fa-php"></i>
                        <h3>PHP</h3>
                    </div>
                    <div>
                        <i className="fa-brands fa-laravel"></i>
                        <h3>Laravel</h3>
                    </div>
                    <div>
                        <i className="fa-solid fa-database"></i>
                        <h3>MySQL</h3>
                    </div>
                    <div>
                        <i className="fa-brands fa-react"></i>
                        <h3>React</h3>
                    </div>
                    <div>
                        <i className="fa-brands fa-sass"></i>
                        <h3>SASS</h3>
                    </div>
                </article>
            </section>

            <section className="project">
                
                
                <div className="hiddenGallery" id="antelopeManagement" style={{display: "none"}}>
                    <button onClick={() => close("antelopeManagement")}><i class="fa-solid fa-xmark"></i></button>
                    
                    <div className="container">
                        <img id="expandedImage" src=" "/>
                        <p id="imageText"></p>
                    </div>

                    <div className="thumbnails">
                        <div className="imageThumb">
                            <img id="antelopeDashboard" src={ antelopeDashboard } alt="Antelope management project dashboard" onClick={() => openImage("antelopeDashboard", "antelopeManagement")}/>
                        </div>

                        <div className="imageThumb">
                            <img id="antelopeAdmin" src={ antelopeAdmin } alt="Antelope management admin dashboard" onClick={() => openImage("antelopeAdmin", "antelopeManagement")}/>
                        </div>

                        <div className="imageThumb">
                            <img id="antelopeContact" src={ antelopeContact } alt="Antelope management contact book" onClick={() => openImage("antelopeContact", "antelopeManagement")}/>
                        </div>

                        <div className="imageThumb">
                            <img id="antelopeProject" src={ antelopeProject } alt="Antelope management project display" onClick={() => openImage("antelopeProject", "antelopeManagement")}/>
                        </div>
                    </div>
                </div>

                <h3>Antelope Management</h3>

                <img src={ antelopeManagement } alt="Antelope management user dashboard" />

                
                <div className="skillsContainer">
                    <p><i className="fa-brands fa-php"></i> PHP</p>
                    <p><i className="fa-brands fa-laravel"></i> Laravel</p>
                    <p><i className="fa-solid fa-database"></i> MySQL</p>
                </div>
                <p>Antelope Management is a custom designed, operations management application developed for Mega Electrical 
                    and A Parry Construction. The application is a Laravel project which uses Sass and MySQL. Database modeling techniques 
                    such as ERDs and Activity diagrams were used during development, before a Figma design was mocked up.
                </p>
                <div className="buttons">
                    <button><a onClick={() => open("antelopeManagement")}>View Gallery</a></button>
                    <button><a href="https://github.com/ZaraB31/AntelopeManagement2.0" target="_blank">View Code</a></button>
                </div>   
            </section>

            <section className="project black">

                <div className="hiddenGallery" id="aParryConstruction" style={{display: "none"}}>
                    <button onClick={() => close("aParryConstruction")}><i class="fa-solid fa-xmark"></i></button>
                    
                    <div className="container">
                        <img id="expandedImage" src=" "/>
                        <p id="imageText"></p>
                    </div>

                    <div className="thumbnails">
                        <div className="imageThumb">
                            <img id="parrysHome" src={ parrysHome } alt="A Parry construction home page after loading video" onClick={() => openImage("parrysHome", "aParryConstruction")}/>
                        </div>

                        <div className="imageThumb">
                            <img id="parrysAbout" src={ parrysAbout } alt="A Parry Construction about us page" onClick={() => openImage("parrysAbout", "aParryConstruction")}/>
                        </div>

                        <div className="imageThumb">
                            <img id="parrysStudy" src={ parrysStudy } alt="A Parry construction case study" onClick={() => openImage("parrysStudy", "aParryConstruction")}/>
                        </div>

                        <div className="imageThumb">
                            <img id="parrysContact" src={ parrysContact } alt="A Parry Construction contact form" onClick={() => openImage("parrysContact", "aParryConstruction")}/>
                        </div>
                    </div>
                </div>

                <h3>A Parry Construction</h3>
                <img src={ aParryConstruction } alt="" />

                <div className="skillsContainer">
                    <p> <i className="fa-brands fa-html5"></i> HTML5</p>
                    <p><i className="fa-brands fa-css3-alt"></i> CSS3</p>
                    <p><i className="fa-brands fa-js"></i> JavaScript</p>
                </div>

                <p>A Parry Construction are a construction company based in North Wales. I was asked to create a new website to 
                    generate more work. They did not have a website previously so I had a clean slate for design. I opted to 
                    keep the design simple to highlight the photos displaying their work.
                </p>

                <div className="buttons">
                    <button><a onClick={() => open("aParryConstruction")}>View Gallery</a></button>
                    <button><a href="https://github.com/ZaraB31/AParryConstruction" target="_blank">View Code</a></button>
                </div>
            </section>

            <section className="project">

                <div className="hiddenGallery" id="doggieWalks" style={{display: "none"}}>
                    <button onClick={() => close("doggieWalks")}><i class="fa-solid fa-xmark"></i></button>
                    
                    <div className="container">
                        <img id="expandedImage" src=" "/>
                        <p id="imageText"></p>
                    </div>

                    <div className="thumbnails">
                        <div className="imageThumb">
                            <img id="doggiewalksFooter" src={ doggiewalksFooter } alt="Doggie Walks hills inspired footer" onClick={() => openImage("doggiewalksFooter", "doggieWalks")}/>
                        </div>

                        <div className="imageThumb">
                            <img id="doggiewalksTeam" src={ doggiewalksTeam } alt="Doggie Walks meet the team page" onClick={() => openImage("doggiewalksTeam", "doggieWalks")}/>
                        </div>

                        <div className="imageThumb">
                            <img id="doggiewalksGallery" src={ doggiewalksGallery } alt="Doggie Walks image gallery" onClick={() => openImage("doggiewalksGallery", "doggieWalks")}/>
                        </div>

                        <div className="imageThumb">
                            <img id="doggiewalksContact" src={ doggiewalksContact } alt="Doggie Walks contact page" onClick={() => openImage("doggiewalksContact", "doggieWalks")}/>
                        </div>
                    </div>
                </div>

                <h3>Doggie Walks</h3>
                <img src={ doggiewalksHome } alt="" />
                <div className="skillsContainer">
                    <p><i className="fa-brands fa-react"></i> React</p>
                    <p><i className="fa-brands fa-sass"></i> SASS</p>
                </div>
                <p>Doggie Walks is a project I completed in university. This was my first oppertunity to design accoring 
                    to a customer specification form. This was also my first time developing using React and Sass. 
                    All of the content and images were provided by the university.
                </p>
                <div className="buttons">
                    <button><a onClick={() => open("doggieWalks")}>View Gallery</a></button>
                    <button><a href="https://bitbucket.org/24190241/doggiewalks/src" target="_blank">View Code</a></button>
                </div>
            </section>

            <section className="project black">

                <div className="hiddenGallery" id="megaEV" style={{display: "none"}}>
                    <button onClick={() => close("megaEV")}><i class="fa-solid fa-xmark"></i></button>
                    
                    <div className="container">
                        <img id="expandedImage" src=" "/>
                        <p id="imageText"></p>
                    </div>

                    <div className="thumbnails">
                        <div className="imageThumb">
                            <img id="megaevTwitter" src={ megaevTwitter } alt="Mega EV twitter feed" onClick={() => openImage("megaevTwitter", "megaEV")}/>
                        </div>

                        <div className="imageThumb">
                            <img id="megaevBrands" src={ megaevBrands } alt="Mega EV brands page" onClick={() => openImage("megaevBrands", "megaEV")}/>
                        </div>

                        <div className="imageThumb">
                            <img id="megaevBlog" src={ megaevBlog } alt="Mega EV blog post" onClick={() => openImage("megaevBlog", "megaEV")}/>
                        </div>

                        <div className="imageThumb">
                            <img id="megaevContact" src={ megaevContact } alt="Mega EV contact page" onClick={() => openImage("megaevContact", "megaEV")}/>
                        </div>
                    </div>
                </div>

                <h3>Mega EV</h3>
                <img src={ megaevHome } alt="Mega EV Home page" />
                <div className="skillsContainer">
                    <p><i className="fa-brands fa-php"></i> PHP</p>
                    <p><i className="fa-brands fa-laravel"></i> Laravel</p>
                    <p><i className="fa-solid fa-database"></i> MySQL</p>
                </div>
                <p>Mega EV is the child company of Mega Electrical which specialises in the installation of electric car chargers. 
                    They had a previous website but were looking to take the company in a new direction, so they asked me to create 
                    a new site were they could focus on displaying their work. I developed the site to have a back office to create and 
                    update the content, as well as recieve enquiries.
                </p>
                <div className="buttons">
                    <button><a onClick={() => open("megaEV")}>View Gallery</a></button>
                    <button><a href="https://github.com/ZaraB31/MegaEV" target="_blank">View Code</a></button>
                </div>
            </section>        
        </main>
    );
}

export default home