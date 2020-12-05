import React from 'react';
import ReportPresenter from './ReportPresenter';

export default class extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      reportText: ['마스크<br/>미착용자<br/>민원신고', '임산부석<br/>민원신고', '취객난동<br/>민원신고'],
      isModalOpen: false,
      modalText: '',
    };
  }

  showModal(e) {
    console.log(this.state.isModalOpen);
    if (this.state.isModalOpen === false) {
      let modalText = e.target.parentElement.innerText;
      if (modalText[0] == '마') {
        this.setState({ modalText: '마스크 미착용자 민원신고' });
      } else if (modalText[0] == '임') {
        this.setState({ modalText: '임산부석 민원신고' });
      } else if (modalText[0] == '취') {
        this.setState({ modalText: '취객난동 민원신고' });
      }
    }

    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  handleReportButton(e) {
    console.log(e);
  }

  render() {
    const { reportText, isModalOpen, modalText } = this.state;
    return (
      <ReportPresenter
        showModal={this.showModal.bind(this)}
        isModalOpen={isModalOpen}
        modalText={modalText}
        reportText={reportText}
        handleReportButton={this.handleReportButton}
      />
    );
  }
}
