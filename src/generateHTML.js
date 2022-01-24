
// creates manager card HTML
const managerCard = manager => {
return `
<div class="card" style="width: 18rem;">
    <div class="col card-header">
        <h4>${manager.getName}</h4>
    <div class="card-body">
      <h4 class="card-title">Manager</h4>
    </div>
        <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${manager.getId}</li>
          <li class="list-group-item">Email: ${manager.getEmail}</li>
          <li class="list-group-item">Office Number: ${manager.getOffice}</li>
        </ul>
  </div>
  `}

  // creates intern card HTML
  const internCard = intern => {
      return `
  <div class="card" style="width: 18rem;">
    <div class="col card-header">
        <h4>${intern.getName}</h4>
    <div class="card-body">
      <h4 class="card-title">Intern</h4>
    </div>
        <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${intern.getId}</li>
          <li class="list-group-item">Email: ${intern.getEmail}</li>
          <li class="list-group-item">School: ${intern.getSchool}</li>
        </ul>
  </div>
  `}

  const engineerCard = engineer => {
      return `
  <div class="card" style="width: 18rem;">
    <div class="col card-header">
        <h4>${engineer.getName}</h4>
    <div class="card-body">
      <h4 class="card-title">Engineer</h4>
    </div>
        <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engineer.getId}</li>
          <li class="list-group-item">Email: ${engineer.getEmail}</li>
          <li class="list-group-item">GitHub: ${engineer.getGithub}</li>
        </ul>
  </div>
`;
};

// array to generate page
generateHTML = (data) => {
    // empty HTML string
    const htmlString = [];
    // for loop that loops through the length of data
    for (let i = 0; i < data.length; i++) {
    // check if data [i].employee is a manager then 
        const employee = data[i];
        const type = employee.getRole();
    
    if (role === 'Manager') {
        const createMCard = managerCard(employee);

        htmlString.push(createMCard);
    }

    if (role === 'Intern') {
        const createICard = internCard(employee);
    
        htmlString.push(createICard);
    }
    if (role === 'Engineer') {
        const createECard = engineerCard(employee);

        htmlString.push(createECard);
    }
    
    return `
    ${managerCard(data.manager)} 
    ${internCard(data.intern)}
    ${engineerCard(data.engineer)}
`;
}
}

module.exports = generateHTML;