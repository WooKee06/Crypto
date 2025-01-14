import React from 'react'
import '../styles/Transactions.scss'

import IconBuy from '../img/ic_buy2.svg'
import IconSell from '../img/ic_sell2.svg'

const Transactions = () => {
	return (
		<>
			<main>
				<div class='main-first-wrapper'>
					<div class='fillters'>
						<div class='section-wrap'>
							<div class='wrap-content'>
								<div class='search'>
									<input type='text' placeholder='Search here' />
									<svg
										width='24'
										height='24'
										viewBox='0 0 32 32'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M13.6593 23.3113C15.8044 23.3114 17.8882 22.5956 19.5806 21.2772L25.9654 27.6629C26.4423 28.1236 27.2023 28.1104 27.663 27.6334C28.1123 27.1681 28.1123 26.4303 27.663 25.965L21.2782 19.5793C24.5491 15.3681 23.7874 9.3023 19.5769 6.03089C15.3663 2.75948 9.30149 3.52128 6.03058 7.73247C2.75967 11.9437 3.52135 18.0095 7.7319 21.2809C9.42703 22.5979 11.5127 23.3124 13.6593 23.3113ZM8.52915 8.52615C11.3625 5.69235 15.9562 5.6923 18.7895 8.52604C21.6229 11.3598 21.6229 15.9542 18.7896 18.788C15.9563 21.6218 11.3626 21.6218 8.52926 18.7881C8.5292 18.788 8.5292 18.788 8.52915 18.788C5.69584 15.9749 5.67915 11.3972 8.49181 8.56349C8.50424 8.55101 8.51667 8.53858 8.52915 8.52615Z'
											fill='#717579'
										/>
									</svg>
								</div>
								<div>
									<div class='data-filter'>
										<svg
											width='24'
											height='24'
											viewBox='0 0 28 28'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<g clip-path='url(#clip0_444_3078)'>
												<path
													d='M22.4281 2.856H21.8681V1.428C21.8681 0.56 21.2801 0 20.4401 0C19.6001 0 19.0121 0.56 19.0121 1.428V2.856H9.71606V1.428C9.71606 0.56 9.15606 0 8.28806 0C7.42006 0 6.86006 0.56 6.86006 1.428V2.856H5.57206C2.85606 2.856 0.560059 5.152 0.560059 7.868V23.016C0.560059 25.732 2.85606 28.028 5.57206 28.028H22.4281C25.1441 28.028 27.4401 25.732 27.4401 23.016V7.868C27.4401 5.152 25.1441 2.856 22.4281 2.856ZM5.57206 5.712H22.4281C23.5761 5.712 24.5841 6.72 24.5841 7.868V9.856H3.41606V7.868C3.41606 6.72 4.42406 5.712 5.57206 5.712ZM22.4281 25.144H5.57206C4.42406 25.144 3.41606 24.136 3.41606 22.988V12.712H24.5561V22.988C24.5841 24.136 23.5761 25.144 22.4281 25.144Z'
													fill='#717579'
												/>
											</g>
											<defs>
												<clipPath id='clip0_444_3078'>
													<rect width='28' height='28' fill='white' />
												</clipPath>
											</defs>
										</svg>
										<div class='filter-info'>
											<h2>Filter Periode</h2>
											<p>4 June 2020 - 4 July 2020</p>
										</div>
										<svg
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M6 9L12 15L18 9'
												stroke='#717579'
												strokeWidth='2'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
									</div>
									<button>
										<svg
											width='18'
											height='18'
											viewBox='0 0 24 24'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<g clip-path='url(#clip0_444_3084)'>
												<path
													d='M24 22.5C24 23.3284 23.3284 24 22.5 24H1.5C0.671578 24 0 23.3284 0 22.5C0 21.6716 0.671578 21 1.5 21H22.5C23.3284 21 24 21.6716 24 22.5ZM10.9394 17.7482C11.2323 18.0411 11.6161 18.1875 12 18.1875C12.3838 18.1875 12.7678 18.0411 13.0606 17.7482L18.3752 12.4336C18.961 11.8478 18.961 10.8981 18.3752 10.3123C17.7894 9.72652 16.8397 9.72652 16.2539 10.3123L13.5 13.0662V1.5C13.5 0.671578 12.8284 0 12 0C11.1716 0 10.5 0.671578 10.5 1.5V13.0662L7.74609 10.3123C7.1603 9.72652 6.21056 9.72652 5.62477 10.3123C5.03897 10.8981 5.03897 11.8478 5.62477 12.4336L10.9394 17.7482Z'
													fill='white'
												/>
											</g>
											<defs>
												<clipPath id='clip0_444_3084'>
													<rect width='24' height='24' fill='white' />
												</clipPath>
											</defs>
										</svg>
										Save to CSV
									</button>
								</div>
							</div>
						</div>
					</div>
					<div class='position'>
						<div class='section-wrap'>
							<div class='wrap__header'>
								<h2>Transactions</h2>
							</div>
							<div class='wrap-content'>
								<table>
									<thead>
										<tr>
											<th>Transaction ID</th>
											<th>Date</th>
											<th>From</th>
											<th>To</th>
											<th>Coin</th>
											<th>Amount</th>
											<th>Note</th>
											<th>Status</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td data-label='Transaction'>
												<div class='td-wrap' style={{ gap: '20px' }}>
													<img src={IconBuy} width='54' alt='' />
													#12415346563475
												</div>
											</td>
											<td data-label='Date'>2/5/2020 06:24 AM</td>
											<td data-label='From'>Thomas</td>
											<td data-label='To'>
												<div class='td-wrap'>
													<span></span>Ashlynn
												</div>
											</td>
											<td data-label='Coin'>
												<div class='td-wrap'>
													<img
														src='../img/BTicon.svg'
														width='24
												'
														alt=''
													/>
													Bitcoin
												</div>
											</td>
											<td data-label='Amount'>+$5,553</td>
											<td data-label='Note'>
												<p>
													Lorem ipsum dol.. <span>More</span>
												</p>
											</td>
											<td>
												<button>COMPLETED</button>
											</td>
										</tr>
										<tr>
											<td data-label='Transaction'>
												<div class='td-wrap' style={{ gap: '20px' }}>
													<img src={IconSell} width='54' alt='' />
													#124153465125511
												</div>
											</td>
											<td data-label='Date'>2/5/2020 06:24 AM</td>
											<td data-label='From'>Thomas</td>
											<td data-label='To'>
												<div class='td-wrap'>
													<span></span>Carter
												</div>
											</td>
											<td data-label='Coin'>
												<div class='td-wrap'>
													<img
														src='../img/Elogo.svg'
														width='24
												'
														alt=''
													/>
													Ethereum
												</div>
											</td>
											<td data-label='Amount' style={{ color: '#f63c6b' }}>
												-$12,768
											</td>
											<td data-label='Note'>
												<p style={{ color: 'var(--text-accent)' }}>None</p>
											</td>
											<td>
												<button
													style={{ backgroundColor: 'var(--text-accent)' }}
												>
													PENDING
												</button>
											</td>
										</tr>
										<tr>
											<td data-label='Transaction'>
												<div class='td-wrap' style={{ gap: '20px' }}>
													<img src={IconSell} width='54' alt='' />
													#124153465125511
												</div>
											</td>
											<td data-label='Date'>2/5/2020 06:24 AM</td>
											<td data-label='From'>Thomas</td>
											<td data-label='To'>
												<div class='td-wrap'>
													<span></span>Adison
												</div>
											</td>
											<td data-label='Coin'>
												<div class='td-wrap'>
													<img
														src='../img/Rlogo.svg'
														width='24
												'
														alt=''
													/>
													Ripple
												</div>
											</td>
											<td data-label='Amount' style={{ color: '#f63c6b' }}>
												-$455
											</td>
											<td data-label='Note'>
												<p>
													Lorem ipsum dol.. <span>More</span>
												</p>
											</td>
											<td>
												<button style={{ backgroundColor: 'var(--red)' }}>
													CANCELED
												</button>
											</td>
										</tr>
										<tr>
											<td data-label='Transaction'>
												<div class='td-wrap' style={{ gap: '20px' }}>
													<img src={IconBuy} width='54' alt='' />
													#12415346563475
												</div>
											</td>
											<td data-label='Date'>2/5/2020 06:24 AM</td>
											<td data-label='From'>Thomas</td>
											<td data-label='To'>
												<div class='td-wrap'>
													<span></span>Ashlynn
												</div>
											</td>
											<td data-label='Coin'>
												<div class='td-wrap'>
													<img
														src='../img/BTicon.svg'
														width='24
												'
														alt=''
													/>
													Bitcoin
												</div>
											</td>
											<td data-label='Amount'>+$5,553</td>
											<td data-label='Note'>
												<p>
													Lorem ipsum dol.. <span>More</span>
												</p>
											</td>
											<td>
												<button>COMPLETED</button>
											</td>
										</tr>
										<tr>
											<td data-label='Transaction'>
												<div class='td-wrap' style={{ gap: '20px' }}>
													<img src={IconBuy} width='54' alt='' />
													#12415346563475
												</div>
											</td>
											<td data-label='Date'>2/5/2020 06:24 AM</td>
											<td data-label='From'>Thomas</td>
											<td data-label='To'>
												<div class='td-wrap'>
													<span></span>Ashlynn
												</div>
											</td>
											<td data-label='Coin'>
												<div class='td-wrap'>
													<img
														src='../img/BTicon.svg'
														width='24
												'
														alt=''
													/>
													Bitcoin
												</div>
											</td>
											<td data-label='Amount'>+$5,553</td>
											<td data-label='Note'>
												<p>
													Lorem ipsum dol.. <span>More</span>
												</p>
											</td>
											<td>
												<button>COMPLETED</button>
											</td>
										</tr>
										<tr>
											<td data-label='Transaction'>
												<div class='td-wrap' style={{ gap: '20px' }}>
													<img src={IconSell} width='54' alt='' />
													#124153465125511
												</div>
											</td>
											<td data-label='Date'>2/5/2020 06:24 AM</td>
											<td data-label='From'>Thomas</td>
											<td data-label='To'>
												<div class='td-wrap'>
													<span></span>Carter
												</div>
											</td>
											<td data-label='Coin'>
												<div class='td-wrap'>
													<img
														src='../img/Elogo.svg'
														width='24
												'
														alt=''
													/>
													Ethereum
												</div>
											</td>
											<td data-label='Amount' style={{ color: '#f63c6b' }}>
												-$12,768
											</td>
											<td data-label='Note'>
												<p style={{ color: 'var(--text-accent)' }}>None</p>
											</td>
											<td>
												<button
													style={{ backgroundColor: 'var(--text-accent)' }}
												>
													PENDING
												</button>
											</td>
										</tr>
										<tr>
											<td data-label='Transaction'>
												<div class='td-wrap' style={{ gap: '20px' }}>
													<img src={IconSell} width='54' alt='' />
													#124153465125511
												</div>
											</td>
											<td data-label='Date'>2/5/2020 06:24 AM</td>
											<td data-label='From'>Thomas</td>
											<td data-label='To'>
												<div class='td-wrap'>
													<span></span>Adison
												</div>
											</td>
											<td data-label='Coin'>
												<div class='td-wrap'>
													<img
														src='../img/Rlogo.svg'
														width='24
												'
														alt=''
													/>
													Ripple
												</div>
											</td>
											<td data-label='Amount' style={{ color: '#f63c6b' }}>
												-$455
											</td>
											<td data-label='Note'>
												<p>
													Lorem ipsum dol.. <span>More</span>
												</p>
											</td>
											<td>
												<button style={{ backgroundColor: 'var(--red)' }}>
													CANCELED
												</button>
											</td>
										</tr>
										<tr>
											<td data-label='Transaction'>
												<div class='td-wrap' style={{ gap: '20px' }}>
													<img src={IconSell} width='54' alt='' />
													#124153465125511
												</div>
											</td>
											<td data-label='Date'>2/5/2020 06:24 AM</td>
											<td data-label='From'>Thomas</td>
											<td data-label='To'>
												<div class='td-wrap'>
													<span></span>Adison
												</div>
											</td>
											<td data-label='Coin'>
												<div class='td-wrap'>
													<img
														src='../img/Rlogo.svg'
														width='24
												'
														alt=''
													/>
													Ripple
												</div>
											</td>
											<td data-label='Amount' style={{ color: '#f63c6b' }}>
												-$455
											</td>
											<td data-label='Note'>
												<p>
													Lorem ipsum dol.. <span>More</span>
												</p>
											</td>
											<td>
												<button style={{ backgroundColor: 'var(--red)' }}>
													CANCELED
												</button>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</main>
			<div class='pagination-wrap'>
				<div class='pagination'>
					<button>
						<svg
							width='24'
							height='25'
							viewBox='0 0 24 25'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M12 18.5L6 12.5L12 6.5'
								stroke='#007AFF'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M19 18.5L13 12.5L19 6.5'
								stroke='#007AFF'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						<span>Previous</span>
					</button>
					<ul>
						<li>1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
					</ul>
					<button>
						<span>Next</span>
						<svg
							width='24'
							height='25'
							viewBox='0 0 24 25'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M12 18.5L18 12.5L12 6.5'
								stroke='#007AFF'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M5 18.5L11 12.5L5 6.5'
								stroke='#007AFF'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</button>
				</div>
			</div>
		</>
	)
}

export default Transactions
