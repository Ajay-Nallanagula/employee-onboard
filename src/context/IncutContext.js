import React from 'react'

const IncutContext = React.createContext({})
const {Provider, Consumer:IncutConsumer} = IncutContext

export  {Provider,IncutConsumer,IncutContext}