import React from 'react'
import RingProgress2 from '../img/Group 24.svg'
import ImgBuy from '../img/ic_buy.svg'
import ImgSell from '../img/ic_sell.svg'
import RingProgress from '../img/ringProgress.svg'
import RingProgress3 from '../img/ringProgress2.svg'
import '../styles/Profile.scss'
const Profile = () => {
	return (
		<main>
			<div class='profile-first-wrapper '>
				<div class='profile'>
					<div class='section-wrap'>
						<div class='wrap__header'>
							<h2>My Profile</h2>
						</div>
						<div class='wrap__content'>
							<div class='avatar'>
								<div class='img'></div>
								<div class='update'>
									<svg
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<g clip-path='url(#clip0_444_3495)'>
											<path
												d='M1.67027 23.9998C1.43105 23.9993 1.19469 23.9477 0.976955 23.8486C0.759216 23.7494 0.565094 23.6049 0.407523 23.4248C0.249952 23.2447 0.13255 23.0331 0.0631419 22.804C-0.00626663 22.5749 -0.0260887 22.3336 0.00499648 22.0963L0.606464 17.4969C0.661424 17.0806 0.851709 16.694 1.14797 16.3967L16.9946 0.539379C17.3407 0.193968 17.8096 0 18.2985 0C18.7873 0 19.2562 0.193968 19.6023 0.539379L23.435 4.37469C23.7802 4.72107 23.9741 5.19029 23.9741 5.67946C23.9741 6.16863 23.7802 6.63784 23.435 6.98422L7.58845 22.8416C7.2914 23.1381 6.90504 23.3285 6.48904 23.3834L1.89278 23.9853C1.81901 23.995 1.74468 23.9999 1.67027 23.9998ZM2.90928 17.9488L2.4385 21.5502L6.03747 21.0791L21.4264 5.67969L18.2982 2.54938L2.90928 17.9488Z'
												fill='white'
											/>
											<path
												d='M19.0487 10.888C18.895 10.8884 18.7427 10.8585 18.6006 10.8C18.4585 10.7414 18.3293 10.6554 18.2205 10.5467L13.4341 5.75706C13.2144 5.53701 13.0911 5.23866 13.0913 4.92764C13.0915 4.61663 13.2151 4.31842 13.435 4.09862C13.6549 3.87882 13.9531 3.75544 14.2639 3.75562C14.5747 3.75579 14.8727 3.87951 15.0923 4.09956L19.8769 8.88737C20.0407 9.05126 20.1523 9.26009 20.1975 9.48744C20.2427 9.71479 20.2195 9.95045 20.1308 10.1646C20.0422 10.3788 19.8921 10.5618 19.6994 10.6906C19.5068 10.8193 19.2803 10.888 19.0487 10.888Z'
												fill='#202020'
											/>
										</g>
										<defs>
											<clipPath id='clip0_444_3495'>
												<rect
													width='23.9837'
													height='24'
													fill='white'
													transform='translate(-0.00976562)'
												/>
											</clipPath>
										</defs>
									</svg>
								</div>
							</div>
							<div class='profile-info'>
								<h3>Roman Borisoglebskyi</h3>
								<span>@romanborisoglebskyi</span>
							</div>
							<div class='exit-date'>
								<p>Join on 24 March 2017</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt
								</p>
							</div>
							<div class='btns'>
								<ul>
									<li>
										<a href=''>
											<svg
												width='30'
												height='30'
												viewBox='0 0 30 30'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													d='M27.7234 21.1848V25.0423C27.7249 25.4004 27.6516 25.7548 27.5082 26.0829C27.3649 26.4111 27.1546 26.7056 26.8909 26.9477C26.6272 27.1898 26.3159 27.3741 25.9769 27.4888C25.6379 27.6035 25.2786 27.6462 24.9222 27.6139C20.9682 27.184 17.1701 25.8319 13.833 23.6664C10.7283 21.6922 8.09608 19.0582 6.12323 15.9514C3.95162 12.5969 2.60018 8.77775 2.1784 4.80324C2.14629 4.44767 2.18852 4.0893 2.3024 3.75095C2.41628 3.4126 2.59931 3.10168 2.83985 2.838C3.08039 2.57432 3.37316 2.36364 3.69952 2.21939C4.02589 2.07513 4.37869 2.00046 4.73547 2.00012H8.59036C9.21396 1.99398 9.81852 2.21496 10.2913 2.62187C10.7642 3.02877 11.073 3.59385 11.1603 4.21176C11.323 5.44624 11.6247 6.65835 12.0598 7.82495C12.2326 8.28518 12.2701 8.78536 12.1676 9.26621C12.0651 9.74707 11.827 10.1885 11.4815 10.5381L9.84962 12.1711C11.6788 15.3902 14.3424 18.0556 17.5594 19.8861L19.1913 18.2531C19.5407 17.9073 19.9817 17.6691 20.4623 17.5665C20.9428 17.464 21.4426 17.5014 21.9026 17.6744C23.0684 18.1098 24.2797 18.4117 25.5133 18.5745C26.1375 18.6626 26.7076 18.9772 27.1151 19.4585C27.5226 19.9398 27.7391 20.5542 27.7234 21.1848Z'
													stroke='#007AFF'
													strokeWidth='3'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</a>
									</li>
									<li>
										<a href=''>
											<svg
												width='30'
												height='26'
												viewBox='0 0 30 26'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													d='M4.45636 2.3335H25.7752C27.2409 2.3335 28.4401 3.5335 28.4401 5.00016V21.0002C28.4401 22.4668 27.2409 23.6668 25.7752 23.6668H4.45636C2.99069 23.6668 1.7915 22.4668 1.7915 21.0002V5.00016C1.7915 3.5335 2.99069 2.3335 4.45636 2.3335Z'
													stroke='#007AFF'
													strokeWidth='3'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
												<path
													d='M27.1073 5L15.1154 14L3.12354 5'
													stroke='#007AFF'
													strokeWidth='3'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</a>
									</li>
									<li>
										<a href=''>
											<svg
												width='14'
												height='26'
												viewBox='0 0 14 26'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													d='M12.6284 14.2599L13.3249 9.80064H8.97018V6.90688C8.97018 5.68692 9.5785 4.49775 11.5288 4.49775H13.5085V0.701165C13.5085 0.701165 11.712 0.399902 9.99432 0.399902C6.40811 0.399902 4.064 2.53569 4.064 6.40205V9.80064H0.0776367V14.2599H4.064V25.0399H8.97018V14.2599H12.6284Z'
													fill='#007AFF'
												/>
											</svg>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class='coins'>
					<div class='section-wrap'>
						<div class='wrap__header'>
							<h2>Coin Holding</h2>
							<button>+Add New</button>
						</div>
						<div class='wrap__content'>
							<div class='coin'>
								<div className='coin__title'>
									<div class='coin__ticker'>
										<div class='coin__ticker-img'>
											<img src='../img/coinImgicon.svg' alt='' width='60' />
										</div>
										<div class='coin__ticker-info'>
											<h3>Monero</h3>
											<span>XMR</span>
										</div>
									</div>
									<div class='coin__price'>
										<div class='coin__price-img'>
											<svg
												width='34'
												height='35'
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
										</div>
										<div class='coin__price-info'>
											<h3>$18,783.33</h3>
											<p>
												<span>
													<svg
														width='21'
														height='14'
														viewBox='0 0 21 14'
														fill='none'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path
															d='M1 13C1.91734 11.9157 4.89464 8.72772 6.49627 7L12.4922 10L19.4875 1'
															stroke='#34C759'
															strokeWidth='2'
															strokeLinecap='round'
														/>
													</svg>
													45%
												</span>
												This week
											</p>
										</div>
									</div>
								</div>
								<div class='coin__grafic'>
									<img src='../img/Vector.svg' alt='' />
								</div>
								<div class='coin__btns'>
									<svg
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M12.0002 18.3C5.85019 18.3 1.1252 11.4 0.900195 11.1C0.675195 10.8 0.675195 10.35 0.900195 10.05C1.1252 9.74995 5.85019 2.69995 12.0002 2.69995C18.1502 2.69995 22.8752 9.74995 23.1002 10.05C23.3252 10.35 23.3252 10.8 23.1002 11.1C22.8752 11.4 18.1502 18.3 12.0002 18.3ZM2.9252 10.575C4.1252 12.075 7.80019 16.35 12.0002 16.35C16.2002 16.35 19.9502 12.075 21.0752 10.575C19.8752 8.99995 16.2002 4.57495 12.0002 4.57495C7.80019 4.57495 4.05019 8.99995 2.9252 10.575Z'
											fill='#717579'
										/>
										<path
											d='M12.0004 15.2249C9.37539 15.2249 7.27539 13.1249 7.27539 10.4999C7.27539 7.87491 9.37539 5.7749 12.0004 5.7749C14.6254 5.7749 16.7254 7.87491 16.7254 10.4999C16.7254 13.1249 14.6254 15.2249 12.0004 15.2249ZM12.0004 7.64991C10.4254 7.64991 9.15039 8.92491 9.15039 10.4999C9.15039 12.0749 10.4254 13.3499 12.0004 13.3499C13.5754 13.3499 14.8504 12.0749 14.8504 10.4999C14.8504 8.92491 13.5754 7.64991 12.0004 7.64991Z'
											fill='#717579'
										/>
									</svg>
									<svg
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M19.883 8.53C19.958 8.67 20 8.83 20 9V18C20 20.209 18.21 22 16 22H5C4.448 22 4 21.552 4 21V3C4 2.448 4.448 2 5 2H13C13.17 2 13.33 2.042 13.47 2.117L13.473 2.119C13.551 2.16 13.624 2.213 13.69 2.276L13.707 2.293L19.707 8.293L19.724 8.31C19.788 8.377 19.84 8.45 19.882 8.527L19.883 8.53ZM12 4H6V20H16C17.105 20 18 19.105 18 18V10H13C12.448 10 12 9.552 12 9V4ZM10 18H14C14.552 18 15 17.552 15 17C15 16.448 14.552 16 14 16H10C9.448 16 9 16.448 9 17C9 17.552 9.448 18 10 18ZM9 14H15C15.552 14 16 13.552 16 13C16 12.448 15.552 12 15 12H9C8.448 12 8 12.448 8 13C8 13.552 8.448 14 9 14ZM16.586 8L14 5.414V8H16.586Z'
											fill='#717579'
										/>
									</svg>
								</div>
							</div>
							<div class='coin'>
								<div className='coin__title'>
									<div class='coin__ticker'>
										<div class='coin__ticker-img'>
											<img src='../img/BTicon.svg' alt='' width='60' />
										</div>
										<div class='coin__ticker-info'>
											<h3>BitCoin</h3>
											<span>BTC</span>
										</div>
									</div>
									<div class='coin__price'>
										<div class='coin__price-img'>
											<svg
												width='34'
												height='35'
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
										</div>
										<div class='coin__price-info'>
											<h3>$24,098</h3>
											<p>
												<span>
													<svg
														width='21'
														height='14'
														viewBox='0 0 21 14'
														fill='none'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path
															d='M1 13C1.91734 11.9157 4.89464 8.72772 6.49627 7L12.4922 10L19.4875 1'
															stroke='#34C759'
															strokeWidth='2'
															strokeLinecap='round'
														/>
													</svg>
													45%
												</span>
												This week
											</p>
										</div>
									</div>
								</div>
								<div class='coin__grafic'>
									<img src='../img/Group 22.svg' alt='' />
								</div>
								<div class='coin__btns'>
									<svg
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M12.0002 18.3C5.85019 18.3 1.1252 11.4 0.900195 11.1C0.675195 10.8 0.675195 10.35 0.900195 10.05C1.1252 9.74995 5.85019 2.69995 12.0002 2.69995C18.1502 2.69995 22.8752 9.74995 23.1002 10.05C23.3252 10.35 23.3252 10.8 23.1002 11.1C22.8752 11.4 18.1502 18.3 12.0002 18.3ZM2.9252 10.575C4.1252 12.075 7.80019 16.35 12.0002 16.35C16.2002 16.35 19.9502 12.075 21.0752 10.575C19.8752 8.99995 16.2002 4.57495 12.0002 4.57495C7.80019 4.57495 4.05019 8.99995 2.9252 10.575Z'
											fill='#717579'
										/>
										<path
											d='M12.0004 15.2249C9.37539 15.2249 7.27539 13.1249 7.27539 10.4999C7.27539 7.87491 9.37539 5.7749 12.0004 5.7749C14.6254 5.7749 16.7254 7.87491 16.7254 10.4999C16.7254 13.1249 14.6254 15.2249 12.0004 15.2249ZM12.0004 7.64991C10.4254 7.64991 9.15039 8.92491 9.15039 10.4999C9.15039 12.0749 10.4254 13.3499 12.0004 13.3499C13.5754 13.3499 14.8504 12.0749 14.8504 10.4999C14.8504 8.92491 13.5754 7.64991 12.0004 7.64991Z'
											fill='#717579'
										/>
									</svg>
									<svg
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M19.883 8.53C19.958 8.67 20 8.83 20 9V18C20 20.209 18.21 22 16 22H5C4.448 22 4 21.552 4 21V3C4 2.448 4.448 2 5 2H13C13.17 2 13.33 2.042 13.47 2.117L13.473 2.119C13.551 2.16 13.624 2.213 13.69 2.276L13.707 2.293L19.707 8.293L19.724 8.31C19.788 8.377 19.84 8.45 19.882 8.527L19.883 8.53ZM12 4H6V20H16C17.105 20 18 19.105 18 18V10H13C12.448 10 12 9.552 12 9V4ZM10 18H14C14.552 18 15 17.552 15 17C15 16.448 14.552 16 14 16H10C9.448 16 9 16.448 9 17C9 17.552 9.448 18 10 18ZM9 14H15C15.552 14 16 13.552 16 13C16 12.448 15.552 12 15 12H9C8.448 12 8 12.448 8 13C8 13.552 8.448 14 9 14ZM16.586 8L14 5.414V8H16.586Z'
											fill='#717579'
										/>
									</svg>
								</div>
							</div>
							<div class='coin'>
								<div className='coin__title'>
									<div class='coin__ticker'>
										<div class='coin__ticker-img'>
											<img src='../img/Licon.svg' alt='' width='60' />
										</div>
										<div class='coin__ticker-info'>
											<h3>LiteCoin</h3>
											<span>LTC</span>
										</div>
									</div>
									<div class='coin__price'>
										<div class='coin__price-img'>
											<svg
												width='34'
												height='35'
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
										</div>
										<div class='coin__price-info'>
											<h3>$667,224</h3>
											<p>
												<span>
													<svg
														width='21'
														height='14'
														viewBox='0 0 21 14'
														fill='none'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path
															d='M1.3291 1C2.24645 2.08433 5.22374 5.27228 6.82538 7L12.8213 4L19.8166 13'
															stroke='#FF2E2E'
															strokeWidth='2'
															strokeLinecap='round'
														/>
													</svg>
													45%
												</span>
												This week
											</p>
										</div>
									</div>
								</div>
								<div class='coin__grafic'>
									<img src='../img/Group 23.svg' alt='' />
								</div>
								<div class='coin__btns'>
									<svg
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M12.0002 18.3C5.85019 18.3 1.1252 11.4 0.900195 11.1C0.675195 10.8 0.675195 10.35 0.900195 10.05C1.1252 9.74995 5.85019 2.69995 12.0002 2.69995C18.1502 2.69995 22.8752 9.74995 23.1002 10.05C23.3252 10.35 23.3252 10.8 23.1002 11.1C22.8752 11.4 18.1502 18.3 12.0002 18.3ZM2.9252 10.575C4.1252 12.075 7.80019 16.35 12.0002 16.35C16.2002 16.35 19.9502 12.075 21.0752 10.575C19.8752 8.99995 16.2002 4.57495 12.0002 4.57495C7.80019 4.57495 4.05019 8.99995 2.9252 10.575Z'
											fill='#717579'
										/>
										<path
											d='M12.0004 15.2249C9.37539 15.2249 7.27539 13.1249 7.27539 10.4999C7.27539 7.87491 9.37539 5.7749 12.0004 5.7749C14.6254 5.7749 16.7254 7.87491 16.7254 10.4999C16.7254 13.1249 14.6254 15.2249 12.0004 15.2249ZM12.0004 7.64991C10.4254 7.64991 9.15039 8.92491 9.15039 10.4999C9.15039 12.0749 10.4254 13.3499 12.0004 13.3499C13.5754 13.3499 14.8504 12.0749 14.8504 10.4999C14.8504 8.92491 13.5754 7.64991 12.0004 7.64991Z'
											fill='#717579'
										/>
									</svg>
									<svg
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M19.883 8.53C19.958 8.67 20 8.83 20 9V18C20 20.209 18.21 22 16 22H5C4.448 22 4 21.552 4 21V3C4 2.448 4.448 2 5 2H13C13.17 2 13.33 2.042 13.47 2.117L13.473 2.119C13.551 2.16 13.624 2.213 13.69 2.276L13.707 2.293L19.707 8.293L19.724 8.31C19.788 8.377 19.84 8.45 19.882 8.527L19.883 8.53ZM12 4H6V20H16C17.105 20 18 19.105 18 18V10H13C12.448 10 12 9.552 12 9V4ZM10 18H14C14.552 18 15 17.552 15 17C15 16.448 14.552 16 14 16H10C9.448 16 9 16.448 9 17C9 17.552 9.448 18 10 18ZM9 14H15C15.552 14 16 13.552 16 13C16 12.448 15.552 12 15 12H9C8.448 12 8 12.448 8 13C8 13.552 8.448 14 9 14ZM16.586 8L14 5.414V8H16.586Z'
											fill='#717579'
										/>
									</svg>
								</div>
							</div>
							<div class='coin'>
								<div className='coin__title'>
									<div class='coin__ticker'>
										<div class='coin__ticker-img'>
											<img src='../img/Eicon.svg' alt='' width='60' />
										</div>
										<div class='coin__ticker-info'>
											<h3>Ethereum</h3>
											<span>ETH</span>
										</div>
									</div>
									<div class='coin__price'>
										<div class='coin__price-img'>
											<svg
												width='34'
												height='35'
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
										</div>
										<div class='coin__price-info'>
											<h3>$168,331.09</h3>
											<p>
												<span>
													<svg
														width='21'
														height='14'
														viewBox='0 0 21 14'
														fill='none'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path
															d='M1 13C1.91734 11.9157 4.89464 8.72772 6.49627 7L12.4922 10L19.4875 1'
															stroke='#34C759'
															strokeWidth='2'
															strokeLinecap='round'
														/>
													</svg>
													45%
												</span>
												This week
											</p>
										</div>
									</div>
								</div>
								<div class='coin__grafic'>
									<img src='../img/Vector.svg' alt='' />
								</div>
								<div class='coin__btns'>
									<svg
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M12.0002 18.3C5.85019 18.3 1.1252 11.4 0.900195 11.1C0.675195 10.8 0.675195 10.35 0.900195 10.05C1.1252 9.74995 5.85019 2.69995 12.0002 2.69995C18.1502 2.69995 22.8752 9.74995 23.1002 10.05C23.3252 10.35 23.3252 10.8 23.1002 11.1C22.8752 11.4 18.1502 18.3 12.0002 18.3ZM2.9252 10.575C4.1252 12.075 7.80019 16.35 12.0002 16.35C16.2002 16.35 19.9502 12.075 21.0752 10.575C19.8752 8.99995 16.2002 4.57495 12.0002 4.57495C7.80019 4.57495 4.05019 8.99995 2.9252 10.575Z'
											fill='#717579'
										/>
										<path
											d='M12.0004 15.2249C9.37539 15.2249 7.27539 13.1249 7.27539 10.4999C7.27539 7.87491 9.37539 5.7749 12.0004 5.7749C14.6254 5.7749 16.7254 7.87491 16.7254 10.4999C16.7254 13.1249 14.6254 15.2249 12.0004 15.2249ZM12.0004 7.64991C10.4254 7.64991 9.15039 8.92491 9.15039 10.4999C9.15039 12.0749 10.4254 13.3499 12.0004 13.3499C13.5754 13.3499 14.8504 12.0749 14.8504 10.4999C14.8504 8.92491 13.5754 7.64991 12.0004 7.64991Z'
											fill='#717579'
										/>
									</svg>
									<svg
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M19.883 8.53C19.958 8.67 20 8.83 20 9V18C20 20.209 18.21 22 16 22H5C4.448 22 4 21.552 4 21V3C4 2.448 4.448 2 5 2H13C13.17 2 13.33 2.042 13.47 2.117L13.473 2.119C13.551 2.16 13.624 2.213 13.69 2.276L13.707 2.293L19.707 8.293L19.724 8.31C19.788 8.377 19.84 8.45 19.882 8.527L19.883 8.53ZM12 4H6V20H16C17.105 20 18 19.105 18 18V10H13C12.448 10 12 9.552 12 9V4ZM10 18H14C14.552 18 15 17.552 15 17C15 16.448 14.552 16 14 16H10C9.448 16 9 16.448 9 17C9 17.552 9.448 18 10 18ZM9 14H15C15.552 14 16 13.552 16 13C16 12.448 15.552 12 15 12H9C8.448 12 8 12.448 8 13C8 13.552 8.448 14 9 14ZM16.586 8L14 5.414V8H16.586Z'
											fill='#717579'
										/>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class='profile-second-wrapper'>
				<div class='recent'>
					<div class='section-wrap'>
						<div class='wrap__header'>
							<h2>Recent Activity</h2>

							<div class='btns'>
								<button>Yesterday</button>
								<button>Today</button>
							</div>
						</div>
						<div class='wrap__content'>
							<div class='activity'>
								<div class='activity__ticker'>
									<div class='activity__ticker-img'>
										<img src={ImgBuy} alt='' width='60' />
									</div>
									<div class='activity__ticker-info'>
										<h3>Topup</h3>
									</div>
								</div>
								<div class='activity__date'>
									<h3>06:24:45 AM</h3>
								</div>
								<div class='activity__price'>
									<h3>+$5,553</h3>
								</div>
								<div class='activity__btns'>Completed</div>
							</div>
							<div class='activity'>
								<div class='activity__ticker'>
									<div class='activity__ticker-img'>
										<img src={ImgSell} alt='' width='60' />
									</div>
									<div class='activity__ticker-info'>
										<h3>Withdraw</h3>
									</div>
								</div>
								<div class='activity__date'>
									<h3>06:24:45 AM</h3>
								</div>
								<div class='activity__price'>
									<h3>-$542</h3>
								</div>
								<div class='activity__btns'>Pending</div>
							</div>
							<div class='activity'>
								<div class='activity__ticker'>
									<div class='activity__ticker-img'>
										<img src={ImgSell} alt='' width='60' />
									</div>
									<div class='activity__ticker-info'>
										<h3>Withdraw</h3>
									</div>
								</div>
								<div class='activity__date'>
									<h3>06:24:45 AM</h3>
								</div>
								<div class='activity__price'>
									<h3>-$912</h3>
								</div>
								<div class='activity__btns'>Pending</div>
							</div>
							<div class='activity'>
								<div class='activity__ticker'>
									<div class='activity__ticker-img'>
										<img src={ImgBuy} alt='' width='60' />
									</div>
									<div class='activity__ticker-info'>
										<h3>Topup</h3>
									</div>
								</div>
								<div class='activity__date'>
									<h3>06:24:45 AM</h3>
								</div>
								<div class='activity__price'>
									<h3>+$7,762</h3>
								</div>
								<div class='activity__btns'>Completed</div>
							</div>
							<div class='activity'>
								<div class='activity__ticker'>
									<div class='activity__ticker-img'>
										<img src={ImgBuy} alt='' width='60' />
									</div>
									<div class='activity__ticker-info'>
										<h3>Topup</h3>
									</div>
								</div>
								<div class='activity__date'>
									<h3>06:24:45 AM</h3>
								</div>
								<div class='activity__price'>
									<h3>+$5,553</h3>
								</div>
								<div class='activity__btns'>Completed</div>
							</div>
						</div>
					</div>
				</div>
				<div class='diagnostics'>
					<div class='summary'>
						<div class='section-wrap'>
							<div class='wrap__header'>
								<h2>Weekly Summary</h2>
							</div>
							<div class='wrap__content'>
								<div class='percent'>
									<ul>
										<li>
											<div>
												<span></span>30%
											</div>
											<p>Succesfull Market</p>
										</li>
										<li>
											<div>
												<span></span>46%
											</div>
											<p>Failed</p>
										</li>
										<li>
											<div>
												<span></span>10%
											</div>
											<p>Waiting</p>
										</li>
									</ul>
								</div>
								<div class='grafic'>
									<svg
										width='334'
										height='95'
										viewBox='0 0 334 95'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<rect
											y='95'
											width='95'
											height='9.99999'
											rx='4.99999'
											transform='rotate(-90 0 95)'
											fill='#2B2B2B'
										/>
										<rect
											y='95'
											width='77.1875'
											height='10'
											rx='5'
											transform='rotate(-90 0 95)'
											fill='#FF3B30'
										/>
										<rect
											y='95'
											width='77.1875'
											height='10'
											rx='5'
											transform='rotate(-90 0 95)'
											stroke='#202020'
										/>
										<rect
											y='95'
											width='52.4479'
											height='10'
											rx='5'
											transform='rotate(-90 0 95)'
											fill='#34C759'
										/>
										<rect
											y='95'
											width='52.4479'
											height='10'
											rx='5'
											transform='rotate(-90 0 95)'
											stroke='#202020'
										/>
										<rect
											x='54'
											y='95'
											width='95'
											height='9.99999'
											rx='4.99999'
											transform='rotate(-90 54 95)'
											fill='#2B2B2B'
										/>
										<rect
											x='54'
											y='95'
											width='60.3646'
											height='10'
											rx='5'
											transform='rotate(-90 54 95)'
											fill='#FF3B30'
										/>
										<rect
											x='54'
											y='95'
											width='60.3646'
											height='10'
											rx='5'
											transform='rotate(-90 54 95)'
											stroke='#202020'
										/>
										<rect
											x='54'
											y='95'
											width='23.75'
											height='10'
											rx='5'
											transform='rotate(-90 54 95)'
											fill='#34C759'
										/>
										<rect
											x='54'
											y='95'
											width='23.75'
											height='10'
											rx='5'
											transform='rotate(-90 54 95)'
											stroke='#202020'
										/>
										<rect
											x='108'
											y='95'
											width='95'
											height='9.99999'
											rx='4.99999'
											transform='rotate(-90 108 95)'
											fill='#2B2B2B'
										/>
										<rect
											x='108'
											y='95'
											width='77.1875'
											height='10'
											rx='5'
											transform='rotate(-90 108 95)'
											fill='#FF3B30'
										/>
										<rect
											x='108'
											y='95'
											width='77.1875'
											height='10'
											rx='5'
											transform='rotate(-90 108 95)'
											stroke='#202020'
										/>
										<rect
											x='108'
											y='95'
											width='52.4479'
											height='10'
											rx='5'
											transform='rotate(-90 108 95)'
											fill='#34C759'
										/>
										<rect
											x='108'
											y='95'
											width='52.4479'
											height='10'
											rx='5'
											transform='rotate(-90 108 95)'
											stroke='#202020'
										/>
										<rect
											x='162'
											y='95'
											width='95'
											height='9.99999'
											rx='4.99999'
											transform='rotate(-90 162 95)'
											fill='#2B2B2B'
										/>
										<rect
											x='162'
											y='95'
											width='66.3021'
											height='10'
											rx='5'
											transform='rotate(-90 162 95)'
											fill='#FF3B30'
										/>
										<rect
											x='162'
											y='95'
											width='66.3021'
											height='10'
											rx='5'
											transform='rotate(-90 162 95)'
											stroke='#202020'
										/>
										<rect
											x='162'
											y='95'
											width='34.4904'
											height='10'
											rx='5'
											transform='rotate(-90 162 95)'
											fill='#34C759'
										/>
										<rect
											x='162'
											y='95'
											width='34.4904'
											height='10'
											rx='5'
											transform='rotate(-90 162 95)'
											stroke='#202020'
										/>
										<rect
											x='324'
											y='95'
											width='95'
											height='9.99999'
											rx='4.99999'
											transform='rotate(-90 324 95)'
											fill='#2B2B2B'
										/>
										<rect
											x='324'
											y='95'
											width='60.3646'
											height='10'
											rx='5'
											transform='rotate(-90 324 95)'
											fill='#FF3B30'
										/>
										<rect
											x='324'
											y='95'
											width='60.3646'
											height='10'
											rx='5'
											transform='rotate(-90 324 95)'
											stroke='#202020'
										/>
										<rect
											x='324'
											y='95'
											width='34.4904'
											height='10'
											rx='5'
											transform='rotate(-90 324 95)'
											fill='#34C759'
										/>
										<rect
											x='324'
											y='95'
											width='34.4904'
											height='10'
											rx='5'
											transform='rotate(-90 324 95)'
											stroke='#202020'
										/>
										<rect
											x='216'
											y='95'
											width='95'
											height='9.99999'
											rx='4.99999'
											transform='rotate(-90 216 95)'
											fill='#2B2B2B'
										/>
										<rect
											x='216'
											y='95'
											width='41.5625'
											height='10'
											rx='5'
											transform='rotate(-90 216 95)'
											fill='#FF3B30'
										/>
										<rect
											x='216'
											y='95'
											width='41.5625'
											height='10'
											rx='5'
											transform='rotate(-90 216 95)'
											stroke='#202020'
										/>
										<rect
											x='216'
											y='95'
											width='12.8646'
											height='10'
											rx='5'
											transform='rotate(-90 216 95)'
											fill='#34C759'
										/>
										<rect
											x='216'
											y='95'
											width='12.8646'
											height='10'
											rx='5'
											transform='rotate(-90 216 95)'
											stroke='#202020'
										/>
										<rect
											x='270'
											y='95'
											width='95'
											height='9.99999'
											rx='4.99999'
											transform='rotate(-90 270 95)'
											fill='#2B2B2B'
										/>
										<rect
											x='270'
											y='95'
											width='77.1875'
											height='10'
											rx='5'
											transform='rotate(-90 270 95)'
											fill='#FF3B30'
										/>
										<rect
											x='270'
											y='95'
											width='77.1875'
											height='10'
											rx='5'
											transform='rotate(-90 270 95)'
											stroke='#202020'
										/>
										<rect
											x='270'
											y='95'
											width='43.5417'
											height='10'
											rx='5'
											transform='rotate(-90 270 95)'
											fill='#34C759'
										/>
										<rect
											x='270'
											y='95'
											width='43.5417'
											height='10'
											rx='5'
											transform='rotate(-90 270 95)'
											stroke='#202020'
										/>
									</svg>
									<ul>
										<li>Sun</li>
										<li>Mon</li>
										<li>Tue</li>
										<li>Wed</li>
										<li>Thu</li>
										<li>Fri</li>
										<li>Sat</li>
									</ul>
								</div>
							</div>
						</div>
						<div class='graphs'>
							<div class='two-blocks'>
								<div class='section-wrap'>
									<div class='wrap__content'>
										<h3>345</h3>
										<p>Transactions</p>
									</div>
									<div class='wrap-img'>
										<img src={RingProgress3} alt='' />
									</div>
								</div>
								<div class='section-wrap'>
									<div class='wrap__content'>
										<h3>4,563</h3>
										<p>Income</p>
									</div>
									<div class='wrap-img'>
										<img src={RingProgress} alt='' />
									</div>
								</div>
							</div>
							<div class='current'>
								<div class='section-wrap'>
									<div class='wrap__header'>
										<h2>Current Graph</h2>
									</div>
									<div class='wrap__content'>
										<img src={RingProgress2} alt='' />
										<ul>
											<li>
												<span></span>Food
											</li>
											<li>
												<span style={{ backgroundColor: '#ed3dd1' }}></span>
												Transport
											</li>
											<li>
												<span style={{ backgroundColor: '#ffee54' }}></span>
												Investment
											</li>
											<li>
												<span style={{ backgroundColor: '#ff5166' }}></span>Rent
											</li>
											<li>
												<span style={{ backgroundColor: '#2bc844' }}></span>
												Installment
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Profile
