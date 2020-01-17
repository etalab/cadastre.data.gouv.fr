import React, {useState, useCallback, useEffect} from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import {debounce} from 'lodash'

import {useInput} from '../components/hooks/input'
import {search} from '../lib/api-adresse'

import Page from '../layouts/main'

import Mapbox from '../components/mapbox'
import SearchInput from '../components/search-input'
import renderAddress from '../components/search-input/render-address'

import CadastreMap from '../components/map/cadastre-map'

const title = 'Carte interactive'
const description = 'Cherchez des adresses et lieux-dits.'

const zoomLevel = {
  street: 16,
  locality: 17,
  housenumber: 18,
  municipality: 13
}

const MapPage = ({defaultInput}) => {
  const [input, setInput] = useInput(defaultInput)
  const [center, setCenter] = useState()
  const [zoom, setZoom] = useState()
  const [placeholder, setPlaceholder] = useInput(defaultInput)
  const [results, setResults] = useState([])
  const [parcelle, setParcelle] = useState(null)

  const handleSelect = address => {
    const {label} = address.properties
    const coords = address.geometry.coordinates
    const zoom = zoomLevel[address.properties.type]

    setCenter(coords)
    setZoom(zoom)
    setInput('')
    setPlaceholder(label)

    Router.push(`/map?q=${input}`)
  }

  const searchAddress = useCallback(debounce(async () => {
    const results = await search({q: input})
    setResults(results.features)
  }), [input])

  useEffect(() => {
    if (input.length > 0) {
      searchAddress()
    }
  }, [input, searchAddress])

  return (
    <Page title={title} description={description} hasFooter={false}>
      <div className='interactive-map'>
        <div className='input'>
          <SearchInput
            value={input}
            results={results}
            placeholder={placeholder}
            onSelect={handleSelect}
            onSearch={setInput}
            renderItem={renderAddress}
            getItemValue={item => item.properties.context}
            fullscreen
          />
        </div>

        <div className='map-container'>
          <Mapbox
            defaultZoom={zoom}
            defaultCenter={center}
            hasSwitchStyle
          >
            {({...mapboxProps}) => (
              <CadastreMap
                {...mapboxProps}
                zoom={zoom}
                center={center}
                selectedParcelle={parcelle}
                selectParcelle={setParcelle}
              />
            )}
          </Mapbox>
        </div>
      </div>

      <style jsx>{`
        .map-container {
          width: 100%;
          position: relative;
          height: calc(100vh - 72px);
        }

        .input {
          z-index: 5;
          position: absolute;
          margin: 10px 0 0 10px;
          width: 400px;
        }

        @media (max-width: 470px) {
          .input {
            width: calc(100% - 50px);
          }
        }
      `}</style>
    </Page>
  )
}

MapPage.propTypes = {
  defaultInput: PropTypes.string
}

MapPage.defaultProps = {
  defaultInput: null
}

MapPage.getInitialProps = async ({query}) => {
  const {q} = query

  return {
    defaultInput: q
  }
}

export default MapPage
