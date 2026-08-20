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
    { source: './farmer-story-one.jpg', url:'https://www.youtube.com/watch?v=UIJP5e1YjWA'},
    { source: './farmer-story-two.jpg', url:'https://youtu.be/muPPKDqAUZ8?si=ki5tsCv-a1YRuhgU'},
    { source: './farmer-story-three.jpg', url:'https://youtu.be/Bls5ZyXZEio?si=jjHC2hDC9AS9UFnS'},
    { source: './farmer-story-four.jpg', url:'https://youtu.be/ADKzIjySwRs?si=IVmTJ65jkq2PS-Nv'},
    { source: './farmer-story-thirteen.jpg', url:'https://youtu.be/6e8VXAOFEuw?si=elImZWtzHDrSESbW'},
    { source: './farmer-story-six.jpg', url:'https://youtu.be/GTB0OENMdLQ?si=_Nb9DqeXbL4bOKi-'},
    { source: './farmer-story-seven.jpg', url:'https://youtu.be/-fPLwvKJImQ?si=YkD0R0vtEzMp2_5L'},
    { source: './farmer-story-eight.jpg', url:'https://youtu.be/ZBV0GZBVmUg?si=RIBmSQ0QIAAjziRI'},
    { source: './farmer-story-nine.jpg', url:'https://youtu.be/Cc79pWZC-64?si=o1ZE-Ya709-RVtT-'},
    { source: './farmer-story-ten.jpg', url:'https://youtu.be/9bTeofjkZb0?si=Le__fEC-TBME91sJ'},
    { source: './farmer-story-eleven.jpg', url:'https://youtu.be/WzkUc9mu8Gg?si=4_KpO9UzafeMl55K'},
    { source: './farmer-story-twelve.jpg', url:'https://youtu.be/qCaGlCvOQME?si=tjbVVUAxrWTSqHA_'},
  ]

function App() {
 
  return (
    <>
      <Navigationbar />
      <Checks />
      <Landingpage />
      <Mission />
      <SectionTitle title={'VIEW OUR TOP QUALITY PRODUCTS'} iconNumber={0}/>
      <ProductShelf cart={productDetails}/>
      <SectionTitle title={'TOP COVERAGE FROM THE BEST SCIENTISTS OF INDIA'} iconNumber={1}/>
      <Picture />
      <SectionTitle title={'OUR FARMERS NETWORK SHOWCASING THEIR SUCCESS STORIES'} iconNumber={2}/>
      <PhotoWall exportPhotos={productPhotos}/>
      <Footer />
    </>
  )
}

export default App
