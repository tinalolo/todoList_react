import React from "react";
import { InputTask } from "../InputTask";
import { editTodoList } from "../../actions";
//記得匯入connect
import { connect } from "react-redux";

//要改成
// class ConnectList extends React.Component {
//     {/*中間省略*/}
// }
class ConnectList extends React.Component {
  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this);
    //在constructor中指定執行時的this
    this.updateTodolist = this.updateTodolist.bind(this);
    this.openEdit = this.openEdit.bind(this);
    this.closeEdit = this.closeEdit.bind(this);
    // 為了讓List可以在點擊後隱藏，就必須要可以先抓到那個div，但是在組件可以重複使用的狀況下，
    // 通常不會為組件內的DOM設定id，否則當組件重用時，就只會有第一個設定id的生效而已，那該怎麼辦呢？就用ref吧
    this.list = React.createRef(); //新增的

    this.state = {
      important: this.props.listData.important,
      complete: this.props.listData.complete,
      editTasks: null,
    };
  }

  changeState(type) {
    switch (type) {
      //以下setState的第二個參數都是更新的函式
      //   case "complete": {
      //     this.setState({ complete: window.event.target.checked });
      //     break;
      //   }
      case "complete": {
        this.setState(
          { complete: window.event.target.checked },
          this.updateTodolist
        );
        break;
      }
      //   case "important": {
      //     if (this.state.important == "") this.setState({ important: "Y" });
      //     else this.setState({ important: "" });
      //     break;
      //   }
      case "important": {
        if (this.state.important === "")
          this.setState({ important: "Y" }, this.updateTodolist);
        else this.setState({ important: "" }, this.updateTodolist);
        break;
      }
    }
  }

  //   openEdit() {
  //     this.setState({ editTasks: <InputTask listData={this.props.listData} /> });
  //   }
  //   openEdit(event) {
  //     this.setState({
  //       editTasks: (
  //         <InputTask closeAdd={this.closeEdit} listData={this.props.listData} />
  //       ),
  //     });
  //   }
  //   openEdit() {
  //     this.list.current.style.display = "none";

  //     this.setState({
  //       editTasks: (
  //         <InputTask closeAdd={this.closeEdit} listData={this.props.listData} />
  //       ),
  //     });
  //   }
  openEdit(event) {
    if (
      event.target.className.indexOf("fa-star") === -1 &&
      event.target.className.indexOf("taskChk") === -1
    ) {
      this.list.current.style.display = "none";

      //   this.setState({
      //     editTasks: (
      //       <InputTask closeAdd={this.closeEdit} listData={this.props.listData} />
      //     ),
      //   });
      this.setState({
        editTasks: (
          <InputTask
            closeAdd={this.closeEdit}
            listData={this.props.listData}
            changeState={this.changeState.bind(this)}
            editTodoList={this.props.editTodoList}
          />
        ),
      });
    }
  }

  //   closeEdit() {
  //     this.setState({ editTasks: null });
  //   }
  closeEdit() {
    this.list.current.style.display = "";
    this.setState({ editTasks: null });
  }

  updateTodolist() {
    //複製一份新的物件，為該代辦事項的資料
    let updateList = Object.assign({}, this.props.listData);
    //用之前學過的解構賦值把complete和important兩個欄位替換成state的值
    updateList = {
      ...updateList,
      complete: this.state.complete,
      important: this.state.important,
    };
    //透過editTodoList丟到redux更新
    this.props.editTodoList(updateList);
  }

  render() {
    return (
      <div class="listBlock">
        <div
          class={" list " + (this.state.important == "Y" ? " important " : "")}
          onClick={this.openEdit}
          ref={this.list}
        >
          <input
            type="checkbox"
            class="taskChk"
            checked={this.state.complete}
            onChange={this.changeState.bind(this, "complete")}
          />

          <input
            type="text"
            class={
              " taskTitle " +
              (this.state.complete ? " complete " : "") +
              (this.state.important ? " important " : "")
            }
            value={this.props.listData.name}
          />

          <i
            class={
              this.state.important == "Y"
                ? " fas fa-star fa-lg iconImportant icon"
                : " far fa-star fa-lg icon"
            }
            onClick={this.changeState.bind(this, "important")}
          ></i>

          <i class="fas fa-pen fa-lg icon"></i>

          <div class="listIcon">
            {this.props.listData.date != "" ? (
              <i class="far fa-calendar-alt icon"></i>
            ) : (
              ""
            )}
            {this.props.listData.date != ""
              ? ` ${this.props.listData.date.substring(5).replace("-", "/")} `
              : ""}

            {this.props.listData.file != "" ? (
              <i class="fas fa-file icon"></i>
            ) : (
              ""
            )}

            {this.props.listData.commit != "" ? (
              <i class="far fa-comment-dots icon"></i>
            ) : (
              ""
            )}
          </div>
        </div>

        {/*在這裡固定輸出this.state.editTasks*/}
        <div>{this.state.editTasks}</div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editTodoList: (todoList) => dispatch(editTodoList(todoList)),
  };
};

//因為只用到事件沒用到資料，所以第一個參數給null
const List = connect(null, mapDispatchToProps)(ConnectList);

export { List };
