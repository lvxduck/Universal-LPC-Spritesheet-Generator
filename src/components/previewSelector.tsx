import { useStore, AnimType } from '../store'

const PreviewSelect = () => {
  const setAnimType = useStore((state) => state.setAnimType);
  return (
    <select 
      onChange={val => {
        const animType =val.target.value;
        setAnimType(AnimType[animType as keyof typeof AnimType])
        }
      }
    >
      {
        Object
        .keys(AnimType)
        .map( (item, index) => {
          return <option value={item} key={`option ${index}`}>
            {item}
          </option>
        })
      }
    </select>
  )
}

export default PreviewSelect
