// exports.generateHTMLTable = (data) => {
//   const COLORS = {
//     Passed: "#8fdc93",
//     Failed: "#f29191",
//     Skipped: "#83abf9",
//     Pending: "#f3f68b",
//     Undefined: "#f7b96f",
//     Total: "#d3d1d2",
//     Header: "#60cbf1",
//   };

//   // Head Cells.........
//   const headCells = [
//     {
//       id: "name",
//       numeric: false,
//       disablePadding: true,
//       label: "Features",
//     },
//     {
//       id: "stepsPassed",
//       numeric: true,
//       disablePadding: false,
//       label: "Passed",
//     },
//     {
//       id: "stepsFailed",
//       numeric: true,
//       disablePadding: false,
//       label: "Failed",
//     },
//     {
//       id: "stepsSkipped",
//       numeric: true,
//       disablePadding: false,
//       label: "Skipped",
//     },
//     {
//       id: "stepsUndefined",
//       numeric: true,
//       disablePadding: false,
//       label: "Undefined",
//     },
//     {
//       id: "stepsPending",
//       numeric: true,
//       disablePadding: false,
//       label: "Pending",
//     },
//     {
//       id: "stepsTotal",
//       numeric: true,
//       disablePadding: false,
//       label: "Total",
//     },
//     {
//       id: "scenariosPassed",
//       numeric: true,
//       disablePadding: false,
//       label: "Passed",
//     },
//     {
//       id: "scenariosFailed",
//       numeric: true,
//       disablePadding: false,
//       label: "Failed",
//     },
//     {
//       id: "scenariosTotal",
//       numeric: true,
//       disablePadding: false,
//       label: "Total",
//     },
//     {
//       id: "row_duration",
//       numeric: true,
//       disablePadding: false,
//       label: "Row Duration",
//     },
//     {
//       id: "duration",
//       numeric: true,
//       disablePadding: false,
//       label: "Duration",
//     },
//     {
//       id: "status",
//       numeric: true,
//       disablePadding: false,
//       label: "Status",
//     },
//   ];

//   let html = "<html><head><title>Grid Data</title></head><body>";
//   html += "<table><tr>";

//   // Initial cell for spacing
//   html += `<th bgcolor="${COLORS["Header"]}" class="border"></th>`;

//   // Cells for Steps
//   html += `<th bgcolor="${COLORS["Header"]}" class="border" colspan="6" align="center">Steps</th>`;

//   // Cells for Scenarios
//   html += `<th bgcolor="${COLORS["Header"]}" class="border" colspan="3" align="center">Scenarios</th>`;

//   // Cells for Features
//   html += `<th bgcolor="${COLORS["Header"]}" class="border" colspan="3" align="center">Features</th>`;

//   html += "</tr><tr>";

//   headCells.forEach((headCell) => {
//     html += `<th align="center" padding="${
//       headCell.disablePadding ? "none" : "normal"
//     }" class="border" bgcolor="${COLORS[headCell.label]}">`;
//     html += `${headCell.label}</th>`;
//   });
//   html += "</tr>";
//   data.forEach((row) => {
//     html += "<tr>";
//     html += `<td scope="row" padding="none">`;
//     html += `${row.name}</td>`;
//     html += `<td align="center" bgcolor="${
//       row.stepsPassed !== 0 ? COLORS["Passed"] : ""
//     }">${row.stepsPassed}</td>`;
//     html += `<td align="center" bgcolor="${
//       row.stepsFailed !== 0 ? COLORS["Failed"] : ""
//     }">${row.stepsFailed}</td>`;
//     html += `<td align="center" bgcolor="${
//       row.stepsSkipped !== 0 ? COLORS["Skipped"] : ""
//     }">${row.stepsSkipped}</td>`;
//     html += `<td align="center" bgcolor="${
//       row.stepsUndefined !== 0 ? COLORS["Undefined"] : ""
//     }">${row.stepsUndefined}</td>`;
//     html += `<td align="center" bgcolor="${
//       row.stepsPending !== 0 ? COLORS["Pending"] : ""
//     }">${row.stepsPending}</td>`;
//     html += `<td align="center" bgcolor="${
//       row.stepsTotal !== 0 ? COLORS["Total"] : ""
//     }">${row.stepsTotal}</td>`;
//     html += `<td align="center" bgcolor="${
//       row.stepsPassed !== 0 ? COLORS["Passed"] : ""
//     }">${row.scenariosPassed}</td>`;
//     html += `<td align="center" bgcolor="${
//       row.stepsFailed !== 0 ? COLORS["Failed"] : ""
//     }">${row.scenariosFailed}</td>`;
//     html += `<td align="center" bgcolor="${
//       row.stepsTotal !== 0 ? COLORS["Total"] : ""
//     }">${row.scenariosTotal}</td>`;
//     html += `<td align="center">${row.row_duration}</td>`;
//     html += `<td align="center">${row.duration}</td>`;
//     html += `<td align="center" bgcolor="${COLORS[row.status]}">${
//       row.status
//     }</td>`;
//     html += "</tr>";
//   });

//   html += "</table></body></html>";
//   return html;
// };

exports.generateHTMLTable = (data) => {
  const COLORS = {
    Passed: "#8fdc93",
    Failed: "#f29191",
    Skipped: "#83abf9",
    Pending: "#f3f68b",
    Undefined: "#f7b96f",
    Total: "#d3d1d2",
    Header: "#60cbf1",
  };

  // Head Cells.........
  const headCells = [
    {
      id: "name",
      numeric: false,
      disablePadding: true,
      label: "Features",
    },
    {
      id: "stepsPassed",
      numeric: true,
      disablePadding: false,
      label: "Passed",
    },
    {
      id: "stepsFailed",
      numeric: true,
      disablePadding: false,
      label: "Failed",
    },
    {
      id: "stepsSkipped",
      numeric: true,
      disablePadding: false,
      label: "Skipped",
    },
    {
      id: "stepsUndefined",
      numeric: true,
      disablePadding: false,
      label: "Undefined",
    },
    {
      id: "stepsPending",
      numeric: true,
      disablePadding: false,
      label: "Pending",
    },
    {
      id: "stepsTotal",
      numeric: true,
      disablePadding: false,
      label: "Total",
    },
    {
      id: "scenariosPassed",
      numeric: true,
      disablePadding: false,
      label: "Passed",
    },
    {
      id: "scenariosFailed",
      numeric: true,
      disablePadding: false,
      label: "Failed",
    },
    {
      id: "scenariosTotal",
      numeric: true,
      disablePadding: false,
      label: "Total",
    },
    {
      id: "row_duration",
      numeric: true,
      disablePadding: false,
      label: "Row Duration",
    },
    {
      id: "duration",
      numeric: true,
      disablePadding: false,
      label: "Duration",
    },
    {
      id: "status",
      numeric: true,
      disablePadding: false,
      label: "Status",
    },
  ];

  let html =
    "<html><head><title>Grid Data</title></head><body style='margin: auto;width:950px '>";
  html += "<table style='border: 1px slid #000000;'><tr>";

  // Initial cell for spacing
  html += `<th bgcolor="${COLORS["Header"]}" style='padding: 5px;' class="border"></th>`;

  // Cells for Steps
  html += `<th  style='padding: 5px;' bgcolor="${COLORS["Header"]}" class="border" colspan="6" align="center">Steps</th>`;

  // Cells for Scenarios
  html += `<th  style='padding: 5px;' bgcolor="${COLORS["Header"]}" class="border" colspan="3" align="center">Scenarios</th>`;

  // Cells for Features
  html += `<th style='padding: 5px;' bgcolor="${COLORS["Header"]}" class="border" colspan="3" align="center">Features</th>`;

  html += "</tr>";

  // Table Head
  html += "<tr>";
  headCells.forEach((headCell) => {
    html += `<th  style='padding: 5px;' align="center" class="border" bgcolor="${
      COLORS[headCell.label]
    }">${headCell.label}</th>`;
  });
  html += "</tr>";

  // Table Body
  data.forEach((row) => {
    html += "<tr>";
    html += `<th style='padding: 5px 0;'>${row.name}</th>`;
    html += `<th style='padding: 5px 0;' align="center" bgcolor="${
      row.stepsPassed !== 0 ? COLORS["Passed"] : ""
    }">${row.stepsPassed}</th>`;
    html += `<th style='padding: 5px 0;' align="center" bgcolor="${
      row.stepsFailed !== 0 ? COLORS["Failed"] : ""
    }">${row.stepsFailed}</th>`;
    html += `<th style='padding: 5px 0;' align="center" bgcolor="${
      row.stepsSkipped !== 0 ? COLORS["Skipped"] : ""
    }">${row.stepsSkipped}</th>`;
    html += `<th style='padding: 5px 0;' align="center" bgcolor="${
      row.stepsUndefined !== 0 ? COLORS["Undefined"] : ""
    }">${row.stepsUndefined}</th>`;
    html += `<th style='padding: 5px 0;' align="center" bgcolor="${
      row.stepsPending !== 0 ? COLORS["Pending"] : ""
    }">${row.stepsPending}</th>`;
    html += `<th style='padding: 5px 0;' align="center" bgcolor="${
      row.stepsTotal !== 0 ? COLORS["Total"] : ""
    }">${row.stepsTotal}</th>`;
    html += `<th style='padding: 5px 0;' align="center" bgcolor="${
      row.scenariosPassed !== 0 ? COLORS["Passed"] : ""
    }">${row.scenariosPassed}</th>`;
    html += `<th style='padding: 5px 0;' align="center" bgcolor="${
      row.scenariosFailed !== 0 ? COLORS["Failed"] : ""
    }">${row.scenariosFailed}</th>`;
    html += `<th style='padding: 5px 0;' align="center" bgcolor="${
      row.scenariosTotal !== 0 ? COLORS["Total"] : ""
    }">${row.scenariosTotal}</th>`;
    html += `<th style='padding: 5px 0;' align="center">${row.row_duration}</td>`;
    html += `<th style='padding: 5px 0;' align="center">${row.duration}</th>`;
    html += `<th style='padding: 5px 0;' align="center" bgcolor="${
      COLORS[row.status]
    }">${row.status}</th>`;
    html += "</tr>";
  });

  html += "</table></body></html>";
  return html;
};
