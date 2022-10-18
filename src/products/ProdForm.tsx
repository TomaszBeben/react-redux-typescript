const ProdForm = () => {

  const submitForm = (e:any) => {
    e.preventDefault()
  }
  return (
    <>
      <h2>Add game to the stor</h2>
      <form>
        <input type='text' placeholder="Game title" name='title' />
        <input type='text' placeholder="Price" name="price" />
        <input type='text' placeholder="ID" name='id' />
        <button onClick={submitForm} type="submit">Add</button>
      </form>
    </>

  )
}

export default ProdForm