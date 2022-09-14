import styles from './styles/sections.module.css'

const InputCustom = ({ value, label, name, placeholder, type, classInput, classForm, onChange }) => {
  return(
    <div className={`${styles[classForm]}`}>
      {label && <label htmlFor="input-field">{label}</label>}
      <input
        type={type}
        value={value}
        name={name}
        className={`${styles[classInput]}`}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

const InputSelect = ({optionsValues,positionDefault,classSelect})=>{
  return(
    <select className={`${styles.select} ${styles[classSelect]}`}>
      {console.log('OPTIONS',optionsValues)}
      {optionsValues.map((item,index) =>{
        let { value,name } = item
        return(
          <option key={ index } value={`${value}`} {...positionDefault == index? "selected ": null} >{`${name}`}</option>
        )
      })}
    </select>
  )
}

export {InputCustom,InputSelect};