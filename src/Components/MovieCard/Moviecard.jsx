
import emote5 from '../MovieCard/emote5.png'
import emote4 from '../MovieCard/emote4.webp'
import emote3 from '../MovieCard/emote3.png'
import emote2 from '../MovieCard/emote2.png'
import emote1 from '../MovieCard/emote1.png'
import './Moviecard.css'



const Moviecard = (props) => {
     return(


<div className='container-flex'>
     <div className='container'>
               {/* <img src="/filme1.webp" alt="" /> */}
               <img src={props.img} alt="" className='movie-image'/>
               <h2>{props.title}</h2>
               <p className='description'>{props.description}</p>

            <div className='container-list'> 
                <div className='option' >
                    <div className='square'>
                      <p>5</p>
                    </div>
                    <div>
                      <img src={emote5} className='emote'
                      alt="" />
                    </div>
                  </div>
                
                <div className='option'>
                  <div className='square'>
                    <p>4</p>
                  </div><div>
                  <img src={emote4} className='emote' alt="" /></div>
                </div>
                <div className='option'>
                  <div className='square'>
                    <p>3</p>
                  </div><div>
                  <img src={emote3} className='emote' alt="" /></div>
                </div>
                <div className='option'>
                  <div className='square'>
                    <p>2</p>
                  </div><div>
                  <img src={emote2} className='emote' alt="" /></div>
                </div>
                <div className='option'>
                  <div className='square'>
                    <p>1</p>
                  </div><div>
                  <img src={emote1} className='emote' alt="" /></div>
                </div>
            </div>
      </div>
</div> 
     )
}

export default Moviecard