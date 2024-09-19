const fs = require('fs');

// Function to load JSON from a file with error handling
function loadRule(filename) {
  try {
    const data = fs.readFileSync(filename, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading or parsing file: ${filename}`);
    process.exit(1); // Exit the program if an error occurs
  }
}

// Function to dynamically update the rule with custom options
function updateRule(rule, updates) {
  if (updates.rateLimit) {
    rule.action.mitigate.rateLimit = updates.rateLimit;
  }
  if (updates.actionDuration) {
    rule.action.mitigate.actionDuration = updates.actionDuration;
  }
  return rule;
}

// Function to create the URL with custom team and project
function createLink(rule, team, project) {
  return `/${team}/${project}/firewall/configure/rule/new?template=${encodeURIComponent(
    JSON.stringify(rule)
  )}`;
}

// Load and update the rule
const rule = loadRule('./rule.json');

// Log some details about the rule
console.log(`Rule name: ${rule.name}`);
console.log(`Is rule active? ${rule.active}`);

// Update rule with dynamic fields (rateLimit, actionDuration)
const updatedRule = updateRule(rule, { rateLimit: 100, actionDuration: 3600 }); // Example: rateLimit = 100 requests, duration = 3600 seconds

// Create and log the URL dynamically
const team = 'myTeam';     // Replace with your team name
const project = 'myProject'; // Replace with your project name
const link = createLink(updatedRule, team, project);

console.log('Generated URL:', link);
