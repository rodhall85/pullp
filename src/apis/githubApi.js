export const queries = {
  currentUser: () =>
    `
query {
	viewer {
    login
    avatarUrl
  }
}
`,
};

export const get = async (query, token) => {
  console.log(token);
  console.log(query);
  const body = {
    query,
  };

  const response = await fetch('https://api.github.com/graphql', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
      Authorization: `bearer ${token}`,
    },
    body: JSON.stringify(body),
  });
  if (response.ok) {
    const result = await response.json();
    return result.data;
  }

  throw new Error('Github is not ok :(');
};
