import React from 'react'

interface Props {
  planetId: number | undefined
}
const Planet: React.FC<Props> = ({planetId}) => {
  return (
    <div>Planet</div>
  )
}

export default Planet