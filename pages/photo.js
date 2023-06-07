"use client"; 
import { useState, useRef, createRef,useCallback } from 'react'
import {Camera} from "react-camera-pro";
import { useScreenshot } from 'use-react-screenshot'
import axios from "axios"
import Link from 'next/link'
import Webcam from "react-webcam";

export default function Photo() {

  const camera = useRef(null);
  const [image, setImage] = useState(null);
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const ref = createRef(null)
  const [imaget, takeScreenshot] = useScreenshot()
  const getImage = () => {takeScreenshot(ref.current);  getIma()}


  const [img, setImg] = useState(null);
  const webcamRef = useRef(null);

  const videoConstraints = {
    width: 400,
    height: 800,
    facingMode: "user",
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
  }, [webcamRef]);

  // if(imaget){
    // window.localStorage.setItem("imaget", imaget);

    // getIma()

  
    const getIma = async(e) => {

    let formData = new FormData()
    formData.append('image', imaget)

    try {
      const { data } = await axios.post('https://phpstack-709751-3121510.cloudwaysapps.com/api/realme', formData)
     
      window.localStorage.setItem("imaget", data.data.img);

     
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }
    
  // }

  



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
        {/* <Camera ref={camera} aspectRatio={"cover"} numberOfCamerasCallback={setNumberOfCameras} /> */}

        <Webcam className='newvdfrms'
            audio={false}
            mirrored={true}
           
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />


        <img src={"/arbigs.png"} alt='filter' style={{position:"relative"}} />

        </div>

        <div className='outssdv'>
        <img  src={img} alt={'Screenshot'} className="genouts"/>
        
        </div>

       
       <div className='center-ctayl'>
       

        <Link  
          href={{
            pathname: '/result',
          }}
          className='btn btn-register file-upload iconcm'>
          <img src='./frontcmon.png'/>
        </Link>

        <button onClick={capture}>Capture photo</button>



        <button className='btn btn-register file-upload iconcm bcmp' 
        
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
