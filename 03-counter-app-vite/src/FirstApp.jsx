import PropTypes from "prop-types";

export const FirstApp = ({ title, subtitle, name }) => {
  // console.log(props);

  return (
    <>
      <h1>{title}</h1>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>{subtitle}</p>
      <p>{name}</p>
    </>
  );
};

//Para validar tipos de datos y que sean obligatorios desde el padre que es main.jsx
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

//Default props para definir valores por defecto
FirstApp.defaultProps = {
  title: "No hay titulo...",
  subtitle: "No hay subtitulo...",
  name: "Luis Angel",
};
