import './styles/output.css'
import FooterComponent from './components/footer/Footer'
import HeaderComponent from './components/header/Header'
import MainBodyComponent from './components/mainContents/MainBodyComponent'

function App() {

  return (
    <div className='bg-[#172227] font-[Inter] text-white'>

      <HeaderComponent />

      <MainBodyComponent />


      <FooterComponent />

    </div>
  )
}

export default App
