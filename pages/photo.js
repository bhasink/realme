"use client"; 
import { useState, useRef, createRef} from 'react'
import {Camera} from "react-camera-pro";
import { useScreenshot } from 'use-react-screenshot'

export default function Photo() {

  const camera = useRef(null);
  const [image, setImage] = useState(null);
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const ref = createRef(null)
  const [imaget, takeScreenshot] = useScreenshot()
  const getImage = () => takeScreenshot(ref.current)

  return (
    <main>

      <div>

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


        <div ref={ref}>
        <Camera ref={camera} numberOfCamerasCallback={setNumberOfCameras} />
        <img src={"/ar.png"} alt='filter' style={{position:"relative"}} />

        </div>


        <img width={{width:"100%"}} src={imaget} alt={'Screenshot'} />


        <button style={{ marginBottom: '10px' }} onClick={getImage}>
          Take screenshot
        </button>
        <button onClick={() => setImage(camera.current.takePhoto())}>Take photo</button>

        <button
        hidden={numberOfCameras <= 1}
        onClick={() => {
          camera.current.switchCamera();
        }}
      />


      
      </div>

      {/* <img src={image} alt='Taken photo' /> */}


    </main>
  )
}
