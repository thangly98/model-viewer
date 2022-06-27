var files = [
  {src: "./lib/3d-files/360471_CB2.glb"},
  {src: "./lib/3d-files/A14.glb"},
  {src: "./lib/3d-files/CD-44343.glb"},
  {src: "./lib/3d-files/CD-44491.glb"},
  {src: "./lib/3d-files/YEdM3St8A4FA9FA8FF14BDA.glb"},
  {src: "./lib/3d-files/CD-43867.glb"},
  {src: "./lib/3d-files/xe_ngoc.glb"},
  {src: "./lib/3d-files/3029202.glb"},
  {src: "./lib/3d-files/174N348.glb"},
  {src: "./lib/3d-files/157500_CNB.glb"},
  {src: "./lib/3d-files/627068_CNB.glb"},
  {src: "./lib/3d-files/225466_CNB.glb"},
  {src: "./lib/3d-files/225506_CNB.glb"},
  {src: "./lib/3d-files/593815_CB2.glb"}
];

document.getElementById("list").innerHTML = files
  .map(
    item =>
      `<div class="item">
        <model-viewer
          alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
          src="${item.src}"
          ar
          ar-modes="webxr scene-viewer quick-look"
          seamless-poster
          shadow-intensity="1"
          camera-controls
        >
          <button slot="ar-button" id="ar-button">Click view AR</button></model-viewer
        >
      </div>`
  )
  .join("");
