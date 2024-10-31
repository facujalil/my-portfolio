import style from "./SkillItem.module.css";

function SkillItem({ skill }) {
  return (
    <div className={style.skillItem}>
      <img src={skill.image} alt={skill.name} />
      <span>{skill.name}</span>
    </div>
  );
}

export default SkillItem;
