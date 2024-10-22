const core = require('@actions/core');

async function run() {
  try {
    const input = core.getInput('example_input');
    console.log(`Input received: ${input}`);
    // Add your action logic here
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();