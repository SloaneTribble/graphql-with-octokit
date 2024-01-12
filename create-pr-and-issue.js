const mutate = require('./mutate');

// const repoName = 'delete-me';

// async function createRepoAndGetId(repoName) {
//   const createRepoMutation = `
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
//     try{
//       const response = await mutate(createRepoMutation);
//       const repoId = response.createRepository.repository.id;
//       console.log("repo id: ", repoId);
//       return repoId;
//     }
//     catch (error) {
//       console.error('Error:', error.message);
//     }
// }

// const repoId = createRepoAndGetId(repoName);


const testRepoId = "R_kgDOLENATA";
const testTitle = "Test Issue 1:14pm";
const testBody = "Body body body";


async function createIssue(repoId, title, body) {
  const createIssueMutation = `
    mutation {
      createIssue(input: {repositoryId:"${repoId}", title: "${title}", body: "${body}"}) {
        issue {
          number
          body
        }
      }
    }`;
  try{
    const response = await mutate(createIssueMutation);
    console.log("Response from creating issue:", response);
    return response;
  }
  catch (error) {
    console.error('Error:', error);
  }
}

createIssue(testRepoId, testTitle, testBody);

