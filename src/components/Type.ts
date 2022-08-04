interface Props {
  setInternalStructure: React.Dispatch<React.SetStateAction<boolean>>,
  internalStructure?: boolean,
  surfaceGeology?: boolean,
  setSurfaceGeology: React.Dispatch<React.SetStateAction<boolean>>,
  planetId: number
}

export default Props
