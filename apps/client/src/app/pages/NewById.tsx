import { useParams } from "react-router-dom";

export const NewById = () => {
    const { id } = useParams();
    
  return (
    <div>NewById</div>
  )
}
