import React from 'react'

function News() {
  return (
    <div>
        <section id="news">
            <div className="inner">
                <h1 className="on">
                    당신의 영혼은 젊다는 걸 기억해요.
                    <p>
                        『심판』 - 카롤린
                    </p>
                </h1>
                <h1>
                    나는 내 우울을 쓰다듬고 손 위에 두기를 원해.
                    <p>
                        『우리가 빛의 속도로 갈 수 없다면』 - 감성의 물성
                    </p>
                </h1>
                <h1>
                    역사는 부정확한 기억이 불충분한 문서와<br/>
                    만나는 지점에서 빚어지는 확신입니다.
                    <p>
                        『예감은 틀리지 않는다』 - 역사란 무엇인가
                    </p>
                </h1>
                <div className="wrap">
                    <nav>
                        <a href="#;" className="on">베르나르베르베르</a>
                        <a href="#;">김초엽</a>
                        <a href="#;">줄리언반스</a>
                    </nav>
                    <div id="bwBox" className="on active">
                        <article>
                            <div className="boxInner">
                                <div className="pic">
                                    <img src="img/Bernard_Werber2.jpg" alt="베르나르 베르베르가 정면을 보며 웃고있는 사진"/>
                                </div>
                                <div className="box">
                                    <a href="#;">베르나르 베르베르</a>
                                    <p>"저한테 <span>글을 쓰는 건 뭔가를 먹는 것</span>과 같습니다. 글쓰기는 제가 세상을 소화하는 방식이고,<br/>세상의 수많은 문제들에 대해
                                        나름의 답변을 내고, 대응하는 것이기도 합니다."</p>
                                    <span>대표작 : 《개미》, 《타나토노트》, 《파피용》</span>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div id="cyBox">
                        <article>
                            <div className="boxInner">
                                <div className="pic">
                                    <img src="img/KimChoyeop.jpg" alt="김초엽이 몸을 사선으로 돌리고 정면을 보고 있는 사진"/>
                                </div>
                                <div className="box">
                                    <a href="#;">김초엽</a>
                                    <p>"우리가 생각하고 느끼는 것들이 <span>물질적인 세계</span>와 어떤 방식으로 <span>연결</span>되는지 궁금했거든요."</p>
                                    <span>대표작 : 《방금 떠나온 세계》, 《우리가 빛의 속도로 갈 수 없다면》, 《지구 끝의 온실》</span>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div id="jbBox">
                        <article>
                            <div className="boxInner">
                                <div className="pic">
                                    <img src="img/Julian_Barnes.jpg" alt="줄리언 반스가 정면을 보고 있는 사진"/>
                                </div>
                                <div className="box">
                                    <a href="#;">줄리언 반스</a>
                                    <p>"제가 보는 세상은 이렇지만, <span>어떻게 살지는 독자가 결정</span>하는 겁니다."</p>
                                    <span>대표작 : 《플로베르의 앵무새》, 《아서와 조지》, 《예감은 틀리지 않는다》</span>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default News