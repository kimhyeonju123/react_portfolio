import React, { memo, useEffect, useState } from 'react';

function Banner() {
    const pubURL = process.env.PUBLIC_URL + '/img/';
    const [Slide, setSlide] = useState(0);

    // 다음 슬라이드로 이동하는 함수
    const nextSlide = ()=>{
        setSlide((prevSlide)=>(prevSlide + 1) % 3);
        // 인덱스 번호가 총 0부터 2임 -> 거기서 1을 더하면 -> 0부터 1까지는 +1하고 %3까지해도 어차피 0 1임
        // 하지만 마지막 인덱스 즉 2번 인덱스에서는 +1 = 3 -> 이게 %3으로 된다면 값은 0으로 바뀐다
        // -> 무한 슬라이드
    }
    // console.log(Slide) //확인용

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 4000);
        // setInterval로 3초마다 호출한 nextSlide(다음 슬라이드로 넘어가는 함수) slideInterval에다가 넣어준다
        // 그리고 setInterval은 찌꺼기들을 남기기 때문에 반드시 클리어를 해줘야 함
        // 그것을 청소해준 것을 휭
        return ()=>{clearInterval(slideInterval)}
    }, [])

    return (
        <div>
            <section id="banner">
                <div className="inner">
                    <ul className="panel">
                        <li id="bwBanner" className={Slide === 0 ? 'on' : ''}>
                            <img src={pubURL+'Bernard_Werber1.png'} alt="베르나르 베르베르 작가의 사진"/>
                            <p>
                                무슨 일이 <br/>일어나더라도<br/>
                                그 어떤 대가를<br/> 치르더라도<br/>
                                <span>전진</span>을 멈추지 말 것
                            </p>
                        </li>
                        <li id="cyBanner" className={Slide === 1 ? 'on' : ''}>
                            <img src={pubURL + 'kcy1NoBg.png'} alt="김초엽 작가의 사진"/>
                            <p>
                                ‘위로의 말’을<br/>
                                건네기보다<br/>
                                독자들에게<br/>
                                건넬 소설에<br/>
                                그런 생각을<br/>
                                담으려고 한다
                            </p>
                        </li>
                        <li id="jbBanner" className={Slide === 2 ? 'on' : ''}>
                            <img src={pubURL + 'Julian_Barnes2NoBg.png'} alt="줄리언 반스 작가의 사진"/>
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
    );
}

export default memo(Banner);
