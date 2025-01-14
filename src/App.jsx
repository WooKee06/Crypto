import { Route, Routes, useLocation } from 'react-router-dom'

import Header from './components/Header.jsx'
import Alerts from './pages/Alerts.jsx'
import Calculate from './pages/Calculate.jsx'
import Dashboard from './pages/Dashboard'
import FlowSignal from './pages/FlowSignal.jsx'
import Grafic from './pages/Grafic.jsx'
import Main from './pages/Main.jsx'
import NewSignal from './pages/NewSignal.jsx'
import Profile from './pages/Profile.jsx'
import Transactions from './pages/Transactions.jsx'

function App() {
	const location = useLocation()

	return (
		<div className='App'>
			{location.pathname !== '/' && <Header />}
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/grafic' element={<Grafic />} />
				<Route path='/alerts' element={<Alerts />} />
				<Route path='/calculate' element={<Calculate />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/transactions' element={<Transactions />} />
				<Route path='/newsignal' element={<NewSignal />} />
				<Route path='/flowsignal' element={<FlowSignal />} />
			</Routes>
		</div>
	)
}

export default App
