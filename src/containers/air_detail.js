import React, { Component } from 'react';
import { connect } from 'react-redux';

function convertMiseGrade(value) {
  var grade;
  if (!value) {
    grade = '';
  } else if (value >= 151) {
    grade = '최악';
  } else if (value >= 101) {
    grade = '매우 나쁨';
  } else if (value >= 76) {
    grade = '상당히 나쁨';
  } else if (value >= 51) {
    grade = '나쁨';
  } else if (value >= 41) {
    grade = '보통';
  } else if (value >= 31) {
    grade = '양호';
  } else if (value >= 16) {
    grade = '좋음';
  } else if (value >= 0) {
    grade = '최고';
  } else {
    grade = 'UNKNOWN';
  }
  return grade;
}


class AirDetail extends Component {
  constructor(props) {
    super(props);

  }

  renderDetail() {
    var khai = this.props.selected.khaiValue; //통합대기환경수치
    var pm10Value = this.props.selected.pm10Value; //미세먼지
    var pm25Value = this.props.selected.pm25Value; //초미세먼지
    var coValue = this.props.selected.coValue; //일산화탄소
    var no2Value = this.props.selected.no2Value; //이산화탄소
    var o3Grade = this.props.selected.o3Grade; //오존
    var so2Value = this.props.selected.so2Value; //아황산가스

    return (
      <div >
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>미세먼지</th>
              <th>초미세먼지</th>
              <th>일산화탄소</th>
              <th>이산화탄소</th>
              <th>오존</th>
              <th>아황산가스</th>
              
            </tr>
          </thead>
          <tbody>
            <tr >
              <td>{pm10Value}</td>
              <td>{pm25Value}</td>
              <td>{coValue}</td>
              <td>{no2Value}</td>
              <td>{o3Grade}</td>
              <td>{so2Value}</td>

            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    if (!this.props.selected) {
      return (
        <div >
        </div>
      );
    }
    return (
      <div>
        <div className='container'>
          <div >
            {this.renderDetail()}
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ selected }) {
  return {
    selected: selected,
  };
}

export default connect(mapStateToProps)(AirDetail);