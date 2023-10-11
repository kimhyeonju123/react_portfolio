import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'

function BN() {
    const pubURL = process.env.PUBLIC_URL + '/img/';
    
  return (
    <>
        <section id="sub_banner">
        <div className="inner">
            <div className="bar"></div>

            <div className="page" id="page1">
                <div className="pic">
                    <img src={pubURL+'Bernard_Werber1NoBg.png'} alt="베르나르 베르베르 작가 사진"/>
                </div>
                <h2>베르나르 베르베르</h2>
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, dolore?</span>
            </div>

            <div className="page" id="page2">
                <span>2. 추천 도서-1</span>
                <div className="pic">
                    <img src={pubURL+'심판_원본.jpg'} alt="베르나르 베르베르 심판 책 표지"/>
                </div>
                <div className="txt">
                    <h2>「심판」</h2>
                    <p>제목 : 심판</p>
                    <p>발행일 : 2020/08/30</p>
                    <p>쪽수 : 224쪽</p>
                    <p style={{color:'orangered'}}>정가 : 14,800원</p>
                    <p>옮긴이 : 전미연</p>
                    <div className="info">
                        정가는 알라딘 기준
                    </div>
                </div>
                <div className="story">
                    <p>
                        주인공은 방금 전 사망한 아나톨 피숑.
                        아나톨은 자신이 좋은 학생, 좋은 시민, 좋은 남편 및 가장, 
                        좋은 직업인으로 살았다고 주장하고, 아나톨의 수호천사이자 
                        변호를 맡은 카롤린 역시 어떻게든 그의 좋은 점을 부각하려 노력한다.
                        하지만 검사 베르트랑은 생각지도 못한 죄를 들추어낸다.
                        과연 아나톨은 사형, 아니 다시 태어나야 하는 『삶의 형』을 피할 수 있을 것인가?
                    </p>
                </div>
            </div>
            <div className="page" id="page3">
                <span>2. 추천 도서-2</span>
                <div className="pic">
                    <img src={pubURL+"기억_편집.jpg"} alt="베르나르 베르베르 기억 책 표지"/>
                </div>
                <div className="txt">
                    <h2>「기억」</h2>
                    <p>제목 : 기억</p>
                    <p>발행일 : 2020/05/30</p>
                    <p>쪽수 : 400쪽</p>
                    <p style={{color:'orangered'}}>정가 : 16,800원</p>
                    <p>옮긴이 : 전미연</p>
                    <div className="info">
                        정가는 알라딘 기준
                    </div>
                </div>
                <div className="story">
                    <p>
                        "자신의 영혼 깊숙이 묻혀 있는 기억들을
                        발견해 보고 싶으신 분 계신가요?"
                        최면 속 깊숙한 무의식 속에서 그가 처음으로 본
                        전생은 제1차 세계 대전의 전장에서 목숨을 잃은 자신이다.
                        이 경험은 그의 인생을 뒤흔든다. 전생의 기억이 강렬하게
                        남아 일상을 완전히 바꾸었기 때문이다.
                        르네는 자신의 존재를 출발시킨 태초의 전생을
                        보고싶다는 일념으로 1만 2천년 전, 현대인이
                        '아틀란티스'라 부르는 전설 속의 섬으로 향하게 되는데…
                    </p>
                </div>
            </div>
            <div className="page" id="page4">
                <h2>3.인터뷰 모음집</h2>
                <section className="youtube">
                    <div className="inner">
                        <div className="vidList">
                        </div>
                    </div>
                </section>
            </div>
        </div>

        <ul className="btn">
            <li className="subPrev">
                <FontAwesomeIcon icon={faAnglesLeft} className='Angles'/>
            </li>
            <li className="subNext">
                <FontAwesomeIcon icon={faAnglesRight} className='Angles'/>
            </li>
        </ul>
        </section>
    </>
  )
}

export default BN