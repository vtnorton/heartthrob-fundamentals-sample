import { runSaga } from 'redux-saga'
import { mockFetch } from './test-mock-fetch'

const runContextSaga = async (saga: any) => {
  const dispatches = []
  const task = runSaga(
    {
      dispatch: (action) => dispatches.push(action),
      getState: () => ({}),
    },
    saga,
  )
  return { dispatches, task }
}

/* eslint-disable import/prefer-default-export */
export const runSagaTest = async (saga: any, fetchPromise?: Promise<any>) => {
  if (fetchPromise) 
mockFetch(fetchPromise)
  else 
mockFetch()
  return runContextSaga(saga)
}
