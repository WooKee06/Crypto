import React, { useState } from 'react'
import GraficWidgets from '../components/GraficWidgets'
import OrderSelect from '../components/OrderSelect'
import '../styles/newSignal.scss'

const NewSignal = () => {
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
				<div class='newsignal-first-wrapper'>
					<div class='alerts'>
						<div class='section-wrap'>
							<div class='wrap__header'>
								<h2>Set Alerts</h2>
							</div>
							<div class='wrap-content'>
								<div class='select-wrap'>
									<OrderSelect
										orders={['coin', 'coin 2', 'coin 3', 'coin 4']}
										title={'Направление движения'}
									/>

									<OrderSelect
										orders={['1D', '4H', '1H', '30M', '15M', '5M', '1M']}
										title={'Выберите таймфрейм'}
									/>
								</div>
								<div class='select-wrap'>
									<OrderSelect
										orders={['Up', 'Down', 'NO']}
										title={'Выберите направление'}
									/>
									<OrderSelect
										orders={['MACD', 'RSI', 'PUMP']}
										title={'Выберите сигнал'}
									/>
								</div>

								<button>Enter</button>
							</div>
						</div>
					</div>
					<div class='position'>
						<div class='section-wrap'>
							<div class='wrap__header'>
								<h2>Alerts</h2>
								<input type='text ' placeholder='Search' />
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
												<td data-label='Тип Сигнала'>MACD_CROSS_ZERO</td>
												<td data-label='Дата/время'>Data</td>
												<td>
													<button onClick={openModalHandler}>
														Открыть график
													</button>
												</td>
											</tr>
											<tr>
												<td data-label='Coin'>BTC</td>
												<td data-label='Таймфрейм'>1 h</td>
												<td data-label='Направление движения'>UP</td>
												<td data-label='Тип Сигнала'>RSI</td>
												<td data-label='Дата/время'>Data</td>
												<td>
													<button onClick={openModalHandler}>
														Открыть график
													</button>
												</td>
											</tr>
											<tr>
												<td data-label='Coin'>BTC</td>
												<td data-label='Таймфрейм'>1 h</td>
												<td data-label='Направление движения'>UP</td>
												<td data-label='Тип Сигнала'>EMA 21 CROSS EMA 50</td>
												<td data-label='Дата/время'>Data</td>
												<td>
													<button onClick={openModalHandler}>
														Открыть график
													</button>
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

export default NewSignal
