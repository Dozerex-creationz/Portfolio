
export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  clone_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
}

export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

class GitHubService {
  private baseURL = 'https://api.github.com';

  async getUserProfile(username: string): Promise<GitHubUser> {
    try {
      const response = await fetch(`${this.baseURL}/users/${username}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching user profile:', error);
      throw error;
    }
  }

  async getUserRepos(username: string, page = 1, perPage = 10): Promise<GitHubRepo[]> {
    try {
      const response = await fetch(
        `${this.baseURL}/users/${username}/repos?page=${page}&per_page=${perPage}&sort=updated`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching repositories:', error);
      throw error;
    }
  }

  async getRepoDetails(username: string, repoName: string): Promise<GitHubRepo> {
    try {
      const response = await fetch(`${this.baseURL}/repos/${username}/${repoName}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching repository details:', error);
      throw error;
    }
  }

  async searchRepos(query: string, page = 1, perPage = 10): Promise<{ items: GitHubRepo[] }> {
    try {
      const response = await fetch(
        `${this.baseURL}/search/repositories?q=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error searching repositories:', error);
      throw error;
    }
  }
}

export const githubService = new GitHubService();
