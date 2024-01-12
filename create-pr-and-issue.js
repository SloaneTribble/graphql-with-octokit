const query = require('./query');

////////////////////////////
// CREATE REPO
////////////////////////////

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
//       const response = await query(createRepoMutation);
//       const repoId = response.createRepository.repository.id;
//       console.log("repo id: ", repoId);
//       return repoId;
//     }
//     catch (error) {
//       console.error('Error:', error.message);
//     }
// }

// const repoId = createRepoAndGetId(repoName);

////////////////////////////
// CREATE ISSUE
////////////////////////////

const testRepoId = "R_kgDOLENATA";
const testTitle = "Test Issue 1:20pm";
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
    const response = await query(createIssueMutation);
    console.log("Response from creating issue:", response);
    return response;
  }
  catch (error) {
    console.error('Error:', error);
  }
}

createIssue(testRepoId, testTitle, testBody);

////////////////////////////
// GET REPO ID
////////////////////////////

const findRepo = async function getRepoByOwnerAndName(repoOwner, repoName) {
  const queryString = 
    `query FindRepo {
      repository(owner: "${repoOwner}", name: "${repoName}") {
        id
      }
    }`;
  try{
    const response = await query(queryString);
    console.log("Response from finding Repo:", response);
    return response;
  }
  catch (error) {
    console.error('Error:', error);
  }
}

const repoOwner = "SloaneTribble";
const repoName = "graphql-with-octokit";

findRepo(repoOwner, repoName);





const createPR = async function createPR(repoOwner, repoName) {
  const pullRequestMutation = 
    `mutation {
      createPullRequest(input: {baseRefName:"main", repositoryId: "R_kgDOLEItrQ", title: "TestPR", headRefName:"SloaneTribble:create-pr-and-issue"}) {
        clientMutationId,
        pullRequest{
          body,
          changedFiles
          
        }
      }
    }`;
  try{
    const response = await query(pullRequestMutation);
    console.log("Response from finding Repo:", response);
    return response;
  }
  catch (error) {
    console.error('Error:', error);
  }
}

createPR();