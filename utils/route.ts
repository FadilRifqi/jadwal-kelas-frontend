const routes = {
  login: "/login",
  register: "/register",
  resetPassword: "/reset-password",
  home: "/",
  // Add other routes here
};

export const route = (name: keyof typeof routes) => {
  return routes[name];
};
