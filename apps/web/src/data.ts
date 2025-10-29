export type MenuItem = {
  name: string;
  path: string;
  moduleName: string;
  modulePath: string;
}

export const menuList: MenuItem[] = [
  { name: "planModule",      path: "/planModule", moduleName:"PlanModuleHomeView", modulePath:"plan-module"},
  { name: "planModuleRealGrid", path: "/planModuleRealGrid", moduleName:"PlanModuleRealGridView", modulePath:"plan-module" },
  { name: "diagram", path: "/diagram", moduleName:"Diagram", modulePath:"plan-module" },
  //{ name: "workOrderGrid",   path: "/workorderGrid", moduleName:"PlanModuleHomeView", modulePath:"workorder-module" },
  //{ name: "workOrderRealGrid", path: "/workorderRealGrid", moduleName:"PlanModuleRealGridView", modulePath:"workorder-module" },
];

export type CommonCode = {
  name: string
  code: string
}
export const commonCodeList: CommonCode[] = [
  { name: 'KO', code: 'KO' },
  { name: 'EN', code: 'EN' },
]

export const menuList1 = [
  //  { name: '메뉴', id: '0', parentId: '', depth: 0 },
  { name: '대메뉴1', id: '1', parentId: '', depth: 1 },
  { name: '중메뉴1', id: '2', parentId: '1', depth: 2 },
  { name: 'Home', id: '3', parentId: '2', depth: 3, url: '/' },
  { name: 'About', id: '4', parentId: '2', depth: 3, url: '/about' },
  { name: '중메뉴2', id: '5', parentId: '1', depth: 2 },
  { name: 'Form', id: '6', parentId: '5', depth: 3, url: '/form' },
  { name: '소메뉴 2', id: '7', parentId: '5', depth: 3 },
  { name: '대메뉴2', id: '8', parentId: '', depth: 1 },
  { name: '중메뉴 1', id: '9', parentId: '8', depth: 2 },
  { name: '소메뉴 1', id: '10', parentId: '9', depth: 3 },
  { name: '소메뉴 2', id: '11', parentId: '9', depth: 3 },
  { name: '중메뉴 2', id: '12', parentId: '11', depth: 2 },
  { name: '소메뉴 1', id: '13', parentId: '12', depth: 3 },
  { name: '대메뉴3', id: '14', parentId: '', depth: 1 },
  { name: '중메뉴 1', id: '15', parentId: '14', depth: 2 },
  { name: '소메뉴 1', id: '16', parentId: '15', depth: 3 },
]

export type Customer = {
  ID: number

  CompanyName: string

  Address: string

  City: string

  State: string

  Zipcode: number

  Phone: string

  Fax: string
}

export const customers: Customer[] = [
  {
    ID: 1,
    CompanyName: 'Super Mart of the West',
    Address: '702 SW 8th Street',
    City: 'Bentonville',
    State: 'Arkansas',
    Zipcode: 72716,
    Phone: '(800) 555-2797',
    Fax: '(800) 555-2171',
  },
  {
    ID: 2,
    CompanyName: 'Electronics Depot',
    Address: '2455 Paces Ferry Road NW',
    City: 'Atlanta',
    State: 'Georgia',
    Zipcode: 30339,
    Phone: '(800) 595-3232',
    Fax: '(800) 595-3231',
  },
  {
    ID: 3,
    CompanyName: 'K&S Music',
    Address: '1000 Nicllet Mall',
    City: 'Minneapolis',
    State: 'Minnesota',
    Zipcode: 55403,
    Phone: '(612) 304-6073',
    Fax: '(612) 304-6074',
  },
  {
    ID: 4,
    CompanyName: "Tom's Club",
    Address: '999 Lake Drive',
    City: 'Issaquah',
    State: 'Washington',
    Zipcode: 98027,
    Phone: '(800) 955-2292',
    Fax: '(800) 955-2293',
  },
  {
    ID: 5,
    CompanyName: 'E-Mart',
    Address: '3333 Beverly Rd',
    City: 'Hoffman Estates',
    State: 'Illinois',
    Zipcode: 60179,
    Phone: '(847) 286-2500',
    Fax: '(847) 286-2501',
  },
  {
    ID: 6,
    CompanyName: 'Walters',
    Address: '200 Wilmot Rd',
    City: 'Deerfield',
    State: 'Illinois',
    Zipcode: 60015,
    Phone: '(847) 940-2500',
    Fax: '(847) 940-2501',
  },
  {
    ID: 7,
    CompanyName: 'StereoShack',
    Address: '400 Commerce S',
    City: 'Fort Worth',
    State: 'Texas',
    Zipcode: 76102,
    Phone: '(817) 820-0741',
    Fax: '(817) 820-0742',
  },
  {
    ID: 8,
    CompanyName: 'Circuit Town',
    Address: '2200 Kensington Court',
    City: 'Oak Brook',
    State: 'Illinois',
    Zipcode: 60523,
    Phone: '(800) 955-2929',
    Fax: '(800) 955-9392',
  },
  {
    ID: 9,
    CompanyName: 'Premier Buy',
    Address: '7601 Penn Avenue South',
    City: 'Richfield',
    State: 'Minnesota',
    Zipcode: 55423,
    Phone: '(612) 291-1000',
    Fax: '(612) 291-2001',
  },
  {
    ID: 10,
    CompanyName: 'ElectrixMax',
    Address: '263 Shuman Blvd',
    City: 'Naperville',
    State: 'Illinois',
    Zipcode: 60563,
    Phone: '(630) 438-7800',
    Fax: '(630) 438-7801',
  },
  {
    ID: 11,
    CompanyName: 'Video Emporium',
    Address: '1201 Elm Street',
    City: 'Dallas',
    State: 'Texas',
    Zipcode: 75270,
    Phone: '(214) 854-3000',
    Fax: '(214) 854-3001',
  },
  {
    ID: 12,
    CompanyName: 'Screen Shop',
    Address: '1000 Lowes Blvd',
    City: 'Mooresville',
    State: 'North Carolina',
    Zipcode: 28117,
    Phone: '(800) 445-6937',
    Fax: '(800) 445-6938',
  },
]