interface Props {
  setPlanet: React.Dispatch<React.SetStateAction<number>>,
  setInternalStructure: React.Dispatch<React.SetStateAction<boolean>>,
  setSurfaceGeology: React.Dispatch<React.SetStateAction<boolean>>,
  setOverview : React.Dispatch<React.SetStateAction<boolean>>,
  planetId: number,
  mobileMenuOpened?: boolean,
  setMobileMenuOpened: React.Dispatch<React.SetStateAction<boolean>>,
}

export default Props
