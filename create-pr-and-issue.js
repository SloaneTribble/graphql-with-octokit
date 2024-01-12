const mutate = require('./mutate');

const repoName = 'delete-me';
const createRepo = `
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

async function createRepoAndGetId() {
    try{
      const response = await mutate(createRepo);
      const repoId = response.createRepository.repository.id;
      console.log("repo id: ", repoId);
      return repoId;
    }
    catch (error) {
      console.error('Error:', error.message);
    }
}

const repoId = createRepoAndGetId();