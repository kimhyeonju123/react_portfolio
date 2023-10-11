import React, { useEffect, useState } from 'react'

function About() {
    const pubURL = process.env.PUBLIC_URL +'/img/';
    const [btnColors, setBtnColors] = useState("mapBtn2");
    const getState = (mapB) => {
        setBtnColors(mapB)
    }
  return (
    <div>
        <main>
            <section id="wrap">
                <div className="inner">
                    <img src={pubURL+'tree.jpg'} alt='나무가 가득한 숲의 사진'/>
                    <h2>Lorem ipsum dolor sit.</h2>
                </div>
                <div id="info_news">
                    <h1>IDENTITY</h1>
                    <div className="box box1">
                        <h2>talk</h2>
                        <div className="pic">
                            <img src={pubURL + 'talk.jpg'} alt="책을 들고 있는 사람과 컵을 들고 있는 사람이 대화하는 사진"/>
                        </div>
                    </div>
                    <div className="box box2">
                        <h2>rest</h2>
                        <div className="pic">
                            <img src={pubURL + 'rest.jpg'} alt="침대 위에 올려진 책과 컵 사진"/>
                        </div>
                    </div>
                    <div className="box box3">
                        <h2>think</h2>
                        <div className="pic">
                            <img src={pubURL + 'think.jpg'} alt="빛나는 전구를 향해 힘차게 계단을 올라가고 있는 졸라맨 그림"/>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <section id="info_banner">
            <img src={pubURL+'library.jpg'} alt='낡은 책들이 가득한 도서관 사진'/>
            <div className="inner">
                <h2>Lorem ipsum dolor sit.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, fugit.</p>
            </div>
        </section>

        <section id="location">
            <div className="inner">
                <h1>LOCATION</h1>
                <div id="map"></div>
                <ul className="traffic">
                    <li className={btnColors === 'mapBtn1' ? 'on' : ''} onClick={()=>{getState('mapBtn1')}}>교통정보 보기</li>
                    <li className={btnColors === 'mapBtn2' ? 'on' : ''}  onClick={()=>{getState('mapBtn2')}}>교통정보 끄기</li>
                </ul>
            </div>
        </section>
    </div>
  )
}

export default About