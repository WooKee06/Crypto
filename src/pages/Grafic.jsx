import React from 'react'
import GraficWidgets from '../components/GraficWidgets'
import style from '../styles/Grafic.module.scss'

const Grafic = () => {
	return (
		<main>
			<div class={style.mainFirstWrapper}>
				<div class={style.grafic}>
					<GraficWidgets />
				</div>
			</div>
		</main>
	)
}

export default Grafic
