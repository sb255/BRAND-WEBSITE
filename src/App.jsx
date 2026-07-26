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
    { name: 'Masoor Whole Sortex Clean', image: '${import.meta.env.BASE_URL}/MASOOR.png' },
    { name: 'Masoor Dal', image: '${import.meta.env.BASE_URL}MOONG-TWO.png' },
    { name: 'Moong Dal', image: '${import.meta.env.BASE_URL}MOONG.png' },
    { name: 'Rajma Kashmiri', image: '${import.meta.env.BASE_URL}RAJMA.png' },
    { name: 'Red Chilli Powder', image: '${import.meta.env.BASE_URL}RED-CHILLI-POWDER.png' },
    { name: 'Turmeric Powder', image: '${import.meta.env.BASE_URL}TURMERIC-POWDER.png' }
  ];

  const productPhotos = [
    { source: '/farmer-story-one.jpg' },
    { source: '/farmer-story-two.jpg' },
    { source: '/farmer-story-three.jpg' },
    { source: '/farmer-story-four.jpg' },
    { source: '/farmer-story-thirteen.jpg'},
    { source: '/farmer-story-six.jpg' },
    { source: '/farmer-story-seven.jpg' },
    { source: '/farmer-story-eight.jpg' },
    { source: '/farmer-story-nine.jpg' },
    { source: '/farmer-story-ten.jpg' },
    { source: '/farmer-story-eleven.jpg' },
    { source: '/farmer-story-twelve.jpg' },
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
