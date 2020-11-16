import React from 'react';
import ReportPresenter from './ReportPresenter';

export default class extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      reportText: ['마스크<br/>미착용자<br/>민원신고', '임산부석<br/>민원신고', '취객난동<br/>민원신고'],
    };
  }

  handleReportButton(e) {
    console.log(e);
  }

  render() {
    console.log('true');
    const { reportText } = this.state;
    return <ReportPresenter reportText={reportText} handleReportButton={this.handleReportButton} />;
  }
}
