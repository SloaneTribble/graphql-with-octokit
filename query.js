const { Octokit } = require('@octokit/core');
const octokit = new Octokit();

// contains personal access token
const config = require('./config');


async function performMutationOrQuery(mutation) {
  // first half is request fields (name, etc.), second half indicates response fields (id, name, etc.)

  try {
    const response = await octokit.graphql({
      query: mutation,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
        Authorization: `token ${config.token}`,
      },
    });

    console.log('Query or mutation successful; response: ', response);
    // Handle the response as needed
    return response;
  } catch (error) {
    console.error('Error:', error);
    // Handle errors appropriately
  }
}

module.exports = performMutationOrQuery;

// Example usage
// const repoName = 'octokit-graphql-test2';
// const createRepo = `
//     mutation {
//       createRepository(input: {
//         name: "${repoName}",
//         visibility: PRIVATE,
//         description: "Test description",
//         hasIssuesEnabled: true,
//       }) {
//         repository {
//           id
//           name
//           description
//           owner {
//             login
//           }
//         }
//       }
//     }
//   `;

// mutate(createRepo);
