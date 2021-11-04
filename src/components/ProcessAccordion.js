import React, { useState, useRef, useEffect } from 'react'

import { FaChevronDown } from "react-icons/fa";

const Accordion = (props) => {
	const [active, setActive] = useState(false)
	const contentRef = useRef(null)

	useEffect(() => {
		contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : '0px'
	}, [contentRef, active])

	const toogleActive = () => {
		setActive(!active)
	}

	const titleStyle = {
		fontWeight: 600,
		fontSize: '20px',
	}

	const subtitleStyle = {
		fontWeight: 600,
		fontSize: '12px',
	}

	// @TODO: Chevron Down icon positioned absolute
	// to bottom of container

	return (
		<div className="accordion-section">
			<button className="accordion-title" onClick={toogleActive}>
				<div className="accordion-layout">
					<p style={titleStyle}>
						{props.title}
					</p>
					<p style={subtitleStyle}>
						{props.subtitle}
					</p>
					<span className={active ? 'accordion-icon rotate' : 'accordion-icon'}>
						<FaChevronDown />
					</span>
				</div>
			</button>

			<div
				ref={contentRef}
				className="accordion-content"
			>
				{props.children}
			</div>
		</div>
	)
}

export default Accordion