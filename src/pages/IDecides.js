import IDecideList from "./IDecideComponents/IDecideList"

function IDecides({ isMobile, click }) {
  return (
    <>
      {(isMobile && click)
        ? null
        : <>
          <IDecideList />
        </>
      }
    </>
  )
}

export default IDecides
