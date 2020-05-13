import {
  FETCH_PAINTINGS,
  SELECT_ACTIVE_PAINTING,
  DELETE_PAINTING,
  UPDATE_MUSEUM_FILTER
} from './types'
import artworks from '../data/artworks'

export function fetchPaintings () {
  return { type: FETCH_PAINTINGS, payload: artworks }
}

export function selectPainting (activeID) {
  return { type: SELECT_ACTIVE_PAINTING, id: activeID }
}

export function deletePainting (id) {
  return { type: DELETE_PAINTING, payload: id }
}

export function updateMuseumFilter (newFilter) {
  return { type: UPDATE_MUSEUM_FILTER, payload: newFilter }
}
