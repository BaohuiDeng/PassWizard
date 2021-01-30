import React, { Component } from 'react'
// import Header from './/Header';
// import Footer from './Footer'
// import { Row,Col,Form,FormGroup,Label,Input,Button} from 'reactstrap';
// import {BrowserRouter as Router, Route} from 'react-router-dom'

import Tree from 'react-d3-tree';
// import './custom-tree.css';
import '../assets/style/custom-tree.css';

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
const G3 = {
  name: 'G2',
  attributes: {
    G2: 'high/ not high?',
  },
  children: [
    {
      name: 'HIGH',
      attributes: {
        G2:'high',
      },
    },
    {
      name: 'G2',
      attributes: {
        G2_:'not high',
        G2:'fail/medium?',
      },
      children:[
        {
          name: 'G1',
          attributes: {
            G2:'fail',
            G1:'high/not high',
      },
      children:[
        {
          name: 'HIGH',
          attributes: {
            G1:'high',
      },
        },
        {
          name: 'MEDIUM',
          attributes: {
            G1:'not high',
      },
    }
      ]
        },
        {
          name: 'G1',
          attributes: {
            G2:'fail',
            G1:'fail/medium?',
          },
          children:[
            {
              name: 'MEDIUM',
              attributes: {
                G1:'medium',
              }
            },
            {
              name: 'FAIL',
              attributes: {
                G1:'fail',
              },
            }
          ]
        }
      ]
    }
  ],
}

// export default function OrgChartTree() {
//   return (
//     // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
//     <div id="treeWrapper" style={{ width: '50em', height: '20em' }}>
//       <Tree data={orgChart} />
//     </div>
//   );
// }
export default function StyledNodesTree() {
    return (
      <div id="treeWrapper" style={{ width: '50em', height: '20em' }}>
        <h4>Fail/ Medium/ High final exam</h4>
        <Tree
          data={G3}
          rootNodeClassName="node__root"
          branchNodeClassName="node__branch"
          leafNodeClassName="node__leaf"
        />
      </div>
    );
  }