import Link from 'next/link'

export default function Home() {

  return (
    <>
      <section className="memes-sec">
        <div className="head-con">
          <h1>NARZO POSTER MAKER</h1>
          <p className="campaign-text">BE THE FACE OF NARZO</p>
        </div>
        <div className="panel-cont">
          <div className="d-flex justify-content-center mb-3 maindiv">
            <div className="leftsimg">
              <img src="/cb.jpg" alt />
            </div>
            <div className="flx-cont">
              <div className="bt-blkk">

<Link href="/photo">
Click Photo
</Link>

              </div>
            </div>
         
          </div>
        </div>
      </section>
    </>
  )
}