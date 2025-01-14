import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GraficWidgets from '../components/GraficWidgets'
import HeatMap from '../components/HeatMap'
import OrderSelect from '../components/OrderSelect'
import '../styles/Dashboard.scss'

const Dashboard = () => {
	const [openModal, setOpenModal] = useState(false)
	const openModalHandler = () => {
		setOpenModal(true)
	}
	const closeModalHandler = () => {
		setOpenModal(false)
	}
	return (
		<div>
			<div id='graficModal' class={`grafic-modal ${openModal ? 'active' : ''}`}>
				<div class='modal-content'>
					<div onClick={closeModalHandler} class='closePop'>
						<svg
							id='closeModal'
							width='36'
							height='36'
							viewBox='0 0 36 36'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M2 2L34 34M2 34L34 2'
								stroke='black'
								strokeWidth='4'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</div>
					<div class='tradingview-widget-container'>
						<div
							id='analytics-platform-chart-demo2'
							class='tradingview-widget-container__widget'
						>
							<GraficWidgets />
						</div>
					</div>
				</div>
			</div>
			<main>
				<div className='dashboard-first-wrapper'>
					<div className='indexes'>
						<div className='section-wrap seller'>
							<div className='wrap__header'>
								<h2>Quick Trade</h2>
								<div className='pop-info'>
									<img id='open-recom-pop' src='../img/burger.svg' alt='' />
									<div className='recomendation-pop'>
										<img src='../img/closer.svg' id='closePop' alt='' />
										<h3>Money</h3>
										<ul>
											<li>
												<div className='title'>
													<img width='15' src='../img/bitcoin.svg' alt='' />
													bitcoin
												</div>

												<a href=''>
													1.045%
													<img width='8' src='../img/bxs_up-arrow.svg' alt='' />
												</a>
											</li>
											<li>
												<div className='title'>
													<img width='15' src='../img/ton.svg' alt='' />
													Ton
												</div>

												<a href=''>
													0.745%
													<img
														width='8'
														src='../img/bxs_up-arrow2.svg'
														alt=''
													/>
												</a>
											</li>
											<li>
												<div className='title'>
													<img width='15' src='../img/bitcoin.svg' alt='' />
													bitcoin
												</div>

												<a href=''>
													1.045%
													<img width='8' src='../img/bxs_up-arrow.svg' alt='' />
												</a>
											</li>
											<li>
												<div className='title'>
													<img width='15' src='../img/ton.svg' alt='' />
													Ton
												</div>

												<a href=''>
													0.745%
													<img
														width='8'
														src='../img/bxs_up-arrow2.svg'
														alt=''
													/>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className='by-section'>
								<OrderSelect
									orders={[
										'По рынку',
										'Лимитный на покупку',
										'Лимитный на покупку выше текущей цены',
										'Лимитный на покупку по трейлу по рынку',
										'Лимитный на покупку по трейлу ниже текущей цены',
										'Лимитный на продажу',
										'Лимитный на продажу выше текущей цены',
										'Лимитный на продажу по трейлу по рынку',
										'Лимитный на продажу по трейлу ниже текущей цены',
									]}
									title={'Выберите ордер'}
								/>
								<div className='filters'>
									<form>
										<input type='text' placeholder='Цена' />
										<input type='text' placeholder='USDT' />
										<hr />
										<input type='text' placeholder='Доли Трейл' />
									</form>
								</div>
								<div className='btns'>
									<button>Buy</button>
									<button>Sell</button>
								</div>
								<div className='agreement'>
									<input type='checkbox' name='' id='' />
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut
									</p>
								</div>
							</div>
						</div>
						<div className='section-wrap grafic'>
							<GraficWidgets />
						</div>
					</div>
					<div className='map'>
						<div className='section-wrap map-wrap'>
							<div className='map-title'>
								<h2>Cryptocurrency Pairs</h2>
								<div>
									<input type='text' placeholder='Search' />
									<button id='favotite-list-open'>
										<svg
											width='24'
											height='24'
											id='favotite-list-svg'
											viewBox='0 0 24 24'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M17.5 13.8301L16.974 14.3641C17.1143 14.5021 17.3032 14.5795 17.5 14.5795C17.6968 14.5795 17.8857 14.5021 18.026 14.3641L17.5 13.8301ZM16.965 17.7371C16.468 17.3711 15.887 16.8911 15.438 16.3741C14.968 15.8331 14.75 15.3741 14.75 15.0361H13.25C13.25 15.9341 13.774 16.7461 14.306 17.3581C14.858 17.9941 15.538 18.5481 16.076 18.9451L16.965 17.7371ZM14.75 15.0361C14.75 14.2791 15.093 13.9191 15.414 13.8041C15.751 13.6821 16.334 13.7341 16.974 14.3641L18.026 13.2951C17.092 12.3751 15.924 12.0251 14.905 12.3931C13.87 12.7661 13.25 13.7851 13.25 15.0361H14.75ZM18.924 18.9451C19.462 18.5491 20.142 17.9941 20.694 17.3581C21.226 16.7451 21.75 15.9341 21.75 15.0361H20.25C20.25 15.3731 20.032 15.8331 19.562 16.3741C19.112 16.8911 18.532 17.3711 18.035 17.7371L18.924 18.9451ZM21.75 15.0361C21.75 13.7851 21.13 12.7661 20.095 12.3931C19.075 12.0251 17.908 12.3751 16.974 13.2951L18.026 14.3641C18.666 13.7341 19.249 13.6821 19.586 13.8041C19.907 13.9191 20.25 14.2801 20.25 15.0361H21.75ZM16.076 18.9451C16.454 19.2231 16.878 19.5701 17.5 19.5701V18.0701C17.48 18.0701 17.464 18.0711 17.403 18.0391C17.2509 17.9476 17.1046 17.8468 16.965 17.7371L16.076 18.9451ZM18.035 17.7371C17.8948 17.8469 17.7489 17.9477 17.596 18.0391C17.536 18.0711 17.52 18.0701 17.5 18.0701V19.5701C18.122 19.5701 18.546 19.2231 18.924 18.9451L18.035 17.7371Z'
												fill='black'
											/>
											<path
												d='M10 14H3M10 18H3M3 6H13.5M20 6H17.75M20 10H9.5M3 10H5.25'
												stroke='black'
												strokeWidth='1.5'
												strokeLinecap='round'
											/>
										</svg>
									</button>
								</div>
							</div>
							<div className='couples-section'>
								<div className='couples-head'>
									<ul>
										<li>Пара</li>
										<li>Текущий курс</li>
										<li>Действия</li>
									</ul>
								</div>
								<div className='couples-cards'>
									<div className='card'>
										<div className='card-content'>
											<h3>LTC - XRP</h3>
											<span>
												<strong>1</strong> LTC = <strong>200</strong> XRP
											</span>
											<button onClick={openModalHandler}>График</button>
										</div>
										<button
											className='favotite-add'
											data-target='favotite-svg1'
										>
											<svg
												width='22'
												height='22'
												id='favotite-svg1'
												viewBox='0 0 257 257'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													d='M208.416 42.7688C179.697 25.1536 154.628 32.2533 139.573 43.5613C133.405 48.198 130.321 50.5217 128.5 50.5217C126.68 50.5217 123.596 48.198 117.428 43.5613C102.372 32.2533 77.3036 25.1536 48.5838 42.7688C10.9012 65.8881 2.37737 142.142 89.3076 206.499C105.863 218.739 114.14 224.875 128.5 224.875C142.86 224.875 151.138 218.75 167.693 206.489C254.623 142.153 246.099 65.8881 208.416 42.7688Z'
													stroke='black'
													strokeWidth='7.5'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</button>
									</div>
									<div className='card'>
										<div className='card-content'>
											<h3>LTC - XRP</h3>
											<span>
												<strong>1</strong> LTC = <strong>200</strong> XRP
											</span>
											<button onClick={openModalHandler}>График</button>
										</div>
										<button
											className='favotite-add'
											data-target='favotite-svg2'
										>
											<svg
												width='22'
												height='22'
												id='favotite-svg2'
												viewBox='0 0 257 257'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													d='M208.416 42.7688C179.697 25.1536 154.628 32.2533 139.573 43.5613C133.405 48.198 130.321 50.5217 128.5 50.5217C126.68 50.5217 123.596 48.198 117.428 43.5613C102.372 32.2533 77.3036 25.1536 48.5838 42.7688C10.9012 65.8881 2.37737 142.142 89.3076 206.499C105.863 218.739 114.14 224.875 128.5 224.875C142.86 224.875 151.138 218.75 167.693 206.489C254.623 142.153 246.099 65.8881 208.416 42.7688Z'
													stroke='black'
													strokeWidth='7.5'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</button>
									</div>
									<div className='card'>
										<div className='card-content'>
											<h3>LTC - XRP</h3>
											<span>
												<strong>1</strong> LTC = <strong>200</strong> XRP
											</span>
											<button onClick={openModalHandler}>График</button>
										</div>
										<button
											className='favotite-add'
											data-target='favotite-svg3'
										>
											<svg
												width='22'
												height='22'
												id='favotite-svg3'
												viewBox='0 0 257 257'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													d='M208.416 42.7688C179.697 25.1536 154.628 32.2533 139.573 43.5613C133.405 48.198 130.321 50.5217 128.5 50.5217C126.68 50.5217 123.596 48.198 117.428 43.5613C102.372 32.2533 77.3036 25.1536 48.5838 42.7688C10.9012 65.8881 2.37737 142.142 89.3076 206.499C105.863 218.739 114.14 224.875 128.5 224.875C142.86 224.875 151.138 218.75 167.693 206.489C254.623 142.153 246.099 65.8881 208.416 42.7688Z'
													stroke='black'
													strokeWidth='7.5'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</button>
									</div>
									<div className='card'>
										<div className='card-content'>
											<h3>LTC - XRP</h3>
											<span>
												<strong>1</strong> LTC = <strong>200</strong> XRP
											</span>
											<button onClick={openModalHandler}>График</button>
										</div>
										<button
											className='favotite-add'
											data-target='favotite-svg4'
										>
											<svg
												width='22'
												height='22'
												id='favotite-svg4'
												viewBox='0 0 257 257'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													d='M208.416 42.7688C179.697 25.1536 154.628 32.2533 139.573 43.5613C133.405 48.198 130.321 50.5217 128.5 50.5217C126.68 50.5217 123.596 48.198 117.428 43.5613C102.372 32.2533 77.3036 25.1536 48.5838 42.7688C10.9012 65.8881 2.37737 142.142 89.3076 206.499C105.863 218.739 114.14 224.875 128.5 224.875C142.86 224.875 151.138 218.75 167.693 206.489C254.623 142.153 246.099 65.8881 208.416 42.7688Z'
													stroke='black'
													strokeWidth='7.5'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</button>
									</div>
									<div className='card'>
										<div className='card-content'>
											<h3>LTC - XRP</h3>
											<span>
												<strong>1</strong> LTC = <strong>200</strong> XRP
											</span>
											<button onClick={openModalHandler}>График</button>
										</div>
										<button
											className='favotite-add'
											data-target='favotite-svg5'
										>
											<svg
												width='22'
												height='22'
												id='favotite-svg5'
												viewBox='0 0 257 257'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													d='M208.416 42.7688C179.697 25.1536 154.628 32.2533 139.573 43.5613C133.405 48.198 130.321 50.5217 128.5 50.5217C126.68 50.5217 123.596 48.198 117.428 43.5613C102.372 32.2533 77.3036 25.1536 48.5838 42.7688C10.9012 65.8881 2.37737 142.142 89.3076 206.499C105.863 218.739 114.14 224.875 128.5 224.875C142.86 224.875 151.138 218.75 167.693 206.489C254.623 142.153 246.099 65.8881 208.416 42.7688Z'
													stroke='black'
													strokeWidth='7.5'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</button>
									</div>
									<div className='card'>
										<div className='card-content'>
											<h3>LTC - XRP</h3>
											<span>
												<strong>1</strong> LTC = <strong>200</strong> XRP
											</span>
											<button onClick={openModalHandler}>График</button>
										</div>
										<button
											className='favotite-add'
											data-target='favotite-svg6'
										>
											<svg
												width='22'
												height='22'
												id='favotite-svg6'
												viewBox='0 0 257 257'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													d='M208.416 42.7688C179.697 25.1536 154.628 32.2533 139.573 43.5613C133.405 48.198 130.321 50.5217 128.5 50.5217C126.68 50.5217 123.596 48.198 117.428 43.5613C102.372 32.2533 77.3036 25.1536 48.5838 42.7688C10.9012 65.8881 2.37737 142.142 89.3076 206.499C105.863 218.739 114.14 224.875 128.5 224.875C142.86 224.875 151.138 218.75 167.693 206.489C254.623 142.153 246.099 65.8881 208.416 42.7688Z'
													stroke='black'
													strokeWidth='7.5'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</button>
									</div>
									<div className='card'>
										<div className='card-content'>
											<h3>LTC - XRP</h3>
											<span>
												<strong>1</strong> LTC = <strong>200</strong> XRP
											</span>
											<button onClick={openModalHandler}>График</button>
										</div>
										<button
											className='favotite-add'
											data-target='favotite-svg7'
										>
											<svg
												width='22'
												height='22'
												id='favotite-svg7'
												viewBox='0 0 257 257'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													d='M208.416 42.7688C179.697 25.1536 154.628 32.2533 139.573 43.5613C133.405 48.198 130.321 50.5217 128.5 50.5217C126.68 50.5217 123.596 48.198 117.428 43.5613C102.372 32.2533 77.3036 25.1536 48.5838 42.7688C10.9012 65.8881 2.37737 142.142 89.3076 206.499C105.863 218.739 114.14 224.875 128.5 224.875C142.86 224.875 151.138 218.75 167.693 206.489C254.623 142.153 246.099 65.8881 208.416 42.7688Z'
													stroke='black'
													strokeWidth='7.5'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</button>
									</div>
									<div className='card'>
										<div className='card-content'>
											<h3>LTC - XRP</h3>
											<span>
												<strong>1</strong> LTC = <strong>200</strong> XRP
											</span>
											<button onClick={openModalHandler}>График</button>
										</div>
										<button
											className='favotite-add'
											data-target='favotite-svg8'
										>
											<svg
												width='22'
												height='22'
												id='favotite-svg8'
												viewBox='0 0 257 257'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													d='M208.416 42.7688C179.697 25.1536 154.628 32.2533 139.573 43.5613C133.405 48.198 130.321 50.5217 128.5 50.5217C126.68 50.5217 123.596 48.198 117.428 43.5613C102.372 32.2533 77.3036 25.1536 48.5838 42.7688C10.9012 65.8881 2.37737 142.142 89.3076 206.499C105.863 218.739 114.14 224.875 128.5 224.875C142.86 224.875 151.138 218.75 167.693 206.489C254.623 142.153 246.099 65.8881 208.416 42.7688Z'
													stroke='black'
													strokeWidth='7.5'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='main-ticker-wrapper'>
					<div className='orders'>
						<div className='section-wrap'>
							<div className='wrap__header'>
								<h2>Positions</h2>
							</div>
							<div className='position-items'>
								<table>
									<thead>
										<tr>
											<th>Ticker</th>
											<th>Кол-во монет</th>
											<th>USDT</th>
											<th>long/short</th>
											<th>Изменение цены</th>
											<th>купить/продать</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td data-label='Ticker'>AAPL</td>
											<td data-label='Кол-во монет'>2.032</td>
											<td data-label='USDT'>253.034 $</td>
											<td data-label='long/short'>
												<svg
													width='42'
													height='24'
													viewBox='0 0 42 24'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<path
														d='M41 1L33.031 21.1308C32.4138 22.6901 30.2669 22.8429 29.4349 21.3868L26.6038 16.4318C26.0141 15.3998 24.6599 15.1068 23.6963 15.8027L18.1696 19.7942C17.2555 20.4544 15.9767 20.2288 15.3436 19.2959L8.917 9.82505C8.05881 8.56035 6.1567 8.6866 5.47319 10.0536L1 19'
														stroke='#34C759'
														strokeWidth='2'
													/>
												</svg>
											</td>
											<td data-label='Изменение цены'>
												<div className='price'>
													6.36%
													<svg
														width='12'
														height='6'
														viewBox='0 0 12 6'
														fill='none'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path d='M0 6L6 2.62268e-07L12 6' fill='#37D159' />
													</svg>
												</div>
											</td>
											<td>
												<button>Купить</button>
												<button>Продать</button>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div className='section-wrap'>
							<div className='wrap__header'>
								<h2>Waiting</h2>
							</div>
							<div className='position-items'>
								<table>
									<thead>
										<tr>
											<th>Ticker</th>
											<th>Кол-во монет</th>
											<th>USDT</th>
											<th>Изменение цены</th>
											<th>купить/продать</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td data-label='Ticker'>AAPL</td>
											<td data-label='Кол-во монет'>2.34</td>
											<td data-label='USDT'>36.023 $</td>
											<td data-label='Изменение цены'>0.76%</td>
											<td>
												<button>Купить</button>
												<button>Продать</button>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div className='section-wrap'>
							<div className='wrap__header'>
								<h2>Tрейл</h2>
							</div>
							<div className='position-items'>
								<table>
									<thead>
										<tr>
											<th>Ticker</th>
											<th>Кол-во монет</th>
											<th>USDT</th>
											<th>Изменение цены</th>
											<th>купить/продать</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td data-label='Ticker'>AAPL</td>
											<td data-label='Кол-во монет'>2.34</td>
											<td data-label='USDT'>36.023 $</td>
											<td data-label='Изменение цены'>0.76%</td>
											<td>
												<button>Купить</button>
												<button>Продать</button>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div className='bot-history'>
						<div className='section-wrap'>
							<div className='wrap__header'>
								<h2>History</h2>
							</div>
							<div className='position-items'>
								<table>
									<thead>
										<tr>
											<th>Ticker</th>
											<th>long/short</th>
											<th>date</th>
											<th>Изменение цены</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>AAPL</td>
											<td>
												<svg
													width='20'
													height='21'
													viewBox='0 0 34 35'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<rect
														width='4.71106'
														height='34.5712'
														rx='2.35553'
														transform='matrix(-1 0 0 1 33.0146 0)'
														fill='#34C759'
													/>
													<rect
														width='4.71106'
														height='25.1427'
														rx='2.35553'
														transform='matrix(-1 0 0 1 23.5928 9.42847)'
														fill='#34C759'
													/>
													<rect
														width='4.71106'
														height='10.9999'
														rx='2.35553'
														transform='matrix(-1 0 0 1 14.1709 23.5713)'
														fill='#34C759'
													/>
													<rect
														width='5.31504'
														height='21.2746'
														rx='2.65752'
														transform='matrix(-1 0 0 1 5.35254 13.2966)'
														fill='#34C759'
													/>
												</svg>
											</td>
											<td>21:30 (МСК)</td>
											<td>0.76%</td>
										</tr>
										<tr>
											<td>AAPL</td>
											<td>
												<svg
													width='20'
													height='21'
													viewBox='0 0 34 35'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<rect
														x='0.0371094'
														width='4.71106'
														height='34.5712'
														rx='2.35553'
														fill='#FF3B30'
													/>
													<rect
														x='9.45898'
														y='9.42847'
														width='4.71106'
														height='25.1427'
														rx='2.35553'
														fill='#FF3B30'
													/>
													<rect
														x='18.8809'
														y='23.5713'
														width='4.71106'
														height='10.9999'
														rx='2.35553'
														fill='#FF3B30'
													/>
													<rect
														x='27.6992'
														y='13.2966'
														width='5.31504'
														height='21.2746'
														rx='2.65752'
														fill='#FF3B30'
													/>
												</svg>
											</td>
											<td>21:30 (МСК)</td>
											<td>0.76%</td>
										</tr>
										<tr>
											<td>AAPL</td>
											<td>
												<svg
													width='20'
													height='21'
													viewBox='0 0 34 35'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<rect
														width='4.71106'
														height='34.5712'
														rx='2.35553'
														transform='matrix(-1 0 0 1 33.0146 0)'
														fill='#34C759'
													/>
													<rect
														width='4.71106'
														height='25.1427'
														rx='2.35553'
														transform='matrix(-1 0 0 1 23.5928 9.42847)'
														fill='#34C759'
													/>
													<rect
														width='4.71106'
														height='10.9999'
														rx='2.35553'
														transform='matrix(-1 0 0 1 14.1709 23.5713)'
														fill='#34C759'
													/>
													<rect
														width='5.31504'
														height='21.2746'
														rx='2.65752'
														transform='matrix(-1 0 0 1 5.35254 13.2966)'
														fill='#34C759'
													/>
												</svg>
											</td>
											<td>21:30 (МСК)</td>
											<td>0.76%</td>
										</tr>
										<tr>
											<td>AAPL</td>
											<td>
												<svg
													width='20'
													height='21'
													viewBox='0 0 34 35'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<rect
														x='0.0371094'
														width='4.71106'
														height='34.5712'
														rx='2.35553'
														fill='#FF3B30'
													/>
													<rect
														x='9.45898'
														y='9.42847'
														width='4.71106'
														height='25.1427'
														rx='2.35553'
														fill='#FF3B30'
													/>
													<rect
														x='18.8809'
														y='23.5713'
														width='4.71106'
														height='10.9999'
														rx='2.35553'
														fill='#FF3B30'
													/>
													<rect
														x='27.6992'
														y='13.2966'
														width='5.31504'
														height='21.2746'
														rx='2.65752'
														fill='#FF3B30'
													/>
												</svg>
											</td>
											<td>21:30 (МСК)</td>
											<td>0.76%</td>
										</tr>
									</tbody>
								</table>
								<button className='table-more-button'>
									<Link to='/transactions'>Подробнее</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className='main-second-wrapper'>
					<div className='heat'>
						<div className='section-wrap'>
							<div className='wrap__header'>
								<h2>Heat Map</h2>
							</div>
							<div className='tradingview-widget-container heatmap-wrap'>
								<HeatMap />
							</div>
						</div>
					</div>
					<div className='diagnostics'>
						<div className='payment'>
							<div className='section-wrap'>
								<div className='wrap__header'>
									<h2>Payment</h2>
								</div>
								<div className='wrap-cards'>
									<div className='card'>
										<div className='card-img'>
											<img src='../img/user-tag.svg' alt='' />
										</div>
										<div className='card-info'>
											<div className='card__title'>
												<h3>Account</h3>
												<h3>
													$3,241 <span>/$10,000</span>
												</h3>
											</div>
											<div className='card__progress'>
												<div></div>
											</div>
										</div>
									</div>
									<div className='card'>
										<div className='card-img'>
											<img src='../img/simcard-2.svg' alt='' />
										</div>
										<div className='card-info'>
											<div className='card__title'>
												<h3>Software</h3>
												<h3>
													$241 <span>/$250</span>
												</h3>
											</div>
											<div className='card__progress'>
												<div></div>
											</div>
										</div>
									</div>
									<div className='card'>
										<div className='card-img'>
											<img src='../img/building-4.svg' alt='' />
										</div>
										<div className='card-info'>
											<div className='card__title'>
												<h3>Rent House</h3>
												<h3>
													$1,541<span>/$52,000</span>
												</h3>
											</div>
											<div className='card__progress'>
												<div></div>
											</div>
										</div>
									</div>
									<div className='card'>
										<div className='card-img'>
											<img src='../img/coffee.svg' alt='' />
										</div>
										<div className='card-info'>
											<div className='card__title'>
												<h3>Food</h3>
												<h3>
													$141<span>/$1,000</span>
												</h3>
											</div>
											<div className='card__progress'>
												<div></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='activity'>
							<div className='section-wrap'>
								<div className='wrap__header'>
									<h2>Activity</h2>
								</div>
								<div className='grafic'>
									<div className='grafic-week'>
										<ul>
											<li>$3k</li>
											<li>$2k</li>
											<li>$1k</li>
											<li>0</li>
										</ul>
									</div>
									<div className='grafic-price'>
										<ul>
											<li>Mo</li>
											<li>Tu</li>
											<li>We</li>
											<li>Th</li>
											<li>Fr</li>
											<li>Sa</li>
											<li>Su</li>
										</ul>
										<svg
											width='343'
											height='174'
											viewBox='0 0 343 174'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<line
												opacity='0.8'
												x1='1'
												y1='173.792'
												x2='343'
												y2='173.792'
												stroke='#383838'
												strokeWidth='0.416319'
											/>
											<path
												opacity='0.8'
												d='M6.95361 0.276367L6.95362 174'
												stroke='#383838'
												strokeWidth='0.832639'
												strokeDasharray='1.67 1.67'
											/>
											<line
												opacity='0.8'
												x1='120.69'
												y1='0.276367'
												x2='120.69'
												y2='174'
												stroke='#383838'
												strokeWidth='0.832639'
												strokeDasharray='1.67 1.67'
											/>
											<line
												opacity='0.8'
												x1='65.3553'
												y1='0.276367'
												x2='65.3553'
												y2='174'
												stroke='#383838'
												strokeWidth='0.832639'
												strokeDasharray='1.67 1.67'
											/>
											<line
												opacity='0.8'
												x1='177.459'
												y1='0.276367'
												x2='177.459'
												y2='174'
												stroke='#383838'
												strokeWidth='0.832639'
												strokeDasharray='1.67 1.67'
											/>
											<line
												opacity='0.8'
												x1='229.36'
												y1='0.276367'
												x2='229.36'
												y2='174'
												stroke='#383838'
												strokeWidth='0.832639'
												strokeDasharray='1.67 1.67'
											/>
											<line
												opacity='0.8'
												x1='282.259'
												y1='0.276367'
												x2='282.259'
												y2='174'
												stroke='#383838'
												strokeWidth='0.832639'
												strokeDasharray='1.67 1.67'
											/>
											<line
												opacity='0.8'
												x1='336.594'
												y1='0.276367'
												x2='336.594'
												y2='174'
												stroke='#383838'
												strokeWidth='0.832639'
												strokeDasharray='1.67 1.67'
											/>
											<rect
												x='0.62793'
												y='89.9714'
												width='12.7276'
												height='84.0288'
												rx='2.49792'
												fill='#12C4A0'
											/>
											<rect
												x='59.1748'
												y='63.4963'
												width='12.7276'
												height='110.504'
												rx='2.49792'
												fill='#12C4A0'
											/>
											<rect
												x='113.903'
												y='47.3813'
												width='12.7276'
												height='126.619'
												rx='2.49792'
												fill='#12C4A0'
											/>
											<rect
												x='171.177'
												y='14'
												width='12.7276'
												height='160'
												rx='2.49792'
												fill='#12C4A0'
											/>
											<rect
												x='223.36'
												y='14'
												width='12.7276'
												height='160'
												rx='2.49792'
												fill='#12C4A0'
											/>
											<rect
												x='275.543'
												y='40.4746'
												width='12.7276'
												height='133.525'
												rx='2.49792'
												fill='#12C4A0'
											/>
											<rect
												x='330.272'
												y='85.3672'
												width='12.7276'
												height='88.6331'
												rx='2.49792'
												fill='#12C4A0'
											/>
											<rect
												x='0.62793'
												y='144.667'
												width='12.7276'
												height='29.3322'
												rx='2.49792'
												fill='#FFCD1E'
											/>
											<rect
												x='59.1748'
												y='135.405'
												width='12.7276'
												height='38.595'
												rx='2.49792'
												fill='#FFCD1E'
											/>
											<rect
												x='113.903'
												y='130.001'
												width='12.7276'
												height='43.9983'
												rx='2.49792'
												fill='#FFCD1E'
											/>
											<rect
												x='171.177'
												y='108.388'
												width='12.7276'
												height='65.6115'
												rx='2.49792'
												fill='#FFCD1E'
											/>
											<rect
												x='223.36'
												y='118.423'
												width='12.7276'
												height='55.5768'
												rx='2.49792'
												fill='#FFCD1E'
											/>
											<rect
												x='275.543'
												y='127.686'
												width='12.7276'
												height='46.314'
												rx='2.49792'
												fill='#FFCD1E'
											/>
											<rect
												x='330.272'
												y='143.124'
												width='12.7276'
												height='30.876'
												rx='2.49792'
												fill='#FFCD1E'
											/>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default Dashboard
