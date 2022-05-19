import * as React from 'react';

const DateSelectElement = React.lazy(() => import('./DateSelectLazy'));

export class DateSelect extends React.Component {
  state = {
    startDate: new Date()
  }

  constructor(props: any) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange = (date: Date) => {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <div>
        <React.Suspense fallback={'loading...'}>
          <DateSelectElement
            selected={this.state.startDate}
            onChange={this.onChange}
          />
        </React.Suspense>
      </div>
    );
  }
}

export default DateSelect;
