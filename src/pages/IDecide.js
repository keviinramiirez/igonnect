import IDecideList from "./IDecideComponents/IDecideList"

function IDecide({ isMobile, click }) {
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

export default IDecide
