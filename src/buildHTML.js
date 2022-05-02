let buildHTML = (employee) => {
    let role = "";
    let details = "";
    let email = `Email: <a href="mailto:${employee.email}" target="_blank"'>${employee.email}</a>`;
  
    switch (employee.role) {
      case "Manager":
        role = `<i class="fas fa-mug-hot mr-2"></i> ${employee.role}`;
        details = `Office number : ${employee.officeNumber}`;
        break;
      case "Engineer":
        role = `<i class="fas fa-glasses mr-2"></i> ${employee.role}`;
        details = `Github: <a href='https://www.github.com/${employee.github}' target="_blank">${employee.github}</a>`;
        break;
  
      case "Intern":
        role = `<i class="fas fa-user-graduate mr-2"></i> ${employee.role}`;
        details = `School: ${employee.school}`;
        break;
  
      default:
        role = `<i class="fas fa-mug-hot mr-2"></i> ${employee.role}`;
  
        break;
    }
  
    return `<div class="col">
      <div class = "card">
          <div class="card-header bg-primary text-white">
              <h2 class="card-title">${employee.name}</h2>
              <h3 class="card-title">${role}</h3>
          </div>
          <div class="card-body">
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${employee.id}</li>
                  <li class="list-group-item">${email}</li>
                  <li class="list-group-item">${details}</li>
              </ul>
          </div>
      </div>
  </div>
  `;
  }
  
  module.exports = buildHTML;