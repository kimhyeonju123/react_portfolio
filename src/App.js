import {Route, Switch} from 'react-router-dom';

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
	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Header/>
					<Banner/>
					<Frame/>
					<News/>
					<Footer/>
				</Route>

				{/* 서브페이지 */}
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
