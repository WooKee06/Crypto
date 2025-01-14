import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import BurgerIMg from '../img/main.svg'
import Notification from '../img/notification.svg'
import SearchImg from '../img/search.svg'
import { ThemeToogle } from '../store/theme/reducer'
const Header = () => {
	const [checked, setChecked] = useState(true)
	const [burgerOpen, setOurgerOpen] = useState(false)
	const dispatch = useDispatch()
	const HandleThemeAdd = () => {
		document.body.classList.toggle('theme-dark')
		dispatch(ThemeToogle(false))
	}
	const HandleThemeRomove = () => {
		document.body.classList.toggle('theme-dark')
		dispatch(ThemeToogle(true))
	}

	const OpenBurger = () => {
		setOurgerOpen(true)
	}

	const closeBurger = () => {
		setOurgerOpen(false)
	}

	return (
		<>
			<header className='dashboard-header'>
				<div className='header-wrapper'>
					<div className='profile-info'>
						<div className='user'>
							<div className='user__avatar'></div>
							<div className='user__name'>
								<p>Roman Borisoglebskyi</p>
								<span>Account: 4453728992</span>
							</div>
							<hr />
							<img src={Notification} alt='notification' />
						</div>

						<div className='balance'>
							<p>Portfolio Balance</p>
							<span>
								<p id='balance'>$623,098.17</p>
								<p id='balance-hide'>**************</p>
								<svg
									width='13'
									id='balance-toogle'
									height='13'
									viewBox='0 0 32 32'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M30.9401 15.66C29.7978 12.6708 27.806 10.0811 25.2101 8.21L30.0001 3.41L28.5901 2L2.00006 28.59L3.41006 30L8.51006 24.91C10.7868 26.2359 13.3657 26.9555 16.0001 27C19.2595 26.8774 22.4117 25.8024 25.0669 23.9079C27.722 22.0134 29.7639 19.3824 30.9401 16.34C31.0195 16.1203 31.0195 15.8797 30.9401 15.66ZM16.0001 22.5C14.6217 22.4994 13.2796 22.0579 12.1701 21.24L14.0001 19.43C14.7589 19.8458 15.632 20.0043 16.4885 19.8817C17.345 19.7592 18.1387 19.3623 18.7505 18.7505C19.3623 18.1387 19.7593 17.345 19.8818 16.4885C20.0043 15.6319 19.8458 14.7588 19.4301 14L21.2401 12.19C21.9445 13.1576 22.3677 14.3012 22.4629 15.4943C22.558 16.6874 22.3213 17.8835 21.779 18.9505C21.2367 20.0175 20.4099 20.9137 19.3901 21.5402C18.3702 22.1666 17.1969 22.4988 16.0001 22.5ZM4.53006 21.81L9.53006 16.81C9.50443 16.5408 9.49441 16.2704 9.50006 16C9.50271 14.2769 10.1884 12.6251 11.4068 11.4067C12.6252 10.1883 14.277 9.50264 16.0001 9.5C16.2641 9.50175 16.5279 9.51845 16.7901 9.55L20.5701 5.78C19.0989 5.27488 17.5555 5.01147 16.0001 5C12.7406 5.12257 9.58845 6.19756 6.93326 8.09209C4.27808 9.98662 2.23622 12.6176 1.06006 15.66C0.98063 15.8797 0.98063 16.1203 1.06006 16.34C1.82912 18.3821 3.0103 20.2441 4.53006 21.81Z'
										fill='black'
									/>
								</svg>
							</span>
						</div>
					</div>
					<nav>
						<ul className='head-nav'>
							<li>
								<NavLink to='/dashboard' activeclassname='active-link'>
									Главная
								</NavLink>
							</li>
							<li>
								<NavLink to='/grafic' activeclassname='active-link'>
									График
								</NavLink>
							</li>
							<li>
								<NavLink to='/alerts' activeclassname='active-link'>
									Оповищения
								</NavLink>
							</li>
							<li className='dropdown'>
								<Link>Сигналы</Link>
								<div className='dropdown-content'>
									<ul>
										<li>
											<NavLink to='/newSignal' activeclassname='active-link'>
												Подобрать Сигнал
											</NavLink>
										</li>
										<li>
											<NavLink to='/flowSignal' activeclassname='active-link'>
												Поток сигналов
											</NavLink>
										</li>
									</ul>
								</div>
							</li>
							<li>
								<NavLink to='/profile' activeclassname='active-link'>
									Статистика
								</NavLink>
							</li>
							<li>
								<NavLink to='/calculate' activeclassname='active-link'>
									Калькулятор
								</NavLink>
							</li>
							<li>
								<NavLink to='/transactions' activeclassname='active-link'>
									Транзакции
								</NavLink>
							</li>
						</ul>
						<div onClick={() => setOurgerOpen(true)} className='burger'>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M3 6H17M3 12H21M3 18H12'
									stroke='black'
									stroke-width='2.5'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
						</div>
					</nav>
					<div className='search'>
						<div className='search-wrap'>
							<img src={SearchImg} alt='search-img' />
							<input type='text' placeholder='Search' />
						</div>
						<label className='container'>
							<input
								defaultChecked={checked}
								onChange={() => setChecked(state => !state)}
								type='checkbox'
							/>
							<svg
								viewBox='0 0 512 512'
								height='1em'
								id='theme-light'
								onClick={HandleThemeAdd}
								xmlns='http://www.w3.org/2000/svg'
								className='sun'
							>
								<path d='M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z'></path>
							</svg>
							<svg
								viewBox='0 0 384 512'
								height='1em'
								id='theme-dark'
								onClick={HandleThemeRomove}
								xmlns='http://www.w3.org/2000/svg'
								className='moon'
							>
								<path d='M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z'></path>
							</svg>
						</label>
					</div>
				</div>
			</header>
			<div className={`burger-menu ${burgerOpen ? ' active' : ''}`}>
				<div className='burger-content'>
					<div className='close-burger'>
						<svg
							onClick={closeBurger}
							width='24'
							height='24'
							viewBox='0 0 13 13'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M2.47812 2.47812C2.63049 2.3258 2.83711 2.24023 3.05256 2.24023C3.26801 2.24023 3.47463 2.3258 3.627 2.47812L6.5 5.35112L9.373 2.47812C9.52624 2.33012 9.73148 2.24822 9.94451 2.25008C10.1575 2.25193 10.3613 2.33738 10.512 2.48802C10.6626 2.63866 10.7481 2.84245 10.7499 3.05548C10.7518 3.26852 10.6699 3.47376 10.5219 3.627L7.64887 6.5L10.5219 9.373C10.6699 9.52624 10.7518 9.73148 10.7499 9.94451C10.7481 10.1575 10.6626 10.3613 10.512 10.512C10.3613 10.6626 10.1575 10.7481 9.94451 10.7499C9.73148 10.7518 9.52624 10.6699 9.373 10.5219L6.5 7.64887L3.627 10.5219C3.47376 10.6699 3.26852 10.7518 3.05548 10.7499C2.84245 10.7481 2.63866 10.6626 2.48802 10.512C2.33738 10.3613 2.25193 10.1575 2.25008 9.94451C2.24822 9.73148 2.33012 9.52624 2.47812 9.373L5.35112 6.5L2.47812 3.627C2.3258 3.47463 2.24023 3.26801 2.24023 3.05256C2.24023 2.83711 2.3258 2.63049 2.47812 2.47812Z'
								fill='black'
							/>
						</svg>
						<h2>Меню</h2>
					</div>

					<img src={BurgerIMg} alt='mainimgburger' />
					<div className='links'>
						<ul>
							<li onClick={closeBurger}>
								<NavLink to='/dashboard' activeclassname='active-link'>
									Главная
								</NavLink>
							</li>
							<li onClick={closeBurger}>
								<NavLink to='/grafic' activeclassname='active-link'>
									График
								</NavLink>
							</li>
							<li onClick={closeBurger}>
								<NavLink to='/alerts' activeclassname='active-link'>
									Оповищения
								</NavLink>
							</li>
							<li className='dropdown'>
								<Link>Сигналы</Link>
								<div className='dropdown-content'>
									<ul>
										<li onClick={closeBurger}>
											<NavLink to='/newSignal' activeclassname='active-link'>
												Подобрать Сигнал
											</NavLink>
										</li>
										<li onClick={closeBurger}>
											<NavLink to='/flowSignal' activeclassname='active-link'>
												Поток сигналов
											</NavLink>
										</li>
									</ul>
								</div>
							</li>
							<li onClick={closeBurger}>
								<NavLink to='/profile' activeclassname='active-link'>
									Статистика
								</NavLink>
							</li>
							<li onClick={closeBurger}>
								<NavLink to='/calculate' activeclassname='active-link'>
									Калькулятор
								</NavLink>
							</li>
							<li onClick={closeBurger}>
								<NavLink to='/transactions' activeclassname='active-link'>
									Транзакции
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default Header
