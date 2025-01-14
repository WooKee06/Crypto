import React, { useState } from 'react'
import GraficWidgets from '../components/GraficWidgets'
import '../styles/flowSignal.scss'
const FlowSignal = () => {
	const [openModal, setOpenModal] = useState(false)
	const openModalHandler = () => {
		setOpenModal(true)
	}
	const closeModalHandler = () => {
		setOpenModal(false)
	}
	return (
		<>
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
				<div class='flowsignal-first-wrapper'>
					<div class='position'>
						<div class='section-wrap'>
							<div class='wrap__header'>
								<h2>Signal list</h2>
								<div>
									<input type='text ' placeholder='Search' />
									<button>
										Добавить сигнал
										<svg
											width='20'
											height='20'
											viewBox='0 0 24 24'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z'
												fill='black'
												fill-opacity='0.25'
											/>
											<path
												d='M12 8V16M16 12H8'
												stroke='black'
												strokeWidth='1.2'
												strokeLinecap='square'
												strokeLinejoin='round'
											/>
										</svg>
									</button>
								</div>
							</div>
							<div class='wrap-content'>
								<div class='position-items'>
									<table>
										<thead>
											<tr>
												<th>Coin</th>
												<th>Таймфрейм</th>
												<th>Направление движения</th>
												<th>Тип сигнала</th>
												<th>Дата и время формирования сигнала</th>
												<th>Управление</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td data-label='Coin'>BTC</td>
												<td data-label='Таймфрейм'>1 h</td>
												<td data-label='Направление движения'>UP</td>
												<td data-label='Тип сигнала'>RSI</td>
												<td data-label='Дата/время'>Data</td>
												<td>
													<div className='table-btn'>
														<button onClick={openModalHandler}>
															Открыть график
														</button>
														<button>
															<svg
																width='18'
																height='18'
																viewBox='0 0 24 24'
																fill='none'
																xmlns='http://www.w3.org/2000/svg'
															>
																<g clip-path='url(#clip0_4765_228)'>
																	<path
																		d='M20 5C20.2652 5 20.5196 5.10536 20.7071 5.29289C20.8946 5.48043 21 5.73478 21 6C21 6.26522 20.8946 6.51957 20.7071 6.70711C20.5196 6.89464 20.2652 7 20 7H19L18.997 7.071L18.064 20.142C18.0281 20.6466 17.8023 21.1188 17.4321 21.4636C17.0619 21.8083 16.5749 22 16.069 22H7.93C7.42414 22 6.93707 21.8083 6.56688 21.4636C6.1967 21.1188 5.97092 20.6466 5.935 20.142L5.002 7.072L5 7H4C3.73478 7 3.48043 6.89464 3.29289 6.70711C3.10536 6.51957 3 6.26522 3 6C3 5.73478 3.10536 5.48043 3.29289 5.29289C3.48043 5.10536 3.73478 5 4 5H20ZM14 2C14.2652 2 14.5196 2.10536 14.7071 2.29289C14.8946 2.48043 15 2.73478 15 3C15 3.26522 14.8946 3.51957 14.7071 3.70711C14.5196 3.89464 14.2652 4 14 4H10C9.73478 4 9.48043 3.89464 9.29289 3.70711C9.10536 3.51957 9 3.26522 9 3C9 2.73478 9.10536 2.48043 9.29289 2.29289C9.48043 2.10536 9.73478 2 10 2H14Z'
																		fill='black'
																	/>
																</g>
																<defs>
																	<clipPath id='clip0_4765_228'>
																		<rect width='24' height='24' fill='white' />
																	</clipPath>
																</defs>
															</svg>
														</button>
													</div>
												</td>
											</tr>
											<tr>
												<td data-label='Coin'>BTC</td>
												<td data-label='Таймфрейм'>1 h</td>
												<td data-label='Направление движения'>UP</td>
												<td data-label='Transaction'>EMA 21 CROSS EMA 50</td>
												<td data-label='Дата/время'>Data</td>
												<td>
													<div className='table-btn'>
														<button onClick={openModalHandler}>
															Открыть график
														</button>
														<button>
															<svg
																width='18'
																height='18'
																viewBox='0 0 24 24'
																fill='none'
																xmlns='http://www.w3.org/2000/svg'
															>
																<g clip-path='url(#clip0_4765_228)'>
																	<path
																		d='M20 5C20.2652 5 20.5196 5.10536 20.7071 5.29289C20.8946 5.48043 21 5.73478 21 6C21 6.26522 20.8946 6.51957 20.7071 6.70711C20.5196 6.89464 20.2652 7 20 7H19L18.997 7.071L18.064 20.142C18.0281 20.6466 17.8023 21.1188 17.4321 21.4636C17.0619 21.8083 16.5749 22 16.069 22H7.93C7.42414 22 6.93707 21.8083 6.56688 21.4636C6.1967 21.1188 5.97092 20.6466 5.935 20.142L5.002 7.072L5 7H4C3.73478 7 3.48043 6.89464 3.29289 6.70711C3.10536 6.51957 3 6.26522 3 6C3 5.73478 3.10536 5.48043 3.29289 5.29289C3.48043 5.10536 3.73478 5 4 5H20ZM14 2C14.2652 2 14.5196 2.10536 14.7071 2.29289C14.8946 2.48043 15 2.73478 15 3C15 3.26522 14.8946 3.51957 14.7071 3.70711C14.5196 3.89464 14.2652 4 14 4H10C9.73478 4 9.48043 3.89464 9.29289 3.70711C9.10536 3.51957 9 3.26522 9 3C9 2.73478 9.10536 2.48043 9.29289 2.29289C9.48043 2.10536 9.73478 2 10 2H14Z'
																		fill='black'
																	/>
																</g>
																<defs>
																	<clipPath id='clip0_4765_228'>
																		<rect width='24' height='24' fill='white' />
																	</clipPath>
																</defs>
															</svg>
														</button>
													</div>
												</td>
											</tr>
											<tr>
												<td data-label='Coin'>BTC</td>
												<td data-label='Таймфрейм'> 1 h</td>
												<td data-label='Направление движения'>UP</td>
												<td data-label='Transaction'>MACD_CROSS_ZERO</td>
												<td data-label='Дата/время'>Data</td>
												<td>
													<div className='table-btn'>
														<button onClick={openModalHandler}>
															Открыть график
														</button>
														<button>
															<svg
																width='18'
																height='18'
																viewBox='0 0 24 24'
																fill='none'
																xmlns='http://www.w3.org/2000/svg'
															>
																<g clip-path='url(#clip0_4765_228)'>
																	<path
																		d='M20 5C20.2652 5 20.5196 5.10536 20.7071 5.29289C20.8946 5.48043 21 5.73478 21 6C21 6.26522 20.8946 6.51957 20.7071 6.70711C20.5196 6.89464 20.2652 7 20 7H19L18.997 7.071L18.064 20.142C18.0281 20.6466 17.8023 21.1188 17.4321 21.4636C17.0619 21.8083 16.5749 22 16.069 22H7.93C7.42414 22 6.93707 21.8083 6.56688 21.4636C6.1967 21.1188 5.97092 20.6466 5.935 20.142L5.002 7.072L5 7H4C3.73478 7 3.48043 6.89464 3.29289 6.70711C3.10536 6.51957 3 6.26522 3 6C3 5.73478 3.10536 5.48043 3.29289 5.29289C3.48043 5.10536 3.73478 5 4 5H20ZM14 2C14.2652 2 14.5196 2.10536 14.7071 2.29289C14.8946 2.48043 15 2.73478 15 3C15 3.26522 14.8946 3.51957 14.7071 3.70711C14.5196 3.89464 14.2652 4 14 4H10C9.73478 4 9.48043 3.89464 9.29289 3.70711C9.10536 3.51957 9 3.26522 9 3C9 2.73478 9.10536 2.48043 9.29289 2.29289C9.48043 2.10536 9.73478 2 10 2H14Z'
																		fill='black'
																	/>
																</g>
																<defs>
																	<clipPath id='clip0_4765_228'>
																		<rect width='24' height='24' fill='white' />
																	</clipPath>
																</defs>
															</svg>
														</button>
													</div>
												</td>
											</tr>
											<tr>
												<td data-label='Coin'>BTC</td>
												<td data-label='Таймфрейм'>1 h</td>
												<td data-label='Направление движения'>UP</td>
												<td data-label='Тип сигнала'>RSI</td>
												<td data-label='Дата/время'>Data</td>
												<td>
													<div className='table-btn'>
														<button onClick={openModalHandler}>
															Открыть график
														</button>
														<button>
															<svg
																width='18'
																height='18'
																viewBox='0 0 24 24'
																fill='none'
																xmlns='http://www.w3.org/2000/svg'
															>
																<g clip-path='url(#clip0_4765_228)'>
																	<path
																		d='M20 5C20.2652 5 20.5196 5.10536 20.7071 5.29289C20.8946 5.48043 21 5.73478 21 6C21 6.26522 20.8946 6.51957 20.7071 6.70711C20.5196 6.89464 20.2652 7 20 7H19L18.997 7.071L18.064 20.142C18.0281 20.6466 17.8023 21.1188 17.4321 21.4636C17.0619 21.8083 16.5749 22 16.069 22H7.93C7.42414 22 6.93707 21.8083 6.56688 21.4636C6.1967 21.1188 5.97092 20.6466 5.935 20.142L5.002 7.072L5 7H4C3.73478 7 3.48043 6.89464 3.29289 6.70711C3.10536 6.51957 3 6.26522 3 6C3 5.73478 3.10536 5.48043 3.29289 5.29289C3.48043 5.10536 3.73478 5 4 5H20ZM14 2C14.2652 2 14.5196 2.10536 14.7071 2.29289C14.8946 2.48043 15 2.73478 15 3C15 3.26522 14.8946 3.51957 14.7071 3.70711C14.5196 3.89464 14.2652 4 14 4H10C9.73478 4 9.48043 3.89464 9.29289 3.70711C9.10536 3.51957 9 3.26522 9 3C9 2.73478 9.10536 2.48043 9.29289 2.29289C9.48043 2.10536 9.73478 2 10 2H14Z'
																		fill='black'
																	/>
																</g>
																<defs>
																	<clipPath id='clip0_4765_228'>
																		<rect width='24' height='24' fill='white' />
																	</clipPath>
																</defs>
															</svg>
														</button>
													</div>
												</td>
											</tr>
											<tr>
												<td data-label='Coin'>BTC</td>
												<td data-label='Таймфрейм'>1 h</td>
												<td data-label='Направление движения'>UP</td>
												<td data-label='Transaction'>EMA 21 CROSS EMA 50</td>
												<td data-label='Дата/время'>Data</td>
												<td>
													<div className='table-btn'>
														<button onClick={openModalHandler}>
															Открыть график
														</button>
														<button>
															<svg
																width='18'
																height='18'
																viewBox='0 0 24 24'
																fill='none'
																xmlns='http://www.w3.org/2000/svg'
															>
																<g clip-path='url(#clip0_4765_228)'>
																	<path
																		d='M20 5C20.2652 5 20.5196 5.10536 20.7071 5.29289C20.8946 5.48043 21 5.73478 21 6C21 6.26522 20.8946 6.51957 20.7071 6.70711C20.5196 6.89464 20.2652 7 20 7H19L18.997 7.071L18.064 20.142C18.0281 20.6466 17.8023 21.1188 17.4321 21.4636C17.0619 21.8083 16.5749 22 16.069 22H7.93C7.42414 22 6.93707 21.8083 6.56688 21.4636C6.1967 21.1188 5.97092 20.6466 5.935 20.142L5.002 7.072L5 7H4C3.73478 7 3.48043 6.89464 3.29289 6.70711C3.10536 6.51957 3 6.26522 3 6C3 5.73478 3.10536 5.48043 3.29289 5.29289C3.48043 5.10536 3.73478 5 4 5H20ZM14 2C14.2652 2 14.5196 2.10536 14.7071 2.29289C14.8946 2.48043 15 2.73478 15 3C15 3.26522 14.8946 3.51957 14.7071 3.70711C14.5196 3.89464 14.2652 4 14 4H10C9.73478 4 9.48043 3.89464 9.29289 3.70711C9.10536 3.51957 9 3.26522 9 3C9 2.73478 9.10536 2.48043 9.29289 2.29289C9.48043 2.10536 9.73478 2 10 2H14Z'
																		fill='black'
																	/>
																</g>
																<defs>
																	<clipPath id='clip0_4765_228'>
																		<rect width='24' height='24' fill='white' />
																	</clipPath>
																</defs>
															</svg>
														</button>
													</div>
												</td>
											</tr>
											<tr>
												<td data-label='Coin'>BTC</td>
												<td data-label='Таймфрейм'> 1 h</td>
												<td data-label='Направление движения'>UP</td>
												<td data-label='Transaction'>MACD_CROSS_ZERO</td>
												<td data-label='Дата/время'>Data</td>
												<td>
													<div className='table-btn'>
														<button onClick={openModalHandler}>
															Открыть график
														</button>
														<button>
															<svg
																width='18'
																height='18'
																viewBox='0 0 24 24'
																fill='none'
																xmlns='http://www.w3.org/2000/svg'
															>
																<g clip-path='url(#clip0_4765_228)'>
																	<path
																		d='M20 5C20.2652 5 20.5196 5.10536 20.7071 5.29289C20.8946 5.48043 21 5.73478 21 6C21 6.26522 20.8946 6.51957 20.7071 6.70711C20.5196 6.89464 20.2652 7 20 7H19L18.997 7.071L18.064 20.142C18.0281 20.6466 17.8023 21.1188 17.4321 21.4636C17.0619 21.8083 16.5749 22 16.069 22H7.93C7.42414 22 6.93707 21.8083 6.56688 21.4636C6.1967 21.1188 5.97092 20.6466 5.935 20.142L5.002 7.072L5 7H4C3.73478 7 3.48043 6.89464 3.29289 6.70711C3.10536 6.51957 3 6.26522 3 6C3 5.73478 3.10536 5.48043 3.29289 5.29289C3.48043 5.10536 3.73478 5 4 5H20ZM14 2C14.2652 2 14.5196 2.10536 14.7071 2.29289C14.8946 2.48043 15 2.73478 15 3C15 3.26522 14.8946 3.51957 14.7071 3.70711C14.5196 3.89464 14.2652 4 14 4H10C9.73478 4 9.48043 3.89464 9.29289 3.70711C9.10536 3.51957 9 3.26522 9 3C9 2.73478 9.10536 2.48043 9.29289 2.29289C9.48043 2.10536 9.73478 2 10 2H14Z'
																		fill='black'
																	/>
																</g>
																<defs>
																	<clipPath id='clip0_4765_228'>
																		<rect width='24' height='24' fill='white' />
																	</clipPath>
																</defs>
															</svg>
														</button>
													</div>
												</td>
											</tr>
											<tr>
												<td data-label='Coin'>BTC</td>
												<td data-label='Таймфрейм'>1 h</td>
												<td data-label='Направление движения'>UP</td>
												<td data-label='Тип сигнала'>RSI</td>
												<td data-label='Дата/время'>Data</td>
												<td>
													<div className='table-btn'>
														<button onClick={openModalHandler}>
															Открыть график
														</button>
														<button>
															<svg
																width='18'
																height='18'
																viewBox='0 0 24 24'
																fill='none'
																xmlns='http://www.w3.org/2000/svg'
															>
																<g clip-path='url(#clip0_4765_228)'>
																	<path
																		d='M20 5C20.2652 5 20.5196 5.10536 20.7071 5.29289C20.8946 5.48043 21 5.73478 21 6C21 6.26522 20.8946 6.51957 20.7071 6.70711C20.5196 6.89464 20.2652 7 20 7H19L18.997 7.071L18.064 20.142C18.0281 20.6466 17.8023 21.1188 17.4321 21.4636C17.0619 21.8083 16.5749 22 16.069 22H7.93C7.42414 22 6.93707 21.8083 6.56688 21.4636C6.1967 21.1188 5.97092 20.6466 5.935 20.142L5.002 7.072L5 7H4C3.73478 7 3.48043 6.89464 3.29289 6.70711C3.10536 6.51957 3 6.26522 3 6C3 5.73478 3.10536 5.48043 3.29289 5.29289C3.48043 5.10536 3.73478 5 4 5H20ZM14 2C14.2652 2 14.5196 2.10536 14.7071 2.29289C14.8946 2.48043 15 2.73478 15 3C15 3.26522 14.8946 3.51957 14.7071 3.70711C14.5196 3.89464 14.2652 4 14 4H10C9.73478 4 9.48043 3.89464 9.29289 3.70711C9.10536 3.51957 9 3.26522 9 3C9 2.73478 9.10536 2.48043 9.29289 2.29289C9.48043 2.10536 9.73478 2 10 2H14Z'
																		fill='black'
																	/>
																</g>
																<defs>
																	<clipPath id='clip0_4765_228'>
																		<rect width='24' height='24' fill='white' />
																	</clipPath>
																</defs>
															</svg>
														</button>
													</div>
												</td>
											</tr>
											<tr>
												<td data-label='Coin'>BTC</td>
												<td data-label='Таймфрейм'>1 h</td>
												<td data-label='Направление движения'>UP</td>
												<td data-label='Transaction'>EMA 21 CROSS EMA 50</td>
												<td data-label='Дата/время'>Data</td>
												<td>
													<div className='table-btn'>
														<button onClick={openModalHandler}>
															Открыть график
														</button>
														<button>
															<svg
																width='18'
																height='18'
																viewBox='0 0 24 24'
																fill='none'
																xmlns='http://www.w3.org/2000/svg'
															>
																<g clip-path='url(#clip0_4765_228)'>
																	<path
																		d='M20 5C20.2652 5 20.5196 5.10536 20.7071 5.29289C20.8946 5.48043 21 5.73478 21 6C21 6.26522 20.8946 6.51957 20.7071 6.70711C20.5196 6.89464 20.2652 7 20 7H19L18.997 7.071L18.064 20.142C18.0281 20.6466 17.8023 21.1188 17.4321 21.4636C17.0619 21.8083 16.5749 22 16.069 22H7.93C7.42414 22 6.93707 21.8083 6.56688 21.4636C6.1967 21.1188 5.97092 20.6466 5.935 20.142L5.002 7.072L5 7H4C3.73478 7 3.48043 6.89464 3.29289 6.70711C3.10536 6.51957 3 6.26522 3 6C3 5.73478 3.10536 5.48043 3.29289 5.29289C3.48043 5.10536 3.73478 5 4 5H20ZM14 2C14.2652 2 14.5196 2.10536 14.7071 2.29289C14.8946 2.48043 15 2.73478 15 3C15 3.26522 14.8946 3.51957 14.7071 3.70711C14.5196 3.89464 14.2652 4 14 4H10C9.73478 4 9.48043 3.89464 9.29289 3.70711C9.10536 3.51957 9 3.26522 9 3C9 2.73478 9.10536 2.48043 9.29289 2.29289C9.48043 2.10536 9.73478 2 10 2H14Z'
																		fill='black'
																	/>
																</g>
																<defs>
																	<clipPath id='clip0_4765_228'>
																		<rect width='24' height='24' fill='white' />
																	</clipPath>
																</defs>
															</svg>
														</button>
													</div>
												</td>
											</tr>
											<tr>
												<td data-label='Coin'>BTC</td>
												<td data-label='Таймфрейм'> 1 h</td>
												<td data-label='Направление движения'>UP</td>
												<td data-label='Transaction'>MACD_CROSS_ZERO</td>
												<td data-label='Дата/время'>Data</td>
												<td>
													<div className='table-btn'>
														<button onClick={openModalHandler}>
															Открыть график
														</button>
														<button>
															<svg
																width='18'
																height='18'
																viewBox='0 0 24 24'
																fill='none'
																xmlns='http://www.w3.org/2000/svg'
															>
																<g clip-path='url(#clip0_4765_228)'>
																	<path
																		d='M20 5C20.2652 5 20.5196 5.10536 20.7071 5.29289C20.8946 5.48043 21 5.73478 21 6C21 6.26522 20.8946 6.51957 20.7071 6.70711C20.5196 6.89464 20.2652 7 20 7H19L18.997 7.071L18.064 20.142C18.0281 20.6466 17.8023 21.1188 17.4321 21.4636C17.0619 21.8083 16.5749 22 16.069 22H7.93C7.42414 22 6.93707 21.8083 6.56688 21.4636C6.1967 21.1188 5.97092 20.6466 5.935 20.142L5.002 7.072L5 7H4C3.73478 7 3.48043 6.89464 3.29289 6.70711C3.10536 6.51957 3 6.26522 3 6C3 5.73478 3.10536 5.48043 3.29289 5.29289C3.48043 5.10536 3.73478 5 4 5H20ZM14 2C14.2652 2 14.5196 2.10536 14.7071 2.29289C14.8946 2.48043 15 2.73478 15 3C15 3.26522 14.8946 3.51957 14.7071 3.70711C14.5196 3.89464 14.2652 4 14 4H10C9.73478 4 9.48043 3.89464 9.29289 3.70711C9.10536 3.51957 9 3.26522 9 3C9 2.73478 9.10536 2.48043 9.29289 2.29289C9.48043 2.10536 9.73478 2 10 2H14Z'
																		fill='black'
																	/>
																</g>
																<defs>
																	<clipPath id='clip0_4765_228'>
																		<rect width='24' height='24' fill='white' />
																	</clipPath>
																</defs>
															</svg>
														</button>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

export default FlowSignal
