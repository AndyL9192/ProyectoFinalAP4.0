import { useParams } from "react-router-dom";

export const TareasIdPage = () => {
  const { tareasid } = useParams();

  return <div>El id es : {tareasid}</div>;
};
