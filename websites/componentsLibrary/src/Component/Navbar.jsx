import React, { useEffect, useState } from 'react'

const navItems = [
	{ id: 'badge', label: 'Badges' },
	{ id: 'banner', label: 'Banners' },
	{ id: 'card', label: 'Cards' },
	{ id: 'testimonial', label: 'Testimonials' },
	{ id: 'tooltip', label: 'Tooltips' },
	{ id: 'toast', label: 'Toasts' }
]

const getInitialSection = () => {
	const hashId = window.location.hash.replace('#', '')
	return navItems.some(item => item.id === hashId) ? hashId : 'badge'
}

function Navbar() {
	const [activeSection, setActiveSection] = useState(getInitialSection)

	useEffect(() => {
		const sections = navItems
			.map(item => document.getElementById(item.id))
			.filter(Boolean)

		const observer = new IntersectionObserver(
			entries => {
				const visibleEntry = entries
					.filter(entry => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

				if (visibleEntry) {
					setActiveSection(visibleEntry.target.id)
				}
			},
			{
				rootMargin: '-18% 0px -60% 0px',
				threshold: [0.2, 0.4, 0.6]
			}
		)

		sections.forEach(section => observer.observe(section))

		return () => observer.disconnect()
	}, [])

	return (
		<nav className='site-nav' aria-label='Component sections'>
			<ul className='site-nav-list'>
				{navItems.map(item => (
					<li key={item.id}>
						<a
							href={`#${item.id}`}
							className={activeSection === item.id ? 'active' : ''}
							onClick={() => setActiveSection(item.id)}
						>
							{item.label}
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navbar
