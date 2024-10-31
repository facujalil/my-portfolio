import style from "./Technology.module.css";

function Technology({ technology, separator }) {
  return (
    <p className={style.technology}>
      <span>{technology}</span>
      {separator}
    </p>
  );
}

export default Technology;
