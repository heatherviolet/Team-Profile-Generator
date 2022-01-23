const managerCard = manager => {
return `
<div class="card" style="width: 18rem;">
    <div class="col card-header">
        <h4>${manager.name}</h4>
    <div class="card-body">
      <h4 class="card-title">Manager</h4>
    </div>
        <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${manager.id}</li>
          <li class="list-group-item">Email: ${manager.email}</li>
          <li class="list-group-item">Office Number: ${manager.office}</li>
        </ul>
  </div>
  `}

  const internCard = intern => {
      return `
  <div class="card" style="width: 18rem;">
    <div class="col card-header">
        <h4>${intern.name}</h4>
    <div class="card-body">
      <h4 class="card-title">Intern</h4>
    </div>
        <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${intern.id}</li>
          <li class="list-group-item">Email: ${intern.email}</li>
          <li class="list-group-item">School: ${intern.school}</li>
        </ul>
  </div>
  `}

  const engineerCard = engineer => {
      return `
  <div class="card" style="width: 18rem;">
    <div class="col card-header">
        <h4>${engineer.name}</h4>
    <div class="card-body">
      <h4 class="card-title">Engineer</h4>
    </div>
        <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engineer.id}</li>
          <li class="list-group-item">Email: ${engineer.email}</li>
          <li class="list-group-item">GitHub: ${engineer.github}</li>
        </ul>
  </div>
`;
};

const generateHTML = questions => {

}
module.exports = generateHTML;