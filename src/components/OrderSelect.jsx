import React, { useState } from 'react'
import angleDownIcon from '../img/angle-down.svg' // убедитесь, что путь к иконке правильный

const OrderSelect = ({ orders, title }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedOrder, setSelectedOrder] = useState(`${orders[0]}`)

	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	}

	const handleSelect = order => {
		setSelectedOrder(order)
		setIsOpen(false)
	}

	return (
		<div className='popular coin timeframe move'>
			<div className='title'>{title}</div>
			<div className={`select ${isOpen ? 'is-active' : ''}`}>
				<div className='select__header' onClick={toggleDropdown}>
					<span className='select__current'>{selectedOrder}</span>
					<div className='select__icon'>
						<img src={angleDownIcon} alt='angle-down' />
					</div>
				</div>
				{isOpen && (
					<div className='select__body'>
						<div className='select__items'>
							{orders.map((order, index) => (
								<div
									key={index}
									className='select__item'
									onClick={() => handleSelect(order)}
								>
									{order}
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default OrderSelect
