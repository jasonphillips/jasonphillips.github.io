import Ichabod from "../../assets/IchabodExcerpt.mp4"
const React = require("react")

const IchabodPage = () => (
  <>
    <h2>Ichabod &amp; the Butterfly</h2>
    <p>The first 30 seconds of a short animation I made for my wife, originally scripted entirely with vanilla D3 code in a text editor
      (a peculiar self-imposed task, for a challenge), using asset photos from various physical artworks of hers. 
      Beyond moving image assets around with tricky timing and applying various svg filters to the layers, the main challenge was to 
      develop a functional zooming / panning camera for the depth-layered scenes, without incorporating any other libraries or paradigms beyond D3's style of DOM control. 
    </p>
    <video controls height={300}>
      <source src={Ichabod} type="video/mp4" />
    </video>
  </>
)

export default IchabodPage