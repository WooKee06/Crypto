import React from 'react'
import '../styles/Calculate.scss'
const Calculate = () => {
	return (
		<>
			<main>
				<div className='calculate-wrapper'>
					<div className='calculate'>
						<div className='section-wrap'>
							<div className='wrap__header'>
								<h2>Базовый принцып управления риском и торговым депозитом</h2>
							</div>
							<div className='wrap-content'>
								<div className='deposit-input'>
									<div className='title'>Общий депозит</div>
									<input type='number' max='7' placeholder='$0.00' />
								</div>
								<div className='risk-settings'>
									<div className='risk-input'>
										<div className='title'>
											<h3>Допустимый риск потери от депозита на 1 сделку</h3>
										</div>
										<input type='number' max='7' placeholder='0.00%' />
									</div>
									<div className='risk-input'>
										<div className='title'>
											<h3>Потеря денег в $USD на 1 сделку</h3>
										</div>
										<input type='number' max='7' placeholder='$0.00' />
									</div>
								</div>
								<div className='risk-settings'>
									<div className='risk-input'>
										<div className='title'>
											<h3>Стоп-лосс, исходя из анализа</h3>
										</div>
										<input type='number' max='7' placeholder='0.00%' />
									</div>
									<div className='risk-input'>
										<div className='title'>
											<h3>Общий объем позиции</h3>
										</div>
										<input type='number' max='7' placeholder='$0.00' />
										<span className='tooltip-text' id='fade'>
											Расчёт убытка - $0.96
										</span>
									</div>
								</div>

								<hr />

								<div className='risk-settings'>
									<div className='risk-input'>
										<div className='title'>
											<h3>Кредитное плечо на фьючерсах</h3>
										</div>
										<input
											type='number'
											max='7'
											placeholder='кредитное плечо'
										/>
									</div>
									<div className='risk-input'>
										<div className='title'>
											<h3>Маржа на фьючерсах</h3>
										</div>
										<input type='number' max='7' placeholder='0.00%' />
									</div>
								</div>
								<div className='risk-settings'>
									<div className='risk-input'>
										<div className='title'>
											<h3>Цена</h3>
										</div>
										<input type='number' max='7' placeholder='введите цену..' />
									</div>
									<div className='risk-input'>
										<div className='title'>
											<h3>Объем позиции в активах</h3>
										</div>
										<input type='number' max='7' placeholder='0.00' />
									</div>
								</div>
								<button>Рассчитать</button>
							</div>
						</div>
					</div>
					<div className='result'>
						<div className='profit'>
							<div className='section-wrap'>
								<div className='wrap__header'>
									<h2>Рассчёт депозита</h2>
									<span className='tooltip-text' id='fade'>
										Риск 0,5% на сделку (риск/выгода: 1 к 3)
									</span>
								</div>
								<div className='wrap-content'>
									<div className='profit-item'>
										<div className='item-id'>1</div>
										<div className='item-deposit'>995,00</div>
										<div className='item-answer-minus'>-</div>
									</div>
									<div className='profit-item'>
										<div className='item-id'>2</div>
										<div className='item-deposit'>995,00</div>
										<div className='item-answer-plus'>+</div>
									</div>
									<div className='profit-item'>
										<div className='item-id'>3</div>
										<div className='item-deposit'>995,00</div>
										<div className='item-answer-plus'>+</div>
									</div>
									<div className='profit-item'>
										<div className='item-id'>4</div>
										<div className='item-deposit'>995,00</div>
										<div className='item-answer-minus'>-</div>
									</div>
									<div className='profit-item'>
										<div className='item-id'>5</div>
										<div className='item-deposit'>995,00</div>
										<div className='item-answer-minus'>-</div>
									</div>
									<div className='profit-item'>
										<div className='item-id'>6</div>
										<div className='item-deposit'>995,00</div>
										<div className='item-answer-minus'>-</div>
									</div>

									<div className='profit-item'>
										<div className='item-id'>9</div>
										<div className='item-deposit'>995,00</div>
										<div className='item-answer-minus'>-</div>
									</div>
									<div className='profit-item'>
										<div className='item-id'>10</div>
										<div className='item-deposit'>995,00</div>
										<div className='item-answer-minus'>-</div>
									</div>
									<div className='profit-item'>
										<div className='item-id'>11</div>
										<div className='item-deposit'>995,00</div>
										<div className='item-answer-plus'>+</div>
									</div>
									<div className='profit-item'>
										<div className='item-id'>12</div>
										<div className='item-deposit'>995,00</div>
										<div className='item-answer-plus'>+</div>
									</div>
									<div className='profit-item'>
										<div className='item-id'>13</div>
										<div className='item-deposit'>995,00</div>
										<div className='item-answer-minus'>-</div>
									</div>
									<div className='profit-item'>
										<div className='item-id'>14</div>
										<div className='item-deposit'>995,00</div>
										<div className='item-answer-plus'>+</div>
									</div>
								</div>
								<div className='wrap-footer'>
									<div className='transactions'>
										<div className='transactions-title'>
											<h3>15 сделок</h3>
										</div>
										<div className='transactions-info'>
											<p>чистая прибыль</p>
										</div>
									</div>
									<div className='transactions'>
										<div className='transactions-title'>
											<h3>10 в минус 5 в плюс</h3>
										</div>
										<div className='transactions-info'>
											<p>25$</p>
										</div>
										<span className='tooltip-text' id='fade'>
											{' '}
											+2,5% к депозиту{' '}
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className='profit'>
							<div className='section-wrap'>
								<div className='wrap__header'>
									<h2>Рассчёт депозита</h2>
								</div>
								<div className='wrap-content'>
									<div className='profit-item'>
										<div className='item-id'>1</div>
										<div className='item-deposit'>995,00</div>
										<div className='item-answer-minus'>-</div>
									</div>
									<div className='profit-item'>
										<div className='item-id'>2</div>
										<div className='item-deposit'>995,00</div>
										<div className='item-answer-plus'>+</div>
									</div>
									<div className='profit-item'>
										<div className='item-id'>3</div>
										<div className='item-deposit'>995,00</div>
										<div className='item-answer-plus'>+</div>
									</div>
									<div className='profit-item'>
										<div className='item-id'>4</div>
										<div className='item-deposit'>995,00</div>
										<div className='item-answer-minus'>-</div>
									</div>
									<div className='profit-item'>
										<div className='item-id'>5</div>
										<div className='item-deposit'>995,00</div>
										<div className='item-answer-minus'>-</div>
									</div>

									<div className='profit-item'>
										<div className='item-id'>8</div>
										<div className='item-deposit'>995,00</div>
										<div className='item-answer-minus'>-</div>
									</div>
									<div className='profit-item'>
										<div className='item-id'>9</div>
										<div className='item-deposit'>995,00</div>
										<div className='item-answer-minus'>-</div>
									</div>
									<div className='profit-item'>
										<div className='item-id'>10</div>
										<div className='item-deposit'>995,00</div>
										<div className='item-answer-minus'>-</div>
									</div>
									<div className='profit-item'>
										<div className='item-id'>11</div>
										<div className='item-deposit'>995,00</div>
										<div className='item-answer-plus'>+</div>
									</div>
									<div className='profit-item'>
										<div className='item-id'>12</div>
										<div className='item-deposit'>995,00</div>
										<div className='item-answer-plus'>+</div>
									</div>
									<div className='profit-item'>
										<div className='item-id'>13</div>
										<div className='item-deposit'>995,00</div>
										<div className='item-answer-minus'>-</div>
									</div>
									<div className='profit-item'>
										<div className='item-id'>14</div>
										<div className='item-deposit'>995,00</div>
										<div className='item-answer-plus'>+</div>
									</div>
								</div>
								<div className='wrap-footer'>
									<div className='transactions'>
										<div className='transactions-title'>
											<h3>15 сделок</h3>
										</div>
										<div className='transactions-info minus-profit'>
											<p>чистый убыток</p>
										</div>
									</div>
									<div className='transactions'>
										<div className='transactions-title'>
											<h3>12 в минус 3 в плюс</h3>
										</div>
										<div className='transactions-info minus-profit'>
											<p>-15$</p>
										</div>
										<span className='tooltip-text' id='fade'>
											{' '}
											-1,5% к депозиту
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

export default Calculate
