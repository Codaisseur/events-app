import React from 'react'

export default function EventForm(props) {
  return (<form onSubmit={props.onSubmit}>
    <label>
      Name:
      <input type="text" name="name" onChange={props.onChange} value={props.values.name} />
    </label>
    
    <label>
      Date:
      <input type="text" name="date" onChange={props.onChange} value={props.values.date} />
    </label>
    
    <label>
      Description:
      <input type="text" name="description" onChange={props.onChange} value={props.values.description} />
    </label>
    
    <button type="submit">Save</button>
  </form>)
}