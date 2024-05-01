import './Moviecard.css'
import filme1 from '../MovieCard/filme1.webp'


const Moviecard = () => {
     return(



     <div className='container'>
               {/* <img src="/filme1.webp" alt="" /> */}
               <img src={filme1} alt="" />
               <h2>O DIA QUE TE CONHECI</h2>
               <p>FICÇÃO, 77 MIN, CE, 2023, 10 ANOS <br/>
               DIREÇÃO: AMANDA PONTES E MICHELLINE HELENA</p>

            <div className='container-list'> 
                <div className='option'>
                  <div className='square'>
                    <p>5</p>
                  </div>
                  <div>
                    <img src="emote5.png" className='emote'
                    alt="" />
                   </div>
                </div>
                <div className='option'>
                  <div className='square'>
                    <p>4</p>
                  </div><div>
                  <img src="emote4.webp" className='emote' alt="" /></div>
                </div>
                <div className='option'>
                  <div className='square'>
                    <p>3</p>
                  </div><div>
                  <img src="emote3.png" className='emote' alt="" /></div>
                </div>
                <div className='option'>
                  <div className='square'>
                    <p>2</p>
                  </div><div>
                  <img src="emote2.png" className='emote' alt="" /></div>
                </div>
                <div className='option'>
                  <div className='square'>
                    <p>1</p>
                  </div><div>
                  <img src="emote1.png" className='emote' alt="" /></div>
                </div>
            </div>
      </div>
          
     )
}

export default Moviecard