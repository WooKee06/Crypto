import React from 'react'
import OrderSelect from '../components/OrderSelect'
import '../styles/Alerts.scss'

const Alerts = () => {
	return (
		<>
			<main>
				<div class=' alerts-wrapper'>
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
									<div class='price'>
										<div class='title'>Цена срабатывания Аларма</div>
										<div class='price-content'>
											<input type='text' placeholder='1.023 ' />
										</div>
									</div>

									<OrderSelect
										orders={['Up', 'Down', 'NO']}
										title={'Выберите направление'}
									/>
								</div>
								<textarea
									name=''
									id=''
									placeholder='Комментарий пользователя '
								></textarea>
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
												<th>Статус оповищения</th>
												<th>Комментарий</th>
												<th>Управление</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td data-label='Coin'>BTC</td>
												<td data-label='Таймфрейм'>1 h</td>
												<td data-label='Направление движения'>UP</td>
												<td data-label='Статус оповищения'>Активен</td>
												<td>Цена скорректировалась. Открыть лонг позицию</td>
												<td>
													<button>Изменить</button>
													<button>Удалить</button>
												</td>
											</tr>
											<tr>
												<td data-label='Coin'>BTC</td>
												<td data-label='Таймфрейм'>1 h</td>
												<td data-label='Направление движения'>UP</td>
												<td data-label='Статус оповищения'>Активен</td>
												<td>Цена скорректировалась. Открыть лонг позицию</td>
												<td>
													<button>Изменить</button>
													<button>Удалить</button>
												</td>
											</tr>
											<tr>
												<td data-label='Coin'>BTC</td>
												<td data-label='Таймфрейм'>1 h</td>
												<td data-label='Направление движения'>UP</td>
												<td data-label='Статус оповищения'>Активен</td>
												<td>Цена скорректировалась. Открыть лонг позицию</td>
												<td>
													<button>Изменить</button>
													<button>Удалить</button>
												</td>
											</tr>

											<tr>
												<td data-label='Coin'>BTC</td>
												<td data-label='Таймфрейм'>1 h</td>
												<td data-label='Направление движения'>UP</td>
												<td
													data-label='Статус оповищения'
													style={{ color: '#f63c6b' }}
												>
													Не активн
												</td>
												<td>Цена скорректировалась. Открыть лонг позицию</td>
												<td>
													<button>Изменить</button>
													<button>Удалить</button>
												</td>
											</tr>
											<tr>
												<td data-label='Coin'>BTC</td>
												<td data-label='Таймфрейм'>1 h</td>
												<td data-label='Направление движения'>UP</td>
												<td
													data-label='Статус оповищения'
													style={{ color: '#f63c6b' }}
												>
													Не активн
												</td>
												<td>Цена скорректировалась. Открыть лонг позицию</td>
												<td>
													<button>Изменить</button>
													<button>Удалить</button>
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

export default Alerts
