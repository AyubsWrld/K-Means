// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Project Overview",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Abstract", href: "/abstract" },
      { title: "Background", href: "/background" },
    ],
  },
  {
    title: "System Level Design",
    href: "/sysarch",
    noLink: true,
    items: [
      { title: "System Requirements", href: "/sysreq" },
      { title: "Functional Requirements", href: "/funcreq" },
      { title: "User InterFace Requirements", href: "/uireq" },
      { title: "Nonfunctional Requirements", href: "/nfreq" },
      { title: "Technical Architecture", href: "/techarch" },
    ],
  },
  {
    title: "Detailed Description",
    href: "/detdesc",
    noLink: true,
    items: [
      { title: "Core Algorithms",
        href: "/corealgos",
        noLink : true , 
        items :[
          { title: "Route Optimization Algorithm", href: "/routeoa" },
          { title: "Data Model", href: "/datamodel" },
        ]
      },
      { title: "External Integrations",
        href: "/externalintegration",
        noLink : true , 
        items :[
          { title: "Required APIs", href: "/reqapi" },
        ]
      },
      { title: "Mobile Application Specifications", href: "/mobilespec" },
    ],
  },
  {
    title: "Testing",
    href: "/testing",
    noLink: true,
    items: [
      { title: "Testing Levels", href: "/testlevel" },
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
