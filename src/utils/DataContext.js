import React from 'react'

export const DataContext = React.createContext({})

export function DataProvider(props) {
  return (
    <DataContext.Provider value={props}>{props.children}</DataContext.Provider>
  )
}

export const DataConsumer = DataContext.Consumer
