import {useContext} from 'react'
import { OtherContext } from '../contexts/OtherContext';

export const OtherComponents = () => {
  const { otherText,sayHi } = useContext(OtherContext);
  console.log(otherText)
  return (
    <>
      <div>{`otherText: ${otherText}`}</div>
      <button onClick={sayHi}>버튼</button>
    </>
  )
}
