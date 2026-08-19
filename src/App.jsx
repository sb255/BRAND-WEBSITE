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
import Checks from './components/Checks'

//declaring an array of objects
  const productDetails = [
    { name: 'Masoor Whole Sortex Clean', image: './MASOOR.png' },
    { name: 'Masoor Dal', image: './MOONG-TWO.png' },
    { name: 'Moong Dal', image: './MOONG.png' },
    { name: 'Rajma Kashmiri', image: './RAJMA.png' },
    { name: 'Red Chilli Powder', image: './RED-CHILLI-POWDER.png' },
    { name: 'Turmeric Powder', image: './TURMERIC-POWDER.png' }
  ];

  const productPhotos = [
    { source: './farmer-story-one.jpg' },
    { source: './farmer-story-two.jpg' },
    { source: './farmer-story-three.jpg' },
    { source: './farmer-story-four.jpg' },
    { source: './farmer-story-thirteen.jpg'},
    { source: './farmer-story-six.jpg' },
    { source: './farmer-story-seven.jpg' },
    { source: './farmer-story-eight.jpg' },
    { source: './farmer-story-nine.jpg' },
    { source: './farmer-story-ten.jpg' },
    { source: './farmer-story-eleven.jpg' },
    { source: './farmer-story-twelve.jpg' },
  ]

function App() {
 
  return (
    <>
      <Navigationbar />
      <Checks />
      <Landingpage />
      <Mission />
      <SectionTitle title={'VIEW OUR TOP QUALITY PRODUCTS'}/>
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
