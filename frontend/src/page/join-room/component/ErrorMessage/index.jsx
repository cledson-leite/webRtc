export const ErrorMessage = (props) => {
  const {errorMessage} = props
  return (
    <div className="error_message_container">
      {errorMessage && <p className="error_message_paragraph">{errorMessage}</p>}
    </div>
  )
}