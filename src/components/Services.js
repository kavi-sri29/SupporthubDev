import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../assets/stylesheets/services.css";
import ImageData from "./ImageData";

const Services = () => {
  return (
    <div>
      <div className="font-bold text-4xl ml-14 mt-9">Who we work with</div>
      <div className="ml-14 mt-2.5 text-SupportColor text-xl mb-10">
        Support Hub is in its early launch. Each month we're growing. And more
        organisations are joining us.
      </div>
      <div className="ml-14 mb-14">
        <Tabs>
          <TabList>
            <Tab>Financial Services</Tab>
            <Tab>Water & Energy</Tab>
            <Tab>More sectors coming soon...</Tab>
          </TabList>
          <TabPanel>
            <ImageData />
          </TabPanel>
          <TabPanel>
            <div className="p-3">
              <p>
                Support Hub is growing and will soon be offering new types of
                organisations that you can share your support needs with:
              </p>
              <ul className="list-disc pl-5 pt-2.5">
                <li>Water & Energy (Coming soon)</li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="p-3">
              <p>
                Support Hub is growing and will soon be offering new types of
                organisations that you can share your support needs with:
              </p>
              <ul className="list-disc pl-5 pt-2.5">
                <li>Mobile, broadband and media</li>
                <li>Retailers</li>
                <li>Couriers</li>
                <li>And more!</li>
              </ul>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};
export default Services;
