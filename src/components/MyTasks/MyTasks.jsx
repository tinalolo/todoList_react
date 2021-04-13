// import React from "react";
// import { AddTask } from "../AddTask";

// class MyTasks extends React.Component {
//   render() {
//     return (
//       <div class="inputTasksForm">
//         <AddTask />
//       </div>
//     );
//   }
// }

// export { MyTasks };
import React from "react";
import { AddTask } from "../AddTask";
import { TodoLists } from "../TodoLists";

class MyTasks extends React.Component {
  render() {
    return (
      <div class="InputTasksForm">
        <AddTask />
        <TodoLists />
      </div>
    );
  }
}

export { MyTasks };
