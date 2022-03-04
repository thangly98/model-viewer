var files = [
  { src: 'https://modelviewer.dev/assets/ShopifyModels/Chair.glb' },
  { src: 'https://modelviewer.dev/assets/ShopifyModels/GeoPlanter.glb' },
  { src: 'https://modelviewer.dev/assets/ShopifyModels/ToyTrain.glb' },
]

document.getElementById('list').innerHTML = files
  .map(
    (item) =>
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
  .join('')
