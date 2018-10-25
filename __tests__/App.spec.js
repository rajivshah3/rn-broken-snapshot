import React from 'react';
import App from '../App';
import ShallowRender from 'react-test-renderer/shallow';

describe('when rendering', () => {
  it('should match the snapshot', () => {
          const renderer = new ShallowRender();
          const tree = renderer.render(<App />);
          expect(tree).toMatchSnapshot();
  })
})
