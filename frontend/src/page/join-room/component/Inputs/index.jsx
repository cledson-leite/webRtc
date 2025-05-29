const Input = props => {
  const {placeholder, value, changeHandler} = props
  return (
    <input
    className="input"
      placeholder={placeholder}
      value={value}
      onChange={changeHandler}
    />
  )
}

export const Inputs = props => {
  const {idValue, setIdValue, name, setName, isRoomCreator} = props
  return (
    <div className="inputs_container">
      {!isRoomCreator && <Input
        placeholder="Enter meeting ID"
        value={idValue}
        changeHandler={e => setIdValue(e.target.value)}
       />}
      <Input
        placeholder="Enter your name"
        value={name}
        changeHandler={e => setName(e.target.value)}
       />
    </div>
  )
}