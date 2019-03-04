const layouts = path => () => import(`../layouts/${path}`);
const pages = path => () => import(`../pages/${path}`);

export { layouts, pages };
