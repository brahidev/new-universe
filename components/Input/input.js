import styles from './styles/sections.module.css'

const InputCustom = ({ value, label, name, placeholder, type, classInput, classForm, onChange, disabled=false }) => {
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
        disabled={disabled}
      />
    </div>
  );
}

const InputSelect = ({optionsValues, positionDefault, classSelect, functionOnchange, disabled=false})=>{
  return(
    <select className={`${styles.select} ${styles[classSelect]}`} onChange={functionOnchange} disabled={disabled}>
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