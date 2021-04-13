// 1.為每個輸入框都設定對應state的name。
// 2.將受控組件的value都設定為state的值，雖然在這邊還不需給值，不過還是得讓他受控才能改變state，阿不受控的filebox要指定ref給他，讓我們可以在外面控制，至於值就寫進之前為他留的span中。
// 3.為每個組件包括filebox都增加onChange事件，讓他值改變時可以寫到state中。
// 4.把送出新增的事件submitTodo指定給＋ Save按鈕的onClick觸發。
import React from "react";
import { InputName } from "../InputName";

class InputTasksForm extends React.Component {
  render() {
    return (
      <div class="InputTasksForm">
        {/* // 將這個表單切成兩個部分，第一個是from的部分，第二個是button的部分，並把兩個div都包在最外層的<div class="InputTasksForm">當中 */}
        {/* 在表單<div class="InputTask">的區塊放置所有的輸入框，包含日期date、時間time、FileBox、textarea */}
        <div class="InputTask">
          <InputName className="fas fa-calendar-alt" inputName="Deadline" />
          <div class="inputForm">
            <input
              name="date"
              type="date"
              class="inputStyle inputDateTime"
              value={this.props.stateData.date}
              onChange={this.props.changeState}
            />

            <input
              name="time"
              type="time"
              class="inputStyle inputDateTime"
              value={this.props.stateData.time}
              onChange={this.props.changeState}
            />
          </div>
          <InputName className="fas fa-file" inputName="File" />
          <div class="inputForm">
            <input
              name="file"
              type="file"
              class="inputStyle"
              ref={this.props.filebox}
              onChange={this.props.changeState}
            />
            <br />
            <span class="inputStyle">{this.props.stateData.file}</span>
          </div>
          <InputName className="far fa-comment-dots" inputName="Comment" />
          <div class="inputForm">
            <textarea
              name="commit"
              rows="7"
              cols="55"
              class="inputStyle"
              value={this.props.stateData.commit}
              onChange={this.props.changeState}
            ></textarea>
          </div>
        </div>

        <div>
          {/* 第二個按鈕的div就比較單純，只是放了兩個按鈕 */}
          {/* InputTasksForm中設定Ｘ cancel的點擊事件 */}
          {/* <button type="button" class="addButton cancelButton">
            {" "}
            Ｘ Cancel
          </button> */}
          <button
            type="button"
            class="addButton cancelButton"
            onClick={this.props.closeAdd}
          >
            {" "}
            Cancel
          </button>
          {/* <button type="button" class="addButton saveButton">
            {" "}
            ＋ Save
          </button> */}
          <button
            type="button"
            class="addButton saveButton"
            onClick={this.props.submitTodo}
          >
            {" "}
            Save
          </button>
        </div>
      </div>
    );
  }
}

export { InputTasksForm };
