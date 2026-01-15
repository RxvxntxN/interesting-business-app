import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { categories } from "@/app/data/categories.js";

const RoleTabCard = () => {
  return (
    <div className="flex justify-center px-4 pt-8">
      <div className="w-full max-w-5xl">
        <div className="border-2 border-gray-200 rounded-xl shadow-lg p-6 bg-white">
          <TabGroup>
            <TabList className="flex justify-between gap-2 mb-6">
              {categories.map(({ name }) => (
                <Tab
                  key={name}
                  className="rounded-md px-4 py-2 font-medium text-gray-700 
                         data-hover:bg-gray-100 data-selected:bg-white 
                         data-selected:text-grey-700 transition-colors focus:outline-2 focus:outline-emerald-600"
                >
                  {name}
                </Tab>
              ))}
            </TabList>

            <TabPanels>
              {categories.map(({ name, posts }) => (
                <TabPanel key={name}>
                  <div className="space-y-4">
                    {posts.map((post) => (
                      <div
                        key={post.id}
                        className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50"
                      >
                        <h3 className="font-semibold text-gray-900">
                          {post.title}
                        </h3>
                        <div className="flex gap-3 text-sm text-gray-500 mt-2">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.commentCount} comments</span>
                          <span>•</span>
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
