import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { categories } from "@/app/data/categories.js";

const RoleTabCard = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl">
        <div className="border border-gray-200 sm:border-2 rounded-lg sm:rounded-xl shadow sm:shadow-lg p-4 sm:p-6 lg:p-8 bg-white">
          <TabGroup>
            <TabList className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between gap-2 mb-4 sm:mb-6 lg:mb-8 overflow-x-auto">
              {categories.map(({ name }) => (
                <Tab
                  key={name}
                  className="shrink-0 rounded-md px-3 py-2 sm:px-4 sm:py-2 font-medium text-sm sm:text-base text-gray-700 
                         data-hover:bg-gray-100 data-selected:bg-white 
                         data-selected:text-grey-700 transition-colors focus:outline-2 focus:outline-emerald-600
                         min-w-30 sm:min-w-0"
                >
                  {name}
                </Tab>
              ))}
            </TabList>

            <TabPanels>
              {categories.map(({ name, posts }) => (
                <TabPanel key={name}>
                  <div className="space-y-3 sm:space-y-4">
                    {posts.map((post) => (
                      <div
                        key={post.id}
                        className="p-3 sm:p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                      >
                        <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
                          {post.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500 mt-2">
                          <span>{post.date}</span>
                          <span className="hidden sm:inline">•</span>
                          <span>{post.commentCount} comments</span>
                          <span className="hidden sm:inline">•</span>
                          <span>{post.shareCount} shares</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </div>
  );
};

export default RoleTabCard;

// import React from "react";
// import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
// import { categories } from "@/app/data/categories.js";

// const RoleTabCard = () => {
//   return (
//     <div className="flex justify-center px-4 pt-8">
//       <div className="w-full max-w-5xl">
//         <div className="border-2 border-gray-200 rounded-xl shadow-lg p-6 bg-white">
//           <TabGroup>
//             <TabList className="flex justify-between gap-2 mb-6">
//               {categories.map(({ name }) => (
//                 <Tab
//                   key={name}
//                   className="rounded-md px-4 py-2 font-medium text-gray-700
//                          data-hover:bg-gray-100 data-selected:bg-white
//                          data-selected:text-grey-700 transition-colors focus:outline-2 focus:outline-emerald-600"
//                 >
//                   {name}
//                 </Tab>
//               ))}
//             </TabList>

//             <TabPanels>
//               {categories.map(({ name, posts }) => (
//                 <TabPanel key={name}>
//                   <div className="space-y-4">
//                     {posts.map((post) => (
//                       <div
//                         key={post.id}
//                         className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50"
//                       >
//                         <h3 className="font-semibold text-gray-900">
//                           {post.title}
//                         </h3>
//                         <div className="flex gap-3 text-sm text-gray-500 mt-2">
//                           <span>{post.date}</span>
//                           <span>•</span>
//                           <span>{post.commentCount} comments</span>
//                           <span>•</span>
//                           <span>{post.shareCount} shares</span>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </TabPanel>
//               ))}
//             </TabPanels>
//           </TabGroup>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RoleTabCard;
