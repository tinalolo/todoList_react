import React from "react";
import { connect } from "react-redux";
import { List } from "../List";

class ConnectTodoLists extends React.Component {
  render() {
    this.props.data
      .sort((f, s) => {
        return f.important < s.important ? 1 : -1;
      })
      .sort((f, s) => {
        return f.complete > s.complete ? 1 : -1;
      });
    console.log(this.props.data);

    // let Lists = this.props.data.map((item) => {
    //   return <List key={item.id} listData={item} />;
    // });
    // let todoCount = 0;
    // let Lists = this.props.data.map((item) => {
    //   if (!item.complete) {
    // todoCount++;
    //   }
    //   return <List key={item.id} listData={item} />;
    // });
    let todoCount = 0;
    let Lists = this.props.data.map((item) => {
      //用switch來區隔各個頁籤
      //   switch (this.props.page) {
      //     //如果是在progress內，已完成的事項就回傳null
      //     case "progress": {
      //       if (item.complete) return null;
      //       break;
      //     }
      //   }
      switch (this.props.page) {
        case "progress": {
          if (item.complete) return null;
          break;
        }
        case "completed": {
          if (!item.complete) return null;
          break;
        }
      }
      //   if (!item.complete) {
      //     todoCount++;
      //   }
      if (this.props.page) {
        todoCount++;
      } else if (!item.complete) {
        todoCount++;
      }
      return <List key={item.id} listData={item} />;
    });

    // return <div>{Lists}</div>;
    // return (
    //   <div>
    //     <div>{Lists}</div>
    //     <div class="countText">
    //       {/*來輸出*/}
    //       <span>{todoCount} tasks left</span>
    //     </div>
    //   </div>
    // );
    return (
      <div>
        <div>{Lists}</div>
        <div class="countText">
          <span>
            {todoCount} tasks
            {this.props.page === "completed" ? "completed" : "left"}
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { data: state };
};

const TodoLists = connect(mapStateToProps)(ConnectTodoLists);

export { TodoLists };