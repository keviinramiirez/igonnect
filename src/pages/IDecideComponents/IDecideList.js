import './IDecideList.css'
import IDecideCart from './IDecideCart'
import iDecideData from './iDecideData'

function IDecideList() {
  return (
    <div className='idecideList'>
      {iDecideData.map(({ title, image, context, link }) => (
        <IDecideCart
          title={title}
          image={image}
          context={context}
          link={link}
        />
      ))}
    </div>
  )
}

export default IDecideList
