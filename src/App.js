import React from 'react';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import CheckboxTree from 'react-checkbox-tree';
import { Component } from 'react';
import './style.css';

class App extends Component {
  state = {
    checked: [],
    expanded: [],
    selfNodes: [],
    showNodeTitle: true,
    listOfDict: [],
    selectedTestCaseDetails: [],
  };

  makeExec = () => {
    const { checked } = this.state;

    const selectedDetails = [];
    const checkedLength = checked.length;
    for (var s = 0; s < checkedLength; s++) {
      //console.log(each.split('/'));

      const splitted = checked[s].split('/');

      selectedDetails.push(splitted[1]);
    }

    this.setState((prevState) => ({
      selectedTestCaseDetails: [
        ...prevState.selectedTestCaseDetails,
        selectedDetails,
      ],
    }));
  };

  makeTree = () => {
    const testSuite = [
      {
        TestCaseID: 152,
        TestCaseNo: 's1-t1',
        TestCaseDesc: 'user can search for products',
        RequirementID: 110,
        ProjectID: 6,
        TestCaseDesigner: null,
        TestCaseStatus: null,
        TestCaseType: null,
        CreatedBy: 'admin',
        CreatedDate: '2022-09-04T13:13:49.483',
        ModifiedBy: 'admin',
        ModifiedDate: '2022-09-04T13:13:49.483',
      },
      {
        TestCaseID: 153,
        TestCaseNo: 's1-t2',
        TestCaseDesc: 'user can view a product',
        RequirementID: 111,
        ProjectID: 6,
        TestCaseDesigner: null,
        TestCaseStatus: null,
        TestCaseType: null,
        CreatedBy: 'admin',
        CreatedDate: '2022-09-04T13:13:49.483',
        ModifiedBy: 'admin',
        ModifiedDate: '2022-09-04T13:13:49.483',
      },
      {
        TestCaseID: 154,
        TestCaseNo: 's1-t3',
        TestCaseDesc: 'user can add product to cart',
        RequirementID: 112,
        ProjectID: 6,
        TestCaseDesigner: null,
        TestCaseStatus: null,
        TestCaseType: null,
        CreatedBy: 'admin',
        CreatedDate: '2022-09-04T13:13:49.483',
        ModifiedBy: 'admin',
        ModifiedDate: '2022-09-04T13:13:49.483',
      },
      {
        TestCaseID: 155,
        TestCaseNo: 's1-t4',
        TestCaseDesc: 'user can add product to cart and View Cart',
        RequirementID: 113,
        ProjectID: 6,
        TestCaseDesigner: null,
        TestCaseStatus: null,
        TestCaseType: null,
        CreatedBy: 'admin',
        CreatedDate: '2022-09-04T13:13:49.483',
        ModifiedBy: 'admin',
        ModifiedDate: '2022-09-04T13:13:49.483',
      },
    ];

    const testCase = [
      {
        RequirementID: 110,
        RequirementNo: 'tests',
        RequirementDesc: 'AmazonDummyTest.robot',
        ProjectID: 11,
        RequirementType: '',
        RequirementStatus: '',
        CreatedDate: '2022-09-06T13:59:18.143',
        CreatedBy: 'admin',
        ModifiedDate: '2022-09-06T13:59:18.143',
        ModifiedBy: 'admin',
        TestCases: [],
      },
      {
        RequirementID: 110,
        RequirementNo: 'tests',
        RequirementDesc: 'AmazonTest.robot',
        ProjectID: 11,
        RequirementType: '',
        RequirementStatus: '',
        CreatedDate: '2022-09-06T13:59:23.423',
        CreatedBy: 'admin',
        ModifiedDate: '2022-09-06T13:59:23.423',
        ModifiedBy: 'admin',
        TestCases: [],
      },
      {
        RequirementID: 111,
        RequirementNo: 'AddProductsToCart',
        RequirementDesc: 'AddProductToCartTest.robot',
        ProjectID: 11,
        RequirementType: '',
        RequirementStatus: '',
        CreatedDate: '2022-09-06T13:59:26.62',
        CreatedBy: 'admin',
        ModifiedDate: '2022-09-06T13:59:26.62',
        ModifiedBy: 'admin',
        TestCases: [],
      },
      {
        RequirementID: 111,
        RequirementNo: 'AddProductsToCart',
        RequirementDesc: 'AddProductViewCartTest.robot',
        ProjectID: 11,
        RequirementType: '',
        RequirementStatus: '',
        CreatedDate: '2022-09-06T13:59:27.05',
        CreatedBy: 'admin',
        ModifiedDate: '2022-09-06T13:59:27.05',
        ModifiedBy: 'admin',
        TestCases: [],
      },
      {
        RequirementID: 112,
        RequirementNo: 'AddProductsToCart',
        RequirementDesc: 'AddRemoveProductFromCartTest.robot',
        ProjectID: 11,
        RequirementType: '',
        RequirementStatus: '',
        CreatedDate: '2022-09-06T13:59:27.543',
        CreatedBy: 'admin',
        ModifiedDate: '2022-09-06T13:59:27.543',
        ModifiedBy: 'admin',
        TestCases: [],
      },
      {
        RequirementID: 112,
        RequirementNo: 'CheckOut',
        RequirementDesc: 'ViewCartAndCheckoutTest.robot',
        ProjectID: 11,
        RequirementType: '',
        RequirementStatus: '',
        CreatedDate: '2022-09-06T13:59:28.663',
        CreatedBy: 'admin',
        ModifiedDate: '2022-09-06T13:59:28.663',
        ModifiedBy: 'admin',
        TestCases: [],
      },
    ];

    const testSuiteLength = testSuite.length;
    const testCaseLength = testCase.length;
    for (var i = 0; i < testSuiteLength; i++) {
      let listFormed = [];
      //console.log(testSuite[i].RequirementID);
      //console.log(testSuite[i].TestCaseDesc);
      let fileName = testSuite[i].TestCaseDesc;
      for (var k = 0; k < testCaseLength; k++) {
        if (testSuite[i].RequirementID == testCase[k].RequirementID) {
          //console.log('-----', testCase[k].RequirementDesc);
          listFormed.push({
            value: fileName + '/' + testCase[k].RequirementDesc,
            label: testCase[k].RequirementDesc,
          });
        }
      }
      this.setState((prevState) => ({
        selfNodes: [
          ...prevState.selfNodes,
          { value: fileName, label: fileName, children: listFormed },
        ],
      }));
    }
  };

  render() {
    const { selfNodes, checked, selectedTestCaseDetails } = this.state;
    console.log('=====', selectedTestCaseDetails);

    return (
      <>
        <CheckboxTree
          nodes={selfNodes}
          checked={this.state.checked}
          expanded={this.state.expanded}
          onCheck={(checked) => this.setState({ checked })}
          onExpand={(expanded) => this.setState({ expanded })}
        />
        <p>gopal</p>
        <button type="button" onClick={this.makeTree}>
          click me
        </button>
        <button type="button" onClick={this.makeExec}>
          click me for execution
        </button>
        {selectedTestCaseDetails.map((each) => (
          <p>{each}</p>
        ))}
      </>
    );
  }
}

export default App;
