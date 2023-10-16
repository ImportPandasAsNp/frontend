import React from 'react';
import Sidebar from '../components/Sidebar';
import Tiles from "../components/TilesRow";

const Home = () => {
    const recommended = {
        heading: "Recommended for you",
        titles: [
          {
            image:
              "https://occ-0-2365-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVXBb2OIJF5kpOGVZ5TNjIydKyVReN6qd6UC2BJGpHfU1KGl1eaCApGzqcdP6LzCYI1Vt2P8UYL2d7FTP4of0zggLAC7i8TlmTI.webp?r=841",
            platform: "prime",
          },
          {
            image:
              "https://occ-0-2365-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdcz1BS3qcyS6si--XaVyYE39P0BZ04OaaAFARZkRNJhtEpObX_0Vg1r-ieW7MQjIncF0eD4e5wsiTluleq6madOYku0wM_SYgE.webp?r=183",
            platform: "netflix",
          },
          {
            image:
              "https://occ-0-2365-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWLCqe9_JhVUPEIYPW485WQD47kCaXwYY8cT3w4uXYdaYG3LrIk9puaUdfnZ4zAcr3IAzD0V_Odgn72VfOxhqMPGQKHQJSuEXfw.webp?r=696",
            platform: "netflix",
          },
          {
            image:
              "https://occ-0-2365-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYath957UIGX1_LSNPMikiYuTTcjv-yFZPBBqwnoH2EQ7KIoWRLUMHt8gj4mFT37Hwb_nmqM_z_agnS8PMh32eFdGzd0FrQEn8c.webp?r=bd5",
            platform: "netflix",
          },
          {
            image:
              "https://occ-0-2365-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQBfDQFgFupQYov5pQ4k1VGJIyeFjUad48qV4qajtGYE_1TyEQxrT3nToxrVvqj_mb_VcxAJPMmuPN0rO4pOYPnXNhVxOqkVjHk.webp?r=9ff",
            platform: "netflix",
          },
          {
            image:
              "https://occ-0-2365-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABW1w0cR1nRSWPhcsnAPCcnoLvdS0QEVZMEINrTfOouu5r33G_fuYZOZqwIVRw6fGcgul3jJXbQiqekkVMRGW8H3nQ4wD8m3oAL4HFoho3swYOw0O9kDsfQIaOIfnG7S4B-VN.jpg?r=e20",
            platform: "netflix",
          },
        ],
      };
    
      const becauseYouLiked = {
        heading:"Because you liked Shrek The Third",
        titles : recommended.titles
      }
      const fromDirector = {
        heading:"From your favorite director",
        titles : recommended.titles
      }
      const fromActor = {
        heading:"From your favorite actor",
        titles : recommended.titles
      }
    
      return (
        <div className="flex bg-primary">
          <Sidebar />
          <div className="p-7 text-2xl font-semibold gap-10 flex flex-col items-center h-screen w-full overflow-y-scroll">
           <Tiles data={recommended}/>
           <Tiles data={becauseYouLiked}/>
           <Tiles data={fromDirector}/>
           <Tiles data={fromActor}/>
          </div>
        </div>
      );
}

export default Home
