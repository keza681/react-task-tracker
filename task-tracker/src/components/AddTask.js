const AddTask = () => {
  return (
    <form className="add-form">
      <div>
        <label htmlFor="">Task</label>
        <input type="text" placeholder="Add Task" />
      </div>
      <div>
        <label htmlFor="">Day & Time</label>
        <input type="text" placeholder="Add Day & Time" />
      </div>
      <div>
        <label htmlFor="">Set Reminder</label>
        <input type="checkbox" />
      </div>

      <input type="submit" value='Save Task' />
    </form>
  )
}

export default AddTask
