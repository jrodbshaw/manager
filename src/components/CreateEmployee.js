import React, { Component } from "react";
import { connect } from "react-redux";
import { employeeUpdate, employeeCreate, resetForm } from "../actions";
import EmployeeForm from "./EmployeeForm";
// * import common Components
import { Card, CardSection, Button } from "./common";

class CreateEmployee extends Component {
  componentWillMount() {
    this.props.resetForm();
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || "Monday" });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>CREATE</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { employeeUpdate, employeeCreate, resetForm }
)(CreateEmployee);
