const { Octokit } = require('@octokit/core');

const createRepository = require('./create-repo');

// contains personal access token
const config = require('./config');

const octokit = new Octokit();

async function createIssue(repoId) {
    // first half is request fields (name, etc.), second half indicates response fields (id, name, etc.)
    const mutation = `
    mutation CreateIssue {
        createIssue(input: {repositoryId: ${repoId}, title: "TestIssue", body: "Issues exist"}) {
          issue {
            number
            body
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
  
      console.log('Repository created:', response.repository.id);
      // Handle the response as needed
    } catch (error) {
      console.error('Error:', error.response.data.errors);
      // Handle errors appropriately
    }
  }

const repoName = 'delete-me';

const repository = createRepository(repoName);

repositoryId = repository.id;

createIssue(repositoryId);