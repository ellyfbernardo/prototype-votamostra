import filme1 from './filme1.webp'
import filme2 from './filme2.webp'
import filme3 from './filme3.webp'
import Moviecard from '../../Components/MovieCard/Moviecard'
import './App.css'


function Home() {


  return (
    <>
    
      <Moviecard 
      img={filme1} 
      title={"O DIA QUE TE CONHECI"}
      description={"FICÇÃO, 70MIN, MG, 2023, 14 ANOS DIREÇÃO ANDRÉ NOVAIS OLIVEIRA"}
      />
      <Moviecard 
      img={filme2} 
      title={"ESTRANHO CAMINHO"}
      description={"FICÇÃO, 83 MIN, CE, 2023, 12 ANOS DIREÇÃO: GUTO PARENTE"}
      />

      <Moviecard 
      img={filme3} 
      title={"QUANDO EU ME ENCONTRAR"}
      description={"FICÇÃO, 77 MIN, CE, 2023, 10 ANOS DIREÇÃO: AMANDA PONTES E MICHELLINE HELENA"}
      />
    </>
  )
}

export default Home
