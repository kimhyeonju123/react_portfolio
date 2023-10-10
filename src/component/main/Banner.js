import React, { useEffect, useState } from 'react'
import { memo } from 'react';

function Banner(props) {
    const [banner, setBanner] = useState("ban1");
    const handlingTab = (ban) => {
        setBanner(ban)
    }
    useEffect(()=>{
        console.log("useEffect,,렌더링")
    },[])
    const {uMemo} = props;
  return (
    <div>
        <section id="banner">
            <div className="inner">
                <ul className="panel">
                {uMemo.map((el) => { //
                    return (
                        <p key={el} style={{ color: el }}>
                            {el}
                        </p>
                    )
                }
                )}
                    <button onClick={() => { handlingTab('ban1') }}>1번배너</button>
                    <button onClick={() => { handlingTab('ban2') }}>2번배너</button>
                    <button onClick={() => { handlingTab('ban3') }}>3번배너</button>
                    <li id="bwBanner" className={banner === 'ban1' ? 'on' : ''}>
                        <img src="./img/Bernard_Werber1.png" alt="베르나르 베르베르 작가의 사진"/>
                        <p>
                            무슨 일이 <br/>일어나더라도<br/>
                            그 어떤 대가를<br/> 치르더라도<br/>
                            <span>전진</span>을 멈추지 말 것
                        </p>
                    </li>
                    <li id="cyBanner" className={banner === 'ban2' ? 'on' : ''}>
                        <img src="./img/kcy1NoBg.png" alt="김초엽 작가의 사진"/>
                        <p>
                            ‘위로의 말’을<br/>
                            건네기보다<br/>
                            독자들에게<br/>
                            건넬 소설에<br/>
                            그런 생각을<br/>
                            담으려고 한다
                        </p>
                    </li>
                    <li id="jbBanner" className={banner === 'ban3' ? 'on' : ''}>
                        <img src="./img/Julian_Barnes2NoBg.png" alt="줄리언 반스 작가의 사진"/>
                        <p>
                            영화 감독으로서의<br/>
                            본분에 충실한 방법은<br/>
                            바로 책의 내용을<br/>
                            배신하는 것입니다
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    </div>
  )
}

export default memo(Banner)