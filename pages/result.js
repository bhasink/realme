import { useState, useRef, createRef, useEffect} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {

  const [image, setImage] = useState("")


  useEffect(() => {
    let value
    // Get the value from local storage if it exists
    value = localStorage.getItem("imaget") || ""
    setImage(value)
  }, [])

  const router = useRouter();
  const data = router.query;

  return (
    <>
      <section className="memes-sec">
        <div className="head-con">
          <h1>NARZO POSTER MAKER</h1>
          <p className="campaign-text">BE THE FACE OF NARZO</p>
        </div>
        <div className="panel-cont">
          <div className=" justify-content-center mb-3 maindiv">
            <div className="leftsimg">

              <img src={image} alt />
            </div>
            
              <div className="center-ctayl newcts">

<Link href="/photo" className='btn btn-register file-upload'>
Click Again
</Link>

<button className='btn btn-register file-upload iconcm'>
<img src="./download-solid.svg"/>
</button>

<button className='btn btn-register file-upload iconcm socl'>
<img src="./facebook-f.svg"/>
</button>

              </div>
           
         
          </div>
        </div>
      </section>
    </>
  )
}