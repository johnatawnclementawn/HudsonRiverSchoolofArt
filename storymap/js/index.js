/* globals showdown */

let map = L.map('map').setView([41.6934242, -73.424951], 8);
let layerGroup = L.layerGroup().addTo(map);
let artCollection = { features: [] };

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
	maxZoom: 15,
}).addTo(map);

let currentSlideIndex = 0;

const slidesDiv = document.querySelector('.slides');

function updateMap(collection) {
  layerGroup.clearLayers();
  const geoJsonLayer = L.geoJSON(collection, { pointToLayer: (p, latlng) => L.marker(latlng) })
    .bindTooltip(l => l.feature.properties.name)
    .addTo(layerGroup);

  return geoJsonLayer;
}

function makeEraCollection(siteID) {
  return {
    type: 'FeatureCollection',
    features: artCollection.features.filter(f => f.properties.siteID === siteID),
  };
}

function syncMapToSlide(slide) {
  const collection = slide.siteID ? makeEraCollection(slide.siteID) : artCollection;
  const layer = updateMap(collection);

  function handleFlyEnd() {
    if (slide.showpopups) {
      layer.eachLayer(l => {
        l.bindTooltip(l.feature.properties.name, { permanent: true });
        l.openTooltip();
      });
    }
    map.removeEventListener('moveend', handleFlyEnd);
  }

  map.addEventListener('moveend', handleFlyEnd);
  if (slide.bounds) {
    map.flyToBounds(slide.bounds);
  } else if (slide.siteID) {
    map.flyToBounds(layer.getBounds());
  }
}

function syncMapToCurrentSlide() {
  const slide = slides[currentSlideIndex];
  syncMapToSlide(slide);
}

function initSlides() {
  const converter = new showdown.Converter({ smartIndentationFix: true });

  slidesDiv.innerHTML = '';
  for (const [index, slide] of slides.entries()) {
    const slideDivHeader = htmlToElement(`
      <div class="slide" id="slide-${index}">
        <h2>${slide.title}</h2>
        <div class="slideshow-container" id="slide-${index}">
          <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
          <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </div>
      </div>
    `);
    slidesDiv.appendChild(slideDivHeader);
  
    let paintings = slide.paintings;
    if (paintings) {
      paintings = paintings.split(",");
      for (imgIdx in paintings) {
        const imgLoc = paintings[imgIdx];
        const imgDiv = htmlToElement(`
          <div class="mySlides fade">
            <div class="numbertext">${imgIdx} / ${paintings.length}</div>
            <img src="data/paintings/${imgLoc}" style="width:100%">
          </div>
        `);
        let targetSlideSlideshow = document.getElementById('slide-' + index).getElementsByClassName("slideshow-container")[0];
        targetSlideSlideshow.appendChild(imgDiv);
      };      
    }

    const slideDivContent = htmlToElement(` ${converter.makeHtml(slide.content)} `);
    let targetSlide = document.getElementById('slide-' + index);
    targetSlide.appendChild(slideDivContent);
  }
}

function loadSitesData() {
  fetch('data/artTrailSites.json')
    .then(resp => resp.json())
    .then(data => {
      artCollection = data;
      syncMapToCurrentSlide();
    });
}

function calcCurrentSlideIndex() {
  const scrollPos = window.scrollY;
  const windowHeight = window.innerHeight;
  const slideDivs = document.getElementsByClassName('slide');

  let i;
  for (i = 0; i < slideDivs.length; i++) {
    const slidePos = slideDivs[i].offsetTop;
    if (slidePos - scrollPos - windowHeight > 0) {
      break;
    }
  }

  if (i === 0) {
    currentSlideIndex = 0;
  } else if (currentSlideIndex != i - 1) {
    currentSlideIndex = i - 1;
    syncMapToCurrentSlide();
  }
}

document.addEventListener('scroll', calcCurrentSlideIndex);

initSlides();
syncMapToCurrentSlide();
loadSitesData();


/* JS from image slide show example:  https://www.w3schools.com/howto/howto_js_slideshow.asp*/
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  // let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
} 