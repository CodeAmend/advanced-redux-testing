import {renderComponent, expect} from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe("CommentBox", () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it("has the correct className: comment-box", () => {
    expect(component).to.have.class('comment-box');
  });

  // has a button
  it("has a text area", () => {
    expect(component.find('textarea')).to.exist;
  });
  // has a text area
  it("has a button", () => {
    expect(component.find('button')).to.exist;
  });

  describe("entering some text", () => {

    beforeEach(() => {
      component.find('textarea').simulate('change', "new comment");
    });

    it("shows text that is entered", () => {
      expect(component.find('textarea')).to.have.value("new comment");
    });

    it("when submitted, clears the input", () => {
      expect();
    });

  });

});
