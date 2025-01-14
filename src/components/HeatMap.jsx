import React, { memo, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

const HeatMap = () => {
	const container = useRef()
	const theme = useSelector(state => state.theme.theme)

	useEffect(() => {
		if (container.current) {
			// Очищаем контейнер перед вставкой нового скрипта
			container.current.innerHTML = ''
			const script = document.createElement('script')
			script.src =
				'https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js'
			script.type = 'text/javascript'
			script.async = true
			script.innerHTML = `
			{
			  "exchanges": [],
			  "dataSource": "SPX500",
			  "grouping": "sector",
			  "blockSize": "market_cap_basic",
			  "blockColor": "change",
			  "locale": "en",
			  "symbolUrl": "",
			  "colorTheme": "${theme ? 'dark' : 'light'}",
			  "hasTopBar": false,
			  "isDataSetEnabled": false,
			  "isZoomEnabled": true,
			  "hasSymbolTooltip": true,
			  "isMonoSize": false,
			  "width": "100%",
			  "height": "100%"
			}`
			container.current.appendChild(script)
		}
	}, [theme])

	return (
		<div className='tradingview-widget-container' ref={container}>
			<div className='tradingview-widget-container__widget'></div>
		</div>
	)
}

export default memo(HeatMap)
