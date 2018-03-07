import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../styles/StudentHome.css'
import StudentProfile from './StudentProfile';
import RestartLinks from './RestartLinks';



class StudentHome extends Component {
    render() {
        return (
              <Tabs>
                  <TabList>
                  <div className="sidenav">
                    <Tab><p>Profile</p></Tab>
                    <Tab><p>Badges</p></Tab>
                  </div>
                  </TabList>

                  <TabPanel>
                    <div className="center">
                    <RestartLinks />
                    </div>
                  </TabPanel>
                  <TabPanel>
                  <div className="center">
                    <p>hello tab number 2</p>
                  </div>
                  </TabPanel>
                  <TabPanel>
                  <div className="center">
                    <p>hello tab number 3</p>
                  </div>
                  </TabPanel>
                  <TabPanel>
                  <div className="center">
                    <p>hello tab number 4</p>
                  </div>
                  </TabPanel>
              </Tabs>

        );
    }
}

export default StudentHome;
