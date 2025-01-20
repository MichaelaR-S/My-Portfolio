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

let count = 1;
document.getElementById('radio1').checked = true;

setInterval( function() {
    nextImage();

}, 3000)

function nextImage() {
    count++;
    if(count>2){
        count=1;
    }

    document.getElementById('radio'+count).checked = true;
}

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
      Assignment 1
      Breakthrough
      
        <div class="three-model">
          <div class="slider">
            <div class="slides
            <input type="radio" name="radio-btn" id="radio1">
          <input type="radio" name="radio-btn" id="radio2">

          <div class="slide first">
              <a href="./exquisiteCadavre/Final Cadavre.png" target="_blank">
              <img src="./exquisiteCadavre/Final Cadavre.png" alt="finalcadaver" />
               </a>
          </div>

          <div class="slide first">
            <a href="./exquisiteCadavre/Annimation.gif" target="_blank">    
            <img src="./exquisiteCadavre/Annimation.gif" alt="annimation" />
            </a>
          </div>

          <div class="manual-navigation">
          <label for="radio1" class="manual-btn"></label>
          <label for="radio2" class="manual-btn"></label>
          </div>
      </div>
        
        </div>

        <div id="images-description">
          <div id="images">
            <div id="images">
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
          <h4 id="description">
          Shattering the glass ceiling beyond repair to provide the space for societal evolutions such as: 
          Eco architecture and green energy sources to promote sustainability within the city
          Architectural developments that integrate technology and creativity;
          Inclusivity and accessibility to resources, education, and opportunities for all races, genders and abilities;
          Technological innovations in various interdisciplinary fields;
          Women and people of colour in positions of leadership, and authority. 
          </h4>
          <a href="./exquisiteCadavre/Breakthrough - Manifesto.pdf">
            Manifesto
              </a>
          <a href="./exquisiteCadavre/Breakthrough - Sources.pdf">
            Sources
              </a>
          </div>
      </div>
      

      ${/* Model 2 commented out
      <div id="project-row">
      Model 2
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${trees
              .map(
                (trees, index) =>
                  `<img src="${trees}" alt="tree${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D tree model is a geometric representation of a tree, featuring a trunk, branches, and foliage. The trunk is typically cylindrical, with textured bark, while the branches extend outward to support leaves or a canopy. It may include roots or flowers for added detail.</h4>
        </div>
      </div>
      */""}

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
//createThreeScene("#model1", "/3DModels/project1/cube.obj");
//*createThreeScene("#model2", "/3DModels/project2/tree.obj");
//createThreeScene("#model3", "/3DModels/project3/cottage.obj");
