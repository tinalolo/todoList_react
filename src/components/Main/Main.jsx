// 匯入todoListStore和Procider，store昨天如果匯過就不要再重複匯，不然會出錯哦！
// 使用Provider組件並指定store屬性為todoListStore，因為其他組件也會需要用到connect，所以選擇在Main中讓他包住整個頁面的組件。

import React from "react";
import { Provider } from "react-redux"; //新增的
import { HashRouter, Route } from "react-router-dom";
import { TopBlock } from "../TopBlock";
import { MyTasks } from "../MyTasks";

// //匯入store和建構動作的事件
// import { todoListStore } from "../../store";
// import { addTodoList } from "../../actions";
//結合上面兩個
import { todoListStore } from "../../store";

//記得要import，其他的import怕太多在這裡省略
import { InProgress } from "../InProgress";
import { Completed } from "../Completed";

class Main extends React.Component {
  render() {
    return (
      //   <HashRouter>
      //     <div>
      //       <TopBlock />
      //       <Route exact path="/" component={MyTasks} />
      //     </div>
      //   </HashRouter>
      //   <Provider store={todoListStore}>
      //     <HashRouter>
      //       <div class="alignCenter">
      //         <TopBlock />
      //         <Route exact path="/" component={MyTasks} />
      //       </div>
      //     </HashRouter>
      //   </Provider>
      <Provider store={todoListStore}>
        <HashRouter>
          <div class="alignCenter">
            <TopBlock />
            {/*設定path的路徑和要輸出的組件*/}
            <Route exact path="/" component={MyTasks} />
            <Route exact path="/inProgress" component={InProgress} />
            <Route exact path="/completed" component={Completed} />
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

//增加幾個測試用的全域函數
window.store = todoListStore;
// window.addTodlList = addTodoList;

export { Main };
