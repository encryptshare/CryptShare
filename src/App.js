import * as React from "react";
import { Block } from 'baseui/block';
import { Heading, HeadingLevel } from 'baseui/heading'
import { StatefulTabs, Tab } from "baseui/tabs-motion";
import CreateTab from "./components/CreateTab";
import FetchTab from "./components/FetchTab";
import './App.css';

import {ParagraphMedium, ParagraphSmall} from "baseui/typography";
import {
  Card
} from 'baseui/card';
import {Plus, ArrowDown} from 'baseui/icon'


function App() {
  return (
      <Block className={'main-block'}
          paddingLeft={['scale800', 'scale1200']}
          paddingRight={['scale800', 'scale1200']}
          paddingBottom={['scale400', 'scale400']}
      >
        <HeadingLevel>
          <Heading>
            <strong>Crypt</strong> Share
          </Heading>
          <ParagraphMedium>
          Upload anything, encrypt with your "own password" and share with your friends. All the benefits of web3.storage technologies over the public IPFS network with optional encryptions.
          </ParagraphMedium>
          <Card>
            <StatefulTabs>
              <Tab title="Create" artwork={Plus}>
                <CreateTab/>
              </Tab>
              <Tab title="Fetch" artwork={ArrowDown}>
                <FetchTab/>
              </Tab>
            </StatefulTabs>
          </Card>
          <center>
            <ParagraphSmall>
              Made With ❤️ By storage@cryptshare.xyz - Open-Source - MIT license
            </ParagraphSmall>
          </center>
        </HeadingLevel>
      </Block>
  );
}

export default App;
