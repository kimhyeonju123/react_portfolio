import {Route, Switch} from 'react-router-dom';
import { useMemo, useRef } from 'react';

import './scss/style.scss';
import Header from "./component/common/Header";
import Footer from "./component/common/Footer";

import Banner from "./component/main/Banner";
import Frame from './component/main/Frame';
import News from './component/main/News';

// sub
import BN from './component/sub/BN';
import CJ from './component/sub/CJ';
import JB from './component/sub/JB';
import About from './component/sub/About';


function App() {
	const uMemo = useMemo(() => {
		console.log("useMemo")
		return ["blue", "green", "yellow"];
	}, []);

	const countRef = useRef(0);
	function plusRef() {
		countRef.current = countRef.current + 1;
		console.log("useRef :", countRef.current);
		// 렌더링 시켜주면 업데이트도미
	}
	return (
		<>
			<Switch>
				<Route exact path='/'>
					<p>Ref : {countRef.current}</p>
					<button onClick={plusRef}>Up Ref</button>
					<Header/>
					<Banner uMemo={uMemo}/>
					<Frame/>
					<News/>
					<Footer/>
				</Route>

				<Route path='/BernardWerber'>
					<Header/>
					<BN/>
					<Footer/>
				</Route>

				<Route path='/KimChoyeop'>
					<Header/>
					<CJ/>
					<Footer/>
				</Route>

				<Route path='/JulianBarnes'>
					<Header/>
					<JB/>
					<Footer/>
				</Route>

				<Route path='/About'>
					<Header/>
					<About/>
					<Footer/>
				</Route>
			</Switch>
		</>
	);
}

export default App;
