import React from "react";
import { InputTask } from "../InputTask";

class AddTask extends React.Component {
  openAdd() {
    //將輸入框設定隱藏
    document.getElementById("addTask").style.display = "none";
    //輸入表單設定顯示
    document.getElementById("inputTask").style.display = "";
  }

  closeAdd() {
    //顯示輸入框
    document.getElementById("addTask").style.display = "";
    //隱藏輸入表單
    document.getElementById("inputTask").style.display = "none";
  }

  render() {
    return (
      <div>
        <div>
          {/* <input id="addTask" value=" ＋ " /> */}
          {/* 將該事件指定給input的onClick觸發 */}
          <input id="addTask" value=" ＋ 新增事項" onClick={this.openAdd} />
        </div>
        {/* 將他一開始的初始狀態設定為display:none隱藏，之後會透過對上方的輸入框做點擊來顯示 */}
        <div id="inputTask" style={{ display: "none" }}>
          {/* AddTask傳至InputTask */}
          {/* <InputTask /> */}
          <InputTask closeAdd={this.closeAdd} />
        </div>
      </div>
    );
  }
}

export { AddTask };
