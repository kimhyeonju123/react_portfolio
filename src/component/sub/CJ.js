import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'

function CJ() {
    const pubURL = process.env.PUBLIC_URL + '/img/';
  return (
    <div>
        <section id="sub_banner">
            <div className="inner">
                <div className="bar"></div>

                <div className="page" id="page1">
                    <div className="pic">
                        <img src={pubURL+"kcy.png"} alt="김초엽 작가의 사진"/>
                    </div>
                    <h2>김 초엽</h2>
                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, dolore?</span>
                </div>

                <div className="page" id="page2">
                    <span>2. 추천 도서-1</span>
                    <div className="pic">
                        <img src={pubURL+"우빛속_원본.jpg"} alt="김초엽 작가의 우리가 빛의 속도로 갈 수 없다면 표지"/>
                    </div>
                    <div className="txt">
                        <h2>「우리가 빛의 속도로 갈 수 없다면」</h2>
                        <p>제목 : 우리가 빛의 속도로 갈 수 없다면</p>
                        <p>발행일 : 2019/06/24</p>
                        <p>쪽수 : 344쪽</p>
                        <p style={{color:'orangered'}}>정가 : 14,000원</p>
                        <div className="info">
                            정가는 알라딘 기준
                        </div>
                    </div>
                    <div className="story">
                        <p>
                            '완벽한' 유전자의 선택이 가능해진 미래, 완벽함의 범주에 속하지 못하는 사람들은 경계 밖으로 밀려난다.
                            부당한 경계짓기를 미워하는 마음, 광활한 우주 너머의 가족을 그리워하는 마음. 과학도인 소설가는
                            이렇듯 우리가 함께 읽고 나누고 싶은 이야기를, 우리가 가닿지 못한 곳을 상상하는 방식으로 만들어 낸다. 여전히 우리 모두의 '마음'에 있을 무언가에 대한
                            이야기.
                        </p>
                    </div>
                </div>

                <div className="page" id="page3">
                    <span>2. 추천 도서-2</span>
                    <div className="pic">
                        <img src={pubURL+"지끝온_편집.jpg"} alt="김초엽 지구 끝의 온실 표지"/>
                    </div>
                    <div className="txt">
                        <h2>「지구 끝의 온실」</h2>
                        <p>제목 : 지구 끝의 온실</p>
                        <p>발행일 : 2021/08/18</p>
                        <p>쪽수 : 392쪽</p>
                        <p style={{color:'orangered'}}>정가 : 15,000원</p>
                        <div className="info">
                            정가는 알라딘 기준
                        </div>
                    </div>
                    <div className="story">
                        <p>
                            더스트로 멸망해버린 세계에서 이야기가 시작된다. 1장은 2129년 더스트생태연구센터에서 덩굴식물 모스바나에 대해 연구하는 아영의 이야기. 2장은 2058년, 더스트를 피해
                            돔 안에서 도시를 이루고 사는 시대, 돔 없이 숲을 이루고 사는 사람들을 찾아 나선 나오미의 이야기. 그리고 3장에서 이 두 이야기가 만나 세계의 멸망에 관한 진실이 모습을
                            드러낸다.
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
    </div>
  )
}

export default CJ