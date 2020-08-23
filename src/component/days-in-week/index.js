import React from "react";
import PropTypes from "prop-types";

DaysInWeek.propTypes = {
  days: PropTypes.array
};

DaysInWeek.defaultProps = {};

function DaysInWeek(props) {
  return (
    <table>
      <tr>
        <td>TUE</td>
        <td>WED</td>
        <td>THU</td>
        <td>FRI</td>
        <td>SAT</td>
      </tr>
      <tr>
        <td>30°</td>
        <td>34°</td>
        <td>36°</td>
        <td>34°</td>
        <td>37°</td>
      </tr>
      <tr>
        <td>17°</td>
        <td>22°</td>
        <td>19°</td>
        <td>23°</td>
        <td>19°</td>
      </tr>
    </table>
  );
}

export default DaysInWeek;
