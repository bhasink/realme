"use client"; 
import { useState, useRef, createRef} from 'react'
import {Camera} from "react-camera-pro";
import { useScreenshot } from 'use-react-screenshot'
import Link from 'next/link'

export default function Photo() {

  const camera = useRef(null);
  const [image, setImage] = useState(null);
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const ref = createRef(null)
  const [imaget, takeScreenshot] = useScreenshot()
  const getImage = () => takeScreenshot(ref.current)

  if(imaget){
    window.localStorage.setItem("imaget", imaget);
  }

  return (
    <main>

      <div className='rmfds'>

      {/* <div>
      <div>
        <button style={{ marginBottom: '10px' }} onClick={getImage}>
          Take screenshot
        </button>
      </div>
      <img width={{width:"100%"}} src={imaget} alt={'Screenshot'} />
      <div ref={ref}>
        <h1>use-react-screenshot</h1>
        <p>
          <strong>hook by @vre2h which allows to create screenshots</strong>
        </p>
      </div>
    </div> */}


        <div className='camdivst' ref={ref}>
        <Camera ref={camera} aspectRatio={"cover"} numberOfCamerasCallback={setNumberOfCameras} />
        <img src={"/artw.png"} className="smalldvcs" alt='filter' style={{position:"relative"}} />
        <img src={"/arbigs2.png"} className="bigdvcs" alt='filter' style={{position:"relative"}} />
       {/* <div className='bgsetsm' style={{background:"url('/arbigs.png')"}}></div>*/ } 

        </div>

      {/**<div className='outssdv'>
        <img  src={imaget} alt={'Screenshot'} className="genouts"/>
        
        </div> */}  

       
       <div className='center-ctayl'>
       {/**<button className='btn btn-register file-upload iconcm'  style={{ marginBottom: '10px' }} onClick={getImage}>
        <img src='./frontcmon.png'/>
        </button> */} 

        <Link 
          href={{
            pathname: '/result',
          }}
          className='btn btn-register file-upload iconcm'>
         <img src='./frontcmon.png'/>
        </Link>


        <button className='btn btn-register file-upload iconcm bcmp'  style={{ marginBottom: '' }} 
        
        disabled={numberOfCameras <= 1}
        onClick={() => {
          if (camera.current) {
            const result = camera.current.switchCamera();
            console.log(result);
          }
        }}
        
        >

<img src='./flipcmct.png'/>
        </button>
       
       {/**<button className='btn btn-register file-upload' onClick={() => setImage(camera.current.takePhoto())}>Take photo</button> */} 
        
        <button 
        hidden={numberOfCameras <= 1}
        onClick={() => {
          camera.current.switchCamera();
        }}
      />
      </div>

      
      </div>

      {/* <img src={image} alt='Taken photo' /> */}


    </main>
  )
}
