import piwikConnector from 'piwik-react-router'

const piwik = piwikConnector({
  url: 'https://stats.data.gouv.fr',
  siteId: '38'
})

piwik.push(['setDomains', ['*.cadastre.data.gouv.fr']])

export default piwik
