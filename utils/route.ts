const routes = {
  home: "/",
  dashboard: "/dashboard",
  settings: "/account/settings",
  verifyEmail: "/verify-email",
  login: "/login",
  register: "/register",
  resetPassword: "/reset-password",
  // Add other routes here
};

export const route = (name: keyof typeof routes) => {
  return routes[name];
};
