(() => {
	'use strict'

	if (window.environment === 'development') return

	const appId = 'UA-24389952-15'

	function analytics (i, s, o, g, r, a, m) {
		i['GoogleAnalyticsObject'] = r
		i[r] = i[r] || function () {
			(i[r].q = i[r].q || []).push(arguments)
		}
		i[r].l = 1 * new Date()
		a = s.createElement(o)
		m = s.getElementsByTagName(o)[0]
		a.async = 1
		a.src = g
		m.parentNode.insertBefore(a, m)
	}

	analytics(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga')
	ga('create', appId, 'auto')
	ga('send', 'pageview')
})()
