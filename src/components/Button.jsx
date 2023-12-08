export const Button = ({
  children,
  texto = "default",
  variante = "blue",
  click,
  oculto,
}) => {
  if (oculto) return null;
  let clase = "";

  if (variante === "blue") clase = "btn-primary";
  if (variante === "green") clase = "btn-success";
  if (variante === "red") clase = "btn-danger";

  return (
    <button onClick={click} className={"btn " + clase}>
      {children || texto}
    </button>
  );
};
