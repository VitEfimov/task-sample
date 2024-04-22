import React, { useState } from 'react';

const Description = ({ task, setModal }) => {
  const [formData, setFormData] = useState({
    name: task.taskname,
    priority: task.priority,
    completed: task.completed,
    completionDate: task.completionDate,
    descriptionText: task.description?.text || '',
    descriptionImg: task.description?.img || '',
    descriptionUrl: task.description?.url || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // updateTask({ taskId: task.id, ...formData }));
    setModal(false);
  };

  return (
    <div className="modal">
      
      <div className="modal-content">
        {/* <button onClick={()=>setModal(false)}>close</button> */}
        <span className="close" onClick={() => setModal(false)}>&times;</span>
        <form onSubmit={handleSubmit}>
          <label>Task:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          <label>Priority:</label>
          {/* <input type="text" name="priority" value={formData.priority} onChange={handleChange} /> */}

<select name="priority" value={formData.priority} onChange={handleChange}>
  <option>Low</option>
  <option>Medium</option>
  <option>High</option>
</select>
          <label>Completion Date:</label>
          <input type="text" name="completionDate" value={formData.completionDate} onChange={handleChange} />
          <label>Description:</label>
          <textarea name="descriptionText" value={formData.descriptionText} onChange={handleChange}></textarea>
          <label>Description URL:</label>
          <input type="text" name="descriptionUrl" value={formData.descriptionUrl} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Description;



// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { updateTask, deleteTask } from '../features/taskSlice';


// const Description = ({task,setModal}) => {

//   const dispatch = useDispatch();
//   // const tasks = useSelector(state => state.taskSlice.tasks);

//     const handleUpdateTask = (updatedFields) => {
//         // Update task fields using the provided logic
//         updateTask({
//           taskId: task.id,
//           name: updatedFields.name || task.taskname,
//           priority: updatedFields.priority || task.priority,
//           completed: updatedFields.completed || task.completed,
//           completionDate: updatedFields.completionDate || task.completionDate,
//           description: updatedFields.description
//             ? {
//                 text: updatedFields.description.text || '',
//                 img: updatedFields.description.img || '',
//                 url: updatedFields.description.url || '',
//               }
//             : task.description,
//         });
//         setModal(false); // Close the modal after updating
//       };


//       // const handleTaskPriorityChange = (selectedOption) => {
//       //   setTaskPriority(selectedOption.value);
//       //   dispatch(
//       //     updateTask({
//       //       taskId: task.id,
//       //       priority: selectedOption.value,
//       //     })
//       //   );
//       //   setTaskPrioritySelect(false);
//       // };
    
//   return (
//     <div>Description</div>
//   )
// }

// export default Description