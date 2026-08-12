import Navigationbar from './components/Navigationbar'
import Landingpage from './components/Landingpage'
import Mission from './components/Mission'
import Catalogue from './components/Catalogue'
import GroxifiMovie from './assets/Groxifi_movie.mov'
import SectionTitle from './components/SectionTitle'
import Picture from './components/Picture'
import ProductShelf from './components/ProductShelf'
import SuccessStories from './components/SuccessStories'
import Footer from './components/Footer'
import PhotoWall from './components/PhotoWall'

//declaring an array of objects
  const productDetails = [
    { name: 'Masoor Whole Sortex Clean', image: './MASOOR.png' },
    { name: 'Masoor Dal', image: '/BRAND-WEBSITE/MOONG-TWO.png' },
    { name: 'Moong Dal', image: '/BRAND-WEBSITE/MOONG.png' },
    { name: 'Rajma Kashmiri', image: '/BRAND-WEBSITE/RAJMA.png' },
    { name: 'Red Chilli Powder', image: '/BRAND-WEBSITE/RED-CHILLI-POWDER.png' },
    { name: 'Turmeric Powder', image: '/BRAND-WEBSITE/TURMERIC-POWDER.png' }
  ];

  const productPhotos = [
    { source: '/BRAND-WEBSITE/farmer-story-one.jpg' },
    { source: '/BRAND-WEBSITE/farmer-story-two.jpg' },
    { source: '/BRAND-WEBSITE/farmer-story-three.jpg' },
    { source: '/BRAND-WEBSITE/farmer-story-four.jpg' },
    { source: '/BRAND-WEBSITE/farmer-story-thirteen.jpg'},
    { source: '/BRAND-WEBSITE/farmer-story-six.jpg' },
    { source: '/BRAND-WEBSITE/farmer-story-seven.jpg' },
    { source: '/BRAND-WEBSITE/farmer-story-eight.jpg' },
    { source: '/BRAND-WEBSITE/farmer-story-nine.jpg' },
    { source: '/BRAND-WEBSITE/farmer-story-ten.jpg' },
    { source: '/BRAND-WEBSITE/farmer-story-eleven.jpg' },
    { source: '/BRAND-WEBSITE/farmer-story-twelve.jpg' },
  ]

function App() {
 
  return (
    <>
      <Navigationbar />
      <Landingpage />
      <Mission />
      <SectionTitle title={'View our top quality products'}/>
      <ProductShelf cart={productDetails}/>
      <SectionTitle title={'TOP COVERAGE FROM THE BEST SCIENTISTS OF INDIA'}/>
      <Picture />
      <SectionTitle title={'OUR FARMERS NETWORK SHOWCASING THEIR SUCCESS STORIES'}/>
      <PhotoWall exportPhotos={productPhotos}/>
      <Footer />
    </>
  )
}

export default App
