interface Props {
  setInternalStructure: React.Dispatch<React.SetStateAction<boolean>>,
  internalStructure?: boolean,
  surfaceGeology?: boolean,
  setSurfaceGeology: React.Dispatch<React.SetStateAction<boolean>>,
  planetId: number,
  overview: boolean,
  setOverview: React.Dispatch<React.SetStateAction<boolean>>,
  setPlanet: React.Dispatch<React.SetStateAction<number>>
}

export default Props
