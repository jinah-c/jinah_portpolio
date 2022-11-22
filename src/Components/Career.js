import React from 'react'
import './Carrer.css'
import CharacterImg from './img/img08.gif'

function Career() {
  return (
    <>
    
    <div className='mainSectionCharacter'>
        <div className='mainSectionCharacter_ContentBox'>
            <div className='mainSectionCharacter_Content01'>
              <img className="characterImg01" 
                    data-aos="fade-right" data-aos-delay="200" 
                    src={CharacterImg}  
                    alt='' />
            </div>

            <div className='mainSectionCharacter_Content02' data-aos="fade-left" data-aos-delay="400" >
              <div className='nameBox'>
              <h1 className='decoFont'>Chae jinah</h1>
              <p className='nameText'>채진아 1990.02.21</p>
              </div>
              
              <br/>
              <div className="workExperienceContentBox">
                <div className='workExperienceContent'>
                  <div className='period'>
                    <p>2020 - 2022</p>
                  </div>
                  <div className='company'>
                    <p>엔노바랩스　개발팀 선임디자이너</p>
                    <div className='decoLine'></div>
                    <p>웹사이트/모바일 앱 UI 디자인</p>
                    <p>로고·명함·옥외 광고배너·SNS배너디자인</p>
                    <p>유튜브 영상편집 및 모션애니메이션 디자인</p>
                    <br/>
                  </div>

                  <div className='period'>
                    <p>2017 - 2020</p>
                  </div>
                  <div className='company'>
                    <p>렌즈타운　디자인팀 대리</p>
                    <div className='decoLine'></div>
                      <p>신제품 컨셉 기획 및 제품패키지·로고디자인</p>
                      <p>매장 출력물 각종 웹배너 및 SNS콘텐츠 디자인</p>
                      <p>제품 상세페이지 및 프로모션 홍보물 디자인</p>
                      <p>웹사이트·모바일 앱 리뉴얼 디자인</p>
                      <p>신제품 스튜디오 촬영보조 및 인물사진 보정</p>
                      <br/>
                  </div>

                  <div className='period'>
                    <p>2015 - 2017</p>
                  </div>
                  <div className='company'>
                    <p>에스지건설　공무/관리부 사원</p>
                    <div className='decoLine'></div>
                      <p>직원 급여업무 및 거래처 결제관련 업무</p>
                      <br/>
                  </div>

                  <div className='period'>
                    <p>2012 - 2014</p>
                  </div>
                  <div className='company'>
                    <p>CGV의정부　내근직 아르바이트</p>
                    <div className='decoLine'></div>
                      <p>단체 및 대관고객 관리·매장 POP 및 광고물 디자인</p>
                      <p>소모품 재고·발주관리 및 신입 교육</p>
                      <br/>
                  </div>

                  <div className='period'>
                    <p>2008 - 2011</p>
                  </div>
                  <div className='company'>
                    <p>영동대학교　뷰티케어과 졸업 [3.78/4.5]</p>
                    <div className='decoLine'></div>
                  </div>

                  
                  <div className='period'>
                    <p>2005 - 2008</p>
                  </div>
                  <div className='company'>
                    <p>영락여자상업고등학교　시각디자인과 졸업</p>
                  </div>
                </div>
              </div>
            </div>


        </div>

      </div>    
    </>
  )
}

export default Career;