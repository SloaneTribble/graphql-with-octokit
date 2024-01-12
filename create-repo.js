const { Octokit } = require('@octokit/core');
const octokit = new Octokit();

// contains personal access token
const config = require('./config');

async function createRepository(repoName) {
  // first half is request fields (name, etc.), second half indicates response fields (id, name, etc.)
  const mutation = `
    mutation {
      createRepository(input: {
        name: "${repoName}",
        visibility: PRIVATE,
        description: "Test description",
        hasIssuesEnabled: true,
      }) {
        repository {
          id
          name
          description
          owner {
            login
          }
        }
      }
    }
  `;

  try {
    const response = await octokit.graphql({
      query: mutation,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
        Authorization: `token ${config.token}`,
      },
    });

    console.log('Repository created:', response);
    // Handle the response as needed
  } catch (error) {
    console.error('Error:', error.response.data.errors);
    // Handle errors appropriately
  }
}

module.exports = createRepository;

// Example usage
// const repoName = 'octokit-graphql-test2';

// createRepository(repoName);
