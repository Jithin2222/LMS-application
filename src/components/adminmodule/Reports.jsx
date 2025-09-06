import React from 'react';

 function Reports() {
  return (
    <div>
      <h2>📊 Reports</h2>


{/* from bootatrap */}

      <h5 className="mt-4">Revenue Reports</h5>
      <table className="table table-striped table-bordered mt-2">
        <thead className="table-dark">
          <tr>
            <th>Month</th>
            <th>Total Revenue</th>
            <th>Paid Courses Sold</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>July 2025</td>
            <td>$1,200</td>
            <td>48</td>
          </tr>
          <tr>
            <td>August 2025</td>
            <td>$980</td>
            <td>39</td>
          </tr>
        </tbody>
      </table>

      <h5 className="mt-4">Platform Usage</h5>
      <table className="table table-hover table-bordered mt-2">
        <thead className="table-dark">
          <tr>
            <th>Metric</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Active Users</td>
            <td>320</td>
          </tr>
          <tr>
            <td>Courses Created</td>
            <td>85</td>
          </tr>
          <tr>
            <td>Completed Enrollments</td>
            <td>217</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


export default Reports;