import React from "react";
import "../styles/auth.css"

const ImagesCarousel:React.FC = () => {
  return (
    <div className="main-wrapper z-0 fixed h-screen w-full top-0 left-0">
      <div className="wrapper-images">
        {/* <!-- Baris Pertama --> */}
        <div className="images-line">
          {/* <!-- 1 sampai 5 --> */}
          <div className="line" style={{ backgroundImage: "url('/images/merry_and_happy.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/more_and_more.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/better.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/dtna.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/eyes_wide_open.jpg')" }} />
          {/* <!-- 5 sampai 10 --> */}
          <div className="line" style={{ backgroundImage: "url('/images/fancy.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/signal.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/what_is_love.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/the_feels.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/feel_special.jpg')" }} />
        </div>

        {/* <!-- Baris kedua --> */}
        <div className="images-line">
          {/* <!-- 1 sampai 5 --> */}
          <div className="line" style={{ backgroundImage: "url('/images/what_is_love.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/more_and_more.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/eyes_wide_open.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/dtna.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/feel_special.jpg')" }} />
          
          {/* <!-- 5 sampai 10 --> */}
          <div className="line" style={{ backgroundImage: "url('/images/the_feels.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/signal.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/merry_and_happy.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/better.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/fancy.jpg')" }} />
        </div>

        {/* <!-- Baris ketiga --> */}
        <div className="images-line">
          {/* <!-- 1 sampai 5 --> */}
          <div className="line" style={{ backgroundImage: "url('/images/what_is_love.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/more_and_more.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/fancy.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/merry_and_happy.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/signal.jpg')" }} />
          
          {/* <!-- 5 sampai 10 --> */}
          <div className="line" style={{ backgroundImage: "url('/images/dtna.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/feel_special.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/the_feels.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/better.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/eyes_wide_open.jpg')" }} />
        </div>

        {/* <!-- Baris keempat --> */}
        <div className="images-line">
          {/* <!-- 1 sampai 5 --> */}
          <div className="line" style={{ backgroundImage: "url('/images/signal.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/dtna.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/eyes_wide_open.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/feel_special.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/more_and_more.jpg')" }} />
          
          {/* <!-- 5 sampai 10 --> */}
          <div className="line" style={{ backgroundImage: "url('/images/fancy.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/what_is_love.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/merry_and_happy.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/better.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/the_feels.jpg')" }} />
        </div>

        {/* <!-- Baris kelima --> */}
        <div className="images-line">
          {/* <!-- 1 sampai 5 --> */}
          <div className="line" style={{ backgroundImage: "url('/images/merry_and_happy.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/fancy.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/feel_special.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/eyes_wide_open.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/signal.jpg')" }} />
      
          {/* <!-- 5 sampai 10 --> */}
          <div className="line" style={{ backgroundImage: "url('/images/the_feels.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/better.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/dtna.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/what_is_love.jpg')" }} />
          <div className="line" style={{ backgroundImage: "url('/images/more_and_more.jpg')" }} />
        </div>
      </div>
    </div>
  )
}

export default ImagesCarousel;