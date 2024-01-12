const { Octokit } = require('@octokit/core');
const octokit = new Octokit();
const createRepository = require('./create-repo');

const repoName = 'delete-me';

createRepository(repoName);
