const slides = [
  {
    title: "The Hudson River School of Art",
    content: `
      The Hudson River School of Art was a mid-19th century American art movement 
      influenced by Romanticism and characterized by sweeping landscapes depicting 
      nature and humans coexisting peacefully. There are two recognized generations 
      of artists belonging to the Hudson River School of Art. The first generation 
      primarily focused on the Hudson River Valley, including the Adirondak, Catskill, 
      and White Mountains, whereas the second generation expanded to the American West,
      New England, The Maritimes of Canada, and South America. This exploration 
      will primarily cover first generation painters.      
    `,
    siteID: null,
    paintings: null,
  },

  {
    title: 'Thomas Cole National Historic Site',
    content: `
    <img src="data/paintings/cole_mainHouse.jpg" alt="Thomas Cole National Historic Site main house">
    <br/><br/>
    **Introduction by Kevin J. Avery, Senior Research Scholar, The Metropolitan Museum of Art**
    <br/><br/>
    *Hudson River School founder Thomas Cole fell in love with Catskill in 1825, 
    when he first visited the village and the unforgettable mountains that form 
    its backdrop.  He returned there several times from New York City, and several 
    times painted the vista to the west crowned by the distinctive crests of Kaaterskill 
    High Peak and Round Top.Cole began working in Catskill regularly in summer 1834, 
    then fell in love again, this time with a woman, Maria Bartow, who lived on the property 
    called Cedar Grove with her uncle and three sisters.  Cole and Maria married in 1836 
    and set up house in Cedar Grove.  For the remaining decade of his life, 
    Cole could exult every fair morning in the prospect of the mountains from his porch. 
    For his paintings, though, the artist preferred the view of them overlooking the curving, 
    reflective surface of Catskill Creek, not far from his home.
    <br/><br/>
    The Main House and Studio are open by guided and self-guided tours, which are offered 
    Tuesday through Sunday from May through October. The historic grounds and visitor center 
    are open free of charge every day from dawn to dusk. For  information visit 
    [thomascole.org/visit](http://thomascole.org/visit/).*
    `,
    siteID: 'Thomas_Cole_National_Historic_Site',
    paintings: "cole_mainHouse.jpg,cole_mainHouse_irl.jpg",
    showpopups: true,
  },

  {
    title: 'Olana State Historic Site',
    content: `
    <img src="data/paintings/Catskill-Mountains_FromOlana1_Church.jpg" alt="Catskill Mountains From Olana, Frederic Church">
    <br/><br/>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer eget aliquet nibh praesent. Sed tempus urna et pharetra pharetra massa massa. At risus viverra adipiscing at in tellus. Eget magna fermentum iaculis eu non. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Elementum nibh tellus molestie nunc non blandit massa enim. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Lorem dolor sed viverra ipsum nunc. Egestas purus viverra accumsan in nisl.
    `,
    siteID: 'Olana_State_Historic_Site',
    paintings: "Catskill-Mountains_FromOlana1_Church.jpg,olana_pano.jpg,olana_sketch_Church.jpg,olana_mansion.jpg",
    showpopups: true,
  },

  {
    title: 'Catskill Creek',
    content: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer eget aliquet nibh praesent. Sed tempus urna et pharetra pharetra massa massa. At risus viverra adipiscing at in tellus. Eget magna fermentum iaculis eu non. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Elementum nibh tellus molestie nunc non blandit massa enim. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Lorem dolor sed viverra ipsum nunc. Egestas purus viverra accumsan in nisl.
    `,
    siteID: 'Catskill_Creek',
    paintings: "viewOnTheCatskill_Cole.jpg,sceneOnTheCatskillCreek_Church.jpg,catskillCreek_Cole.jpg,onCatskillCreekAtSunset_Cole.jpg",
    showpopups: true,
  },

  {
    title: 'Kaaterskill Clove',
    content: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer eget aliquet nibh praesent. Sed tempus urna et pharetra pharetra massa massa. At risus viverra adipiscing at in tellus. Eget magna fermentum iaculis eu non. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Elementum nibh tellus molestie nunc non blandit massa enim. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Lorem dolor sed viverra ipsum nunc. Egestas purus viverra accumsan in nisl.
    `,
    siteID: 'Kaaterskill_Clove',
    paintings: "topOfKaaterskill_Cole.png,topOfKaaterskill2_Cole.jpg,topOfKaaterskill_Durand.jpg,Asher_Durand_Kindred_Spirits.jpg,Kaaterskill_Clove_by_Harriet_Cany_Peale_1858.jpg,kaaterskillClove_irl.jpg",
    showpopups: true,
  },

  {
    title: 'Kaaterskill Falls',
    content: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer eget aliquet nibh praesent. Sed tempus urna et pharetra pharetra massa massa. At risus viverra adipiscing at in tellus. Eget magna fermentum iaculis eu non. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Elementum nibh tellus molestie nunc non blandit massa enim. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Lorem dolor sed viverra ipsum nunc. Egestas purus viverra accumsan in nisl.
    `,
    siteID: 'Kaaterskill_Falls',
    paintings: "kaaterskillFalls_Cole.jpg,kaaterskill-falls-1826_Cole.jpg,kaaterskill-falls3.jpg,kaaterskill-falls4.jpg,kaaterskill-falls_irl.jpg",
    showpopups: true,
  },

  {
    title: 'North-South Lake',
    content: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer eget aliquet nibh praesent. Sed tempus urna et pharetra pharetra massa massa. At risus viverra adipiscing at in tellus. Eget magna fermentum iaculis eu non. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Elementum nibh tellus molestie nunc non blandit massa enim. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Lorem dolor sed viverra ipsum nunc. Egestas purus viverra accumsan in nisl.
    `,
    siteID: 'North_South_Lake',
    paintings: "lake-with-dead-trees-catskill-1825_Cole.jpg,north_south_lake.jpg,north_south_lake_irl.jpg",
    showpopups: true,
  },

  {
    title: 'Sunset Rock',
    content: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer eget aliquet nibh praesent. Sed tempus urna et pharetra pharetra massa massa. At risus viverra adipiscing at in tellus. Eget magna fermentum iaculis eu non. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Elementum nibh tellus molestie nunc non blandit massa enim. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Lorem dolor sed viverra ipsum nunc. Egestas purus viverra accumsan in nisl.
    `,
    siteID: 'Sunset_Rock',
    paintings: "sunsetRock_Cole.jpg,sunsetRock2.jpg,sunsetRock_irl.jpg",
    showpopups: true,
  },

  {
    title: 'Catskill Mountain House',
    content: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer eget aliquet nibh praesent. Sed tempus urna et pharetra pharetra massa massa. At risus viverra adipiscing at in tellus. Eget magna fermentum iaculis eu non. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Elementum nibh tellus molestie nunc non blandit massa enim. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Lorem dolor sed viverra ipsum nunc. Egestas purus viverra accumsan in nisl.
    `,
    siteID: 'Catskill_Mountain_House',
    paintings: "catskillMtnHouse1_Church.jpg,catskillMtnHouse2_Church.jpg,catskillMtnHouse3_Church.jpg,theHandsOfGlaciers_Cole.jpg",
    showpopups: true,
  },

  {
    title: 'Mount Merino and the Catskills',
    content: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer eget aliquet nibh praesent. Sed tempus urna et pharetra pharetra massa massa. At risus viverra adipiscing at in tellus. Eget magna fermentum iaculis eu non. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Elementum nibh tellus molestie nunc non blandit massa enim. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Lorem dolor sed viverra ipsum nunc. Egestas purus viverra accumsan in nisl.
    `,
    siteID: 'Mount_Merino_and_the_Catskills',
    paintings: "south_bay_hudson_Gifford.jpg,south_bay_hudson_irl.jpg",
    showpopups: true,
  },

  {
    title: 'Albany From the East side of the Hudson River',
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer eget aliquet nibh praesent. Sed tempus urna et pharetra pharetra massa massa. At risus viverra adipiscing at in tellus. Eget magna fermentum iaculis eu non. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Elementum nibh tellus molestie nunc non blandit massa enim. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Lorem dolor sed viverra ipsum nunc. Egestas purus viverra accumsan in nisl.
    `,
    siteID: 'Albany',
    paintings: "viewOfAlbany_Cole.jpg,viewOfAlbany_irl.jpg",
    showpopups: true,
  },

  {
    title: 'Hudson River From Hasbrouk Park in Kingston',
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer eget aliquet nibh praesent. Sed tempus urna et pharetra pharetra massa massa. At risus viverra adipiscing at in tellus. Eget magna fermentum iaculis eu non. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Elementum nibh tellus molestie nunc non blandit massa enim. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Lorem dolor sed viverra ipsum nunc. Egestas purus viverra accumsan in nisl.
    `,
    siteID: 'Hudson_River_From_Hasbrouk',
    paintings: "hasbroukPark_Tubby.jpg",
    showpopups: true,
  },

  {
    title: 'Mohonk Lake',
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer eget aliquet nibh praesent. Sed tempus urna et pharetra pharetra massa massa. At risus viverra adipiscing at in tellus. Eget magna fermentum iaculis eu non. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Elementum nibh tellus molestie nunc non blandit massa enim. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Lorem dolor sed viverra ipsum nunc. Egestas purus viverra accumsan in nisl.
    `,
    siteID: 'Mohonk_Lake',
    paintings: "THOMAS-COLE-LAKE-MOHONK.jpg,lakeMohonk_Cole.jpg,lakeMohonk_irl.jpg,lakeMohonk2_Cole.jpg",
    showpopups: true,
  },

  {
    title: 'Eagle Cliff near Artist\'s Rock',
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer eget aliquet nibh praesent. Sed tempus urna et pharetra pharetra massa massa. At risus viverra adipiscing at in tellus. Eget magna fermentum iaculis eu non. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Elementum nibh tellus molestie nunc non blandit massa enim. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Lorem dolor sed viverra ipsum nunc. Egestas purus viverra accumsan in nisl.
    `,
    siteID: 'Eagle_Cliff',
    paintings: "eaglesCliff_Whittredge.jpg,eaglesCliff_irl.jpg",
    showpopups: true,
  },

  {
    title: 'Shawangunk Mountains from Sky Top',
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer eget aliquet nibh praesent. Sed tempus urna et pharetra pharetra massa massa. At risus viverra adipiscing at in tellus. Eget magna fermentum iaculis eu non. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Elementum nibh tellus molestie nunc non blandit massa enim. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Lorem dolor sed viverra ipsum nunc. Egestas purus viverra accumsan in nisl.
    `,
    siteID: 'Shawangunk_Mountains',
    paintings: "shawangunks_Gifford.jpg,gunks_irl.jpg",
    showpopups: true,
  },

  {
    title: 'Hudson River from Vanderbilt Mansion',
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer eget aliquet nibh praesent. Sed tempus urna et pharetra pharetra massa massa. At risus viverra adipiscing at in tellus. Eget magna fermentum iaculis eu non. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Elementum nibh tellus molestie nunc non blandit massa enim. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Lorem dolor sed viverra ipsum nunc. Egestas purus viverra accumsan in nisl.
    `,
    siteID: 'Hudson_River_from_Vanderbilt',
    paintings: "vanderbilt_Carmiencke.jpg,vanderbilt_irl.jpg",
    showpopups: true,
  },

  {
    title: 'Hudson River from Croton Point Park',
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer eget aliquet nibh praesent. Sed tempus urna et pharetra pharetra massa massa. At risus viverra adipiscing at in tellus. Eget magna fermentum iaculis eu non. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Elementum nibh tellus molestie nunc non blandit massa enim. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Lorem dolor sed viverra ipsum nunc. Egestas purus viverra accumsan in nisl.
    `,
    siteID: 'Hudson_River_from_Croton',
    paintings: "crotonPointPark1_Gifford.jpg,crotonPointPark2_Gifford.jpg",
    showpopups: true,
  },

  {
    title: 'Jasper Cropsey Home and Studio',
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer eget aliquet nibh praesent. Sed tempus urna et pharetra pharetra massa massa. At risus viverra adipiscing at in tellus. Eget magna fermentum iaculis eu non. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Elementum nibh tellus molestie nunc non blandit massa enim. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Lorem dolor sed viverra ipsum nunc. Egestas purus viverra accumsan in nisl.
    `,
    siteID: 'Jasper_Cropsey',
    paintings: "hudsonFromCropseyHome_Cropsey.jpg,hudsonFromCropseyHome2_Cropsey.jpg",
    showpopups: true,
  },

  {
    title: 'Platte Clove',
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer eget aliquet nibh praesent. Sed tempus urna et pharetra pharetra massa massa. At risus viverra adipiscing at in tellus. Eget magna fermentum iaculis eu non. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Elementum nibh tellus molestie nunc non blandit massa enim. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Lorem dolor sed viverra ipsum nunc. Egestas purus viverra accumsan in nisl.
    `,
    siteID: 'Platte_Clove',
    paintings: "platte_clove.jpg,a-sycamore-tree-plaaterkill-cove-asher-brown-durand.jpg",
    showpopups: true,
  },

  {
    title: 'Storm King from Long Dock Park',
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer eget aliquet nibh praesent. Sed tempus urna et pharetra pharetra massa massa. At risus viverra adipiscing at in tellus. Eget magna fermentum iaculis eu non. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Elementum nibh tellus molestie nunc non blandit massa enim. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Lorem dolor sed viverra ipsum nunc. Egestas purus viverra accumsan in nisl.
    `,
    siteID: 'Storm_King',
    paintings: "cole_storm_king.jpg,cole_storm_king2.jpg,storm_king_irl.jpg",
    showpopups: true,
  },

  {
    title: 'Hudson River Skywalk',
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer eget aliquet nibh praesent. Sed tempus urna et pharetra pharetra massa massa. At risus viverra adipiscing at in tellus. Eget magna fermentum iaculis eu non. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Elementum nibh tellus molestie nunc non blandit massa enim. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Lorem dolor sed viverra ipsum nunc. Egestas purus viverra accumsan in nisl.
    `,
    siteID: 'Hudson_River_Skywalk',
    paintings: "hudsonRiverSkywalk1.jpg,cloudsFromOlana_Church.jpg",
    showpopups: true,
  },
  
];
