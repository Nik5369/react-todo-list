export const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select select={value} onChange={(e) => onChange(e.target.value)}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((el, id) => {
        return (
          <option value={el.value} key={id}>
            {el.name}
          </option>
        )
      })}
    </select>
  )
}
