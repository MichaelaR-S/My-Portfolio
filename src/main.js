import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cubes = [
  "./cubeDrawings/cube1.webp",
  "./cubeDrawings/cube2.webp",
  "./cubeDrawings/cube3.webp",
  "./cubeDrawings/cube4.webp",
];

const trees = [
  "./treeDrawings/tree1.jpg",
  "./treeDrawings/tree2.jpg",
  "./treeDrawings/tree3.jpg",
  "./treeDrawings/tree4.jpg",
];

const cadavres = [
  
  "./exquisiteCadavre/Cadavre1.png",
  "./exquisiteCadavre/Cadavre2.png",
  "./exquisiteCadavre/Cadavre3.png",
  "./exquisiteCadavre/Cadavre4.png",
  "./exquisiteCadavre/Cadavre5.png",
  "./exquisiteCadavre/Cadavre6.png",
];



document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
      Assignment 1
      Breakthrough: What does the future look like when we break through the glass ceilings?
      
        <div class="three-model">
        <a href="./exquisiteCadavre/Final Cadavre.png" target="_blank">
          <img src="./exquisiteCadavre/Final Cadavre.png" id="model1" alt="Model 1 Image"/>
        </a>
       
        </div>

        <div id="images-description">
          <div id="images">
            <div id="images">
               <a href="./exquisiteCadavre/Annimation.gif" target="_blank">
              <img src="./exquisiteCadavre/Annimation.gif" alt="annimation" />
               </a>
              <a href="./exquisiteCadavre/Cadavre1.png" target="_blank">
              <img src="./exquisiteCadavre/Cadavre1.png" alt="cadavre1" />
               </a>
              <a href="./exquisiteCadavre/Cadavre2.png" target="_blank">
                <img src="./exquisiteCadavre/Cadavre2.png" alt="cadavre2" />
              </a>
              <a href="./exquisiteCadavre/Cadavre3.png" target="_blank">
                <img src="./exquisiteCadavre/Cadavre3.png" alt="cadavre3" />
              </a>
              <a href="./exquisiteCadavre/Cadavre4.png" target="_blank">
                <img src="./exquisiteCadavre/Cadavre4.png" alt="cadavre4" />
              </a>
              <a href="./exquisiteCadavre/Cadavre5.png" target="_blank">
                <img src="./exquisiteCadavre/Cadavre5.png" alt="cadavre5" />
              </a>
              <a href="./exquisiteCadavre/Cadavre6.png" target="_blank">
                <img src="./exquisiteCadavre/Cadavre6.png" alt="cadavre6" />
              </a>
            </div>
          </div>
          <div>
            <h4 id="description">
            1. The cracked glass represents the breaking of glass ceilings to provide the space for societal evolutions <br></br>
            These societal evolutions include <br></br>
            2. Eco architecture and green energy sources to promote sustainability within the city; <br></br>
            3. Architectural developments that integrate technology and creativity; <br></br>
            4. Inclusivity and accessibility to resources, education, and opportunities for all races, genders and abilities; <br></br>
            5. Technological innovations in various interdisciplinary fields; <br></br>
            6. Women and people of colour in positions of leadership, and authority. 
            </h4>
          </div>
          <div> 
          <a href="./exquisiteCadavre/Breakthrough - Manifesto.pdf">
              Manifesto
            </a>
          </div>
          <div>
        <a href="./exquisiteCadavre/Breakthrough - Sources.pdf">
            Sources
              </a>
          </div>
        </div>
      </div>
      

      
      <div id="project-row">
      Assignment 2
      Interop

        <div id="images-description">
          <div id="images">
            <a href="./InterOp/3DPrinted ModelB.jpg" target="_blank">
              <img src="./InterOp/3DPrinted ModelB.jpg" alt="printB" />
               </a>
            <a href="./InterOp/3D Printed ModelA.jpg" target="_blank">
              <img src="./InterOp/3D Printed ModelA.jpg" alt="printA" />
               </a>
            <a href="./InterOp/Paper Model A.jpg" target="_blank">
              <img src="./InterOp/Paper Model A.jpg" alt="paperA" />
               </a>  
            <a href="./InterOp/Paper Model B.jpg" target="_blank">
              <img src="./InterOp/Paper Model B.jpg" alt="paperB" />
               </a>     
            <a href="./InterOp/Photogrammetry Scan.jpg" target="_blank">
              <img src="./InterOp/Photogrammetry Scan.jpg" alt="printB" />
               </a>        
          </div>
          
          <div>
            <a href="./InterOp/Written Reflection.pdf">
              Written Reflection
            </a>
          </div>
          <div>
            <a href="./InterOp/Comparison Chart.zip">
              Comparison Chart
            </a>
          </div>
        </div>
      </div>
      <div class="three-model">
          <div id="model1"></div>
        </div>
          Simple Pavilion
      <div class="three-model">
          <div id="model2"></div>
        </div>
        Closed Volume
      <div class="three-model">
        <div id="model3"></div>
        </div>
        Character Model - Eve


     ${/* Model 3 commented out
      <div id="project-row">
      Model 3
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
           ${cubes
              .map(
                (cube, index) => `<img src="${cube}" alt="cube${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
        </div>
      </div>
      */""}
    </section>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      ${/*<li>LinkedIn: <a href="${data.contact.linkedin}">${
  data.contact.linkedin
}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${
  data.contact.github*/""}
</a></li>
    </ul>
  </main>
`;


// Create three.js scenes for each
createThreeScene("#model1", "/3DModels/InterOp/SimplePavillion.obj");
createThreeScene("#model2", "/3DModels/InterOp/Torus.obj");
createThreeScene("#model3", "/3DModels/InterOp/Eve Jointed Model1.obj");
