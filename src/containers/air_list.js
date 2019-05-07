import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectCity, fetchAir } from '../actions';
import { bindActionCreators } from 'redux';

function convertKhaiGrade(value) {
  var grade;
  if (!value) {
    grade = 'UNKNOWN';
  } else if (value >= 201) {
    grade = 'POOR';
  } else if (value >= 151) {
    grade = 'INFERIOR';
  } else if (value >= 101) {
    grade = 'FAIR';
  } else if (value >= 51) {
    grade = 'GOOD';
  } else if (value >= 0) {
    grade = 'EXCELLENT';
  } else {
    grade = 'UNKNOWN';
  }
  return grade;
}

class AirList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
    this.renderAir = this.renderAir.bind(this)
  }

  renderAir({ parm, list }) {
    console.log("DATA", list);
    return (
      <tr onClick={() => {
        this.props.selectCity(list[0]);
      }}
        key={parm.stationName}>
        <td>
          {parm.stationName}
        </td>
        <td>{convertKhaiGrade(list[0].khaiValue)}</td>
      </tr>
    );
  }
  handleClick(data) {

  }
  handleError() {
    if (this.props.error) {
      return (
        <div className="alert alert-danger" role="alert">
          {this.props.error.message}
        </div>
      );
    }
  }
  render() {
    return (
      <div className='weather-list' >
        {this.handleError()}
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>위치</th>
              <th>대기오염도</th>
            </tr>
          </thead>
          <tbody>
            {this.props.air.map(this.renderAir)}
          </tbody>
        </table>
      </div>
    );
  }
}
function mapStateToProps(state, { selected }) {
  return {
    air: state.air.data,
    error: state.air.error,
    selected: selected
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCity, fetchAir }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AirList);