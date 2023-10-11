import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'

function JB() {
    const pubURL = process.env.PUBLIC_URL + '/img/';
  return (
    <div>
        <section id="sub_banner">
            <div className="inner">
                <div className="bar"></div>

                <div className="page" id="page1">
                    <div className="pic">
                        <img src={pubURL+"Julian_Barnes2NoBg.png"} alt="줄리언 반스 작가 사진"/>
                    </div>
                    <h2>줄리언 반스</h2>
                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, dolore?</span>
                </div>
                <div className="page" id="page2">
                    <span>2. 추천 도서-1</span>
                    <div className="pic">
                        <img src={pubURL+"플베앵_원본.jpg"} alt="줄리언 반스 플로베르의 앵무새 표지"/>
                    </div>
                    <div className="txt">
                        <h2>「플로베르의 앵무새」</h2>
                        <p>제목 : 플로베르의 앵무새</p>
                        <p>발행일 : 2009/12/04</p>
                        <p>쪽수 : 253쪽</p>
                        <p style={{color:'orangered'}}>정가 : 11,800원</p>
                        <p>옮긴이 : 신재실</p>
                        <div className="info">
                            정가는 알라딘 기준
                        </div>
                    </div>
                    <div className="story">
                        <p>
                            플로베르에 대한 속물적인 공격의 말들을 하나하나
                            변호하며 얼마나 많은 무지와 편견이 사람들의 머릿속에 자리 잡고 있는지를
                            밝히기도 하고, 플로베르가 사랑했던 한 여인의 목소리를 빌려 작가 이전의
                            한 개인으로서의 플로베르가 얼마나 망상과 아집과 변덕과 과시욕과 방탕과 변덕스러운 성격의
                            소유자인지를 폭로하고 있다.
                        </p>
                    </div>
                </div>
                <div className="page" id="page3">
                    <span>2. 추천 도서-2</span>
                    <div className="pic">
                        <img src={pubURL+"예틀않_편집.jpg"} alt="줄리언 반스 예감은 틀리지 않는다 표지"/>
                    </div>
                    <div className="txt">
                        <h2>「예감은 틀리지 않는다」</h2>
                        <p>제목 : 예감은 틀리지 않는다</p>
                        <p>발행일 : 2012/03/26</p>
                        <p>쪽수 : 268쪽</p>
                        <p style={{color:'orangered'}}>정가 : 12,800원</p>
                        <p>옮긴이 : 최세희</p>
                        <div className="info">
                            정가는 알라딘 기준
                        </div>
                    </div>
                    <div className="story">
                        <p>
                            그러나 살아온 날이 길어질수록, 우리의 이야기에 제동을 걸고, 우리의 삶이 실제 우리가 산 삶과는 다르며,
                            다만이제까지 우리 스스로에게 들려준 이야기에 지나지 않는다는사실을 깨닫도록 우리에게 반기를 드는 사람도 적어진다.
                            타인에게 얘기했다 해도, 결국은 주로 우리 자신에게 얘기한 것에 불과하다는 사실을.
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

export default JB