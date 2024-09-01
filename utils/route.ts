const routes = {
  login: "/auth/login",
  register: "/auth/register",
  resetPassword: "/auth/reset-password",
  // Add other routes here
};

export const route = (name: keyof typeof routes) => {
  return routes[name];
};
