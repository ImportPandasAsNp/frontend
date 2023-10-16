import React from 'react';
import Sidebar from '../components/Sidebar';
import Tiles from '../components/TilesRow';

const Search = () => {

    const result = {
        heading: "Recommended for you",
        titles: [
          {
            name:"Seinfeld",
            image:
              "https://occ-0-2365-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVXBb2OIJF5kpOGVZ5TNjIydKyVReN6qd6UC2BJGpHfU1KGl1eaCApGzqcdP6LzCYI1Vt2P8UYL2d7FTP4of0zggLAC7i8TlmTI.webp?r=841",
            platform: "prime",
            genre:["comedy"],
            description:"Jerry Seinfeld and his friends navigate New York's ups and downs in this iconic 'nothing'-based sitcom."
          },
          {name:"Rick and Morty",
            image:
              "https://occ-0-2365-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdcz1BS3qcyS6si--XaVyYE39P0BZ04OaaAFARZkRNJhtEpObX_0Vg1r-ieW7MQjIncF0eD4e5wsiTluleq6madOYku0wM_SYgE.webp?r=183",
            platform: "netflix",
            genre:["comedy","scifi"],
            description:"Join the eccentric scientist Rick Sanchez and his good-hearted but easily influenced grandson, Morty, in a series of wild interdimensional adventures."
          },
          {name:"Better Call Saul",
            image:
              "https://occ-0-2365-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWLCqe9_JhVUPEIYPW485WQD47kCaXwYY8cT3w4uXYdaYG3LrIk9puaUdfnZ4zAcr3IAzD0V_Odgn72VfOxhqMPGQKHQJSuEXfw.webp?r=696",
            platform: "netflix",
            genre:["drama","thriller","crime"],
            description:"Explore the origin story of the infamous lawyer Saul Goodman in this prequel to Breaking Bad, navigating the complex world of law and morality."
          },
          { name:"Suits",
            image:
              "https://occ-0-2365-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYath957UIGX1_LSNPMikiYuTTcjv-yFZPBBqwnoH2EQ7KIoWRLUMHt8gj4mFT37Hwb_nmqM_z_agnS8PMh32eFdGzd0FrQEn8c.webp?r=bd5",
            platform: "netflix",
            genre:["drama","crime","comedy"],
            description:"Experience the high-stakes legal world through the eyes of Mike Ross, a brilliant but unconventional legal prodigy, and his mentor Harvey Specter."
          },
          {name:"Breaking Bad",
            image:
              "https://occ-0-2365-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQBfDQFgFupQYov5pQ4k1VGJIyeFjUad48qV4qajtGYE_1TyEQxrT3nToxrVvqj_mb_VcxAJPMmuPN0rO4pOYPnXNhVxOqkVjHk.webp?r=9ff",
            platform: "netflix",
            genre:["drama","thriller","crime"],
            description:"Follow Walter White, a desperate high school chemistry teacher turned ruthless methamphetamine kingpin, in this gripping crime drama."
          },
          { name:"Bojack Horseman",
            image:
              "https://occ-0-2365-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABW1w0cR1nRSWPhcsnAPCcnoLvdS0QEVZMEINrTfOouu5r33G_fuYZOZqwIVRw6fGcgul3jJXbQiqekkVMRGW8H3nQ4wD8m3oAL4HFoho3swYOw0O9kDsfQIaOIfnG7S4B-VN.jpg?r=e20",
            platform: "netflix",
            genre:["drama","comedy"],
            description:"Enter the world of Bojack Horseman, a washed-up Hollywood actor navigating life's ups and downs in this darkly comedic animated series."
          },
          {
            name:"Seinfeld",
            image:
              "https://occ-0-2365-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVXBb2OIJF5kpOGVZ5TNjIydKyVReN6qd6UC2BJGpHfU1KGl1eaCApGzqcdP6LzCYI1Vt2P8UYL2d7FTP4of0zggLAC7i8TlmTI.webp?r=841",
            platform: "prime",
            genre:["comedy"],
            description:"Jerry Seinfeld and his friends navigate New York's ups and downs in this iconic 'nothing'-based sitcom."
          },
          {name:"Rick and Morty",
            image:
              "https://occ-0-2365-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdcz1BS3qcyS6si--XaVyYE39P0BZ04OaaAFARZkRNJhtEpObX_0Vg1r-ieW7MQjIncF0eD4e5wsiTluleq6madOYku0wM_SYgE.webp?r=183",
            platform: "netflix",
            genre:["comedy","scifi"],
            description:"Join the eccentric scientist Rick Sanchez and his good-hearted but easily influenced grandson, Morty, in a series of wild interdimensional adventures."
          },
          {name:"Better Call Saul",
            image:
              "https://occ-0-2365-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWLCqe9_JhVUPEIYPW485WQD47kCaXwYY8cT3w4uXYdaYG3LrIk9puaUdfnZ4zAcr3IAzD0V_Odgn72VfOxhqMPGQKHQJSuEXfw.webp?r=696",
            platform: "netflix",
            genre:["drama","thriller","crime"],
            description:"Explore the origin story of the infamous lawyer Saul Goodman in this prequel to Breaking Bad, navigating the complex world of law and morality."
          },
          { name:"Suits",
            image:
              "https://occ-0-2365-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYath957UIGX1_LSNPMikiYuTTcjv-yFZPBBqwnoH2EQ7KIoWRLUMHt8gj4mFT37Hwb_nmqM_z_agnS8PMh32eFdGzd0FrQEn8c.webp?r=bd5",
            platform: "netflix",
            genre:["drama","crime","comedy"],
            description:"Experience the high-stakes legal world through the eyes of Mike Ross, a brilliant but unconventional legal prodigy, and his mentor Harvey Specter."
          },
          {name:"Breaking Bad",
            image:
              "https://occ-0-2365-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQBfDQFgFupQYov5pQ4k1VGJIyeFjUad48qV4qajtGYE_1TyEQxrT3nToxrVvqj_mb_VcxAJPMmuPN0rO4pOYPnXNhVxOqkVjHk.webp?r=9ff",
            platform: "netflix",
            genre:["drama","thriller","crime"],
            description:"Follow Walter White, a desperate high school chemistry teacher turned ruthless methamphetamine kingpin, in this gripping crime drama."
          },
          { name:"Bojack Horseman",
            image:
              "https://occ-0-2365-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABW1w0cR1nRSWPhcsnAPCcnoLvdS0QEVZMEINrTfOouu5r33G_fuYZOZqwIVRw6fGcgul3jJXbQiqekkVMRGW8H3nQ4wD8m3oAL4HFoho3swYOw0O9kDsfQIaOIfnG7S4B-VN.jpg?r=e20",
            platform: "netflix",
            genre:["drama","comedy"],
            description:"Enter the world of Bojack Horseman, a washed-up Hollywood actor navigating life's ups and downs in this darkly comedic animated series."
          },
        ],
      };

      result.heading=null

  return (
    <div className='flex  bg-primary'>
        <Sidebar/>
        <div className="p-16 py-8 text-2xl  gap-10  flex flex-col items-center h-screen w-full">
            <div className='flex  w-full h-[4rem] tracking-wider'>
                <input className='w-10/12   bg-dark-primary rounded-l-md px-4 text-white focus:outline-none' placeholder='Search movies, shows and more'/>
                <label className='w-2/12 flex justify-center items-center font-semibold text-white text-3xl bg-black rounded-r-md'>
                    <p>Search</p>
                </label>
              
            </div>
            <Tiles data={result} />
        </div>
    </div>
  )
}

export default Search
