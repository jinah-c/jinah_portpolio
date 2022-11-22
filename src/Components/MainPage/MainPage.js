import React from 'react'
import './MainPage.css'
import Carrer from '../Career'
import ScreenIMG from '../img/탭3.gif'
import CharacterImg from '../img/img08.gif'
// import {Link} from "react-router-dom";

function MainPage() {
  return (
    <div className='mainPage'>
      <div className='mainBannerSection'>
      <div className='mainBannerContentBox'>
          <div className='mainTitleBox'>
            <h2 className='decoFont' data-aos="fade-up">Hello</h2>
            {/* <h2 className='decoFont' data-aos="fade-up">안녕하세요 디자이너 채진아입니다 :)</h2> */}
          </div>
          <div className='mainImgBox'>
            <img className="Scr_img" 
                  data-aos="fade-up" data-aos-delay="300" 
                  src={ScreenIMG}  
                  alt='' />
          </div>
          <button className='decoFont'>안녕 나는 버튼이야</button>
      </div>
      </div>

      <Carrer />

    </div>
  )
}

export default MainPage