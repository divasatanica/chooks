// import * as React from 'react';
// import { act } from '@testing-library/react-hooks';
// import { render, fireEvent } from '@testing-library/react';
import { useHover } from '../index';

describe('useHover', () => {
  it('should be defined', () => {
    expect(useHover).toBeDefined();
  });

  // TODO
  // it('should be true if mouseenter fired', () => {
  //   const Hover = function() {
  //     const ref = React.useRef(null);
  //     const state = useHover(ref);
  //     return (
  //       <div ref={ref}>
  //         <span>{ state ? 'yes' : 'no'}</span>
  //       </div>
  //     )
  //   }
  //   const { getByText } = render(<Hover />)

  //   act(() => {
  //     fireEvent(getByText('no'), new MouseEvent('mouseenter'));
  //   });
    

  //   expect(getByText('yes')).toBeTruthy();
  // });
});