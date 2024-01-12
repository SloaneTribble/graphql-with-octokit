const { Octokit } = require('@octokit/core');
const octokit = new Octokit();

// contains personal access token
const config = require('./config');

async function createRepository(owner, repoName) {
  const mutation = `
    mutation {
      createRepository(input: {
        owner: "${owner}",
        name: "${repoName}",
        visibility: PRIVATE,
        description: "Your repository description",
        hasIssuesEnabled: true,
        hasProjectsEnabled: true
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

    console.log('Repository created:', response.data.createRepository.repository);
    // Handle the response as needed
  } catch (error) {
    console.error('Error:', error.response.data.errors);
    // Handle errors appropriately
  }
}

// Example usage
const owner = 'SloaneTribble';
const repoName = 'octokit-graphql-test';

createRepository(owner, repoName);
