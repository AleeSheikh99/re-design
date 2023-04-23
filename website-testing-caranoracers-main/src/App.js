import './styles/App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TopNavBar from './components/navBar';
import Banner from './components/banner';
import Intro from './pages/intro';
import NFTS from './nfts/nft';
import HowTo from './pages/howto';
import Contact from './pages/contact';
import FollowUs from './pages/followus';
import WalletConnector from './wallet-service/connector';
import GamePage from './Game/gamePage';
import RacesPage from './Game/racesPage';
import AboutPage from './pages/About';
import Contactus from './pages/Contactus';
import LoginForm from './pages/Login';
import NftCollection from './pages/NftCollection';




function App() {
	return (
		<Router>
			<TopNavBar />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Banner />
							<div className="main-wrapper">
								<NFTS />
								<Intro />
								<HowTo />
								<Contact />
								<FollowUs />
							</div>
						</>
					}
				/>
				<Route path="/garage" element={<WalletConnector />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/contactus" element={<Contactus />} />
				<Route path="/nft" element={<NftCollection />} />
				<Route path="/howto" element={<HowTo />} />
				<Route path="/Login" element={<LoginForm />} />
				<Route path="/game" element={<GamePage />} />
				<Route path="/races" element={<RacesPage />} />

			</Routes>
		</Router>
	);
}

export default App;