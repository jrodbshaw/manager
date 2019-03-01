import React, { Component } from "react";
import { Actions, Scene, Router } from "react-native-router-flux";
// * import components
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";
import CreateEmployee from "./components/CreateEmployee";
import EditEmployee from "./components/EditEmployee";

export default class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="auth">
            <Scene key="LoginForm" component={LoginForm} title="Sign In" />
          </Scene>
          <Scene key="main">
            <Scene
              rightTitle="Add"
              onRight={() => {
                Actions.CreateEmployee();
              }}
              key="EmployeeList"
              component={EmployeeList}
              title="Employee List"
              initial
            />
            <Scene
              key="CreateEmployee"
              component={CreateEmployee}
              title="Create Employee"
            />
            <Scene
              key="EditEmployee"
              component={EditEmployee}
              title="Edit Employee"
            />
          </Scene>
        </Scene>
      </Router>
    );
  }
}
