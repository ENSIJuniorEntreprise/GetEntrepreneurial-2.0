import React,{useState,useEffect,useRef} from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from  'react-countup'


function Chiffre({number,adding}){

    const {ref:myRef ,inView:myElementIsVisible }=useInView();
    
    let visibleOnce=useRef(false)
    
    const [styles,setStyles]=useState({count:{
      display:"contents"
    },noCount:{
      display:"none"
    }
    })

    
    useEffect(()=>{
        if (myElementIsVisible){
          visibleOnce.current=true
        }
        if(visibleOnce.current)
        setTimeout(()=>{
          setStyles({count:{
            display:"none"
          },noCount:{
            display:"contents"
          }
          })
        },3500)
    },[myElementIsVisible])


    
      return (
        <div id="chiffreContent">
          <span className="chiffre" ref={myRef}><span style={styles.count}  id="count"><CountUp  end={number} enableScrollSpy suffix={adding} duration={5} /></span><span style={styles.noCount} id="noCount">{number}{adding}</span></span>
          
        </div>
      );
}

export default Chiffre;