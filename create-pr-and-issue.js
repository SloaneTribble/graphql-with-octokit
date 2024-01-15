const query = require('./query');

// ////////////////////////////
// // CREATE REPO
// ////////////////////////////



// const newRepoName = 'delete-me' + Math.random();

// const newRepo = async function createRepoAndGetId(repoName) {
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

// const newRepoId = newRepo(newRepoName);

// ////////////////////////////
// // CREATE ISSUE
// ////////////////////////////

// const testRepoId = "R_kgDOLENATA";
// const testTitle = "Test Issue 1:20pm";
// const testBody = "Body body body";


// const createIssue = async function createIssue(repoId, title, body) {
//   const createIssueMutation = `
//     mutation {
//       createIssue(input: {repositoryId:"${repoId}", title: "${title}", body: "${body}"}) {
//         issue {
//           number
//           body
//         }
//       }
//     }`;
//   try{
//     const response = await query(createIssueMutation);
//     console.log("Response from creating issue:", response);
//     return response;
//   }
//   catch (error) {
//     console.error('Error:', error);
//   }
// }

// // createIssue(testRepoId, testTitle, testBody);

// ////////////////////////////
// // GET REPO ID
// ////////////////////////////

// const getRepoId = async function getRepoByOwnerAndName(repoOwner, repoName) {
//   const queryString = 
//     `query FindRepo {
//       repository(owner: "${repoOwner}", name: "${repoName}") {
//         id
//       }
//     }`;
//   try{
//     const response = await query(queryString);
//     console.log("Response from finding Repo:", response);
//     const repoId = response.repository.id;
//     return repoId;
//   }
//   catch (error) {
//     console.error('Error:', error);
//   }
// }

// const repoOwner = "SloaneTribble";
// const repoName = "graphql-with-octokit";

// // const repoIdByOwnerAndName = getRepoId(repoOwner, repoName);



// ////////////////////////////
// // CREATEPR
// ////////////////////////////

// const baseRefName = "main";
// const repositoryId =  "R_kgDOLEItrQ";
// const title = "TestPR";
// const headRefName = "SloaneTribble:cleanup";
// const body = "This is the body";

// const createPR = async function createPR(baseRefName, repositoryId, title, headRefName, body) {
//   const pullRequestMutation = 
//     `mutation {
//       createPullRequest(input: {baseRefName:"${baseRefName}", repositoryId: "${repositoryId}", title: "${title}", headRefName:"${headRefName}", body:"${body}"}) {
//         clientMutationId,
//         pullRequest{
//           body,
//           changedFiles
          
//         }
//       }
//     }`;
//   try{
//     const response = await query(pullRequestMutation);
//     console.log("Response from finding Repo:", response);
//     return response;
//   }
//   catch (error) {
//     console.error('Error:', error);
//   }
// }

// createPR(baseRefName, repositoryId, title, headRefName, body);

////////////////////////////
// RETRIEVEREPO
////////////////////////////

// look up repository by owner and repo name

const findRepoWithExtras = async function getRepoByOwnerAndName(repoOwner, repoName) {
  const queryString = 
    `query FindRepo {
      repository(owner: "SloaneTribble", name: "graphql-with-octokit") {
        id
        pullRequests(first: 1) {
          nodes {
            number
            body
          }
        }
        issues(first: 1) {
          nodes {
            number
            author {
              login
            }
          }
        }
      }
    }
    `;
  try{
    const response = await query(queryString);
    console.log("Response from finding Repo:", response);
    return response;
  }
  catch (error) {
    console.error('Error:', error);
  }
}

findRepoWithExtras();