import {expect} from '../../test/test_helper';
import commentReducer from '../../src/reducers/comments';
import {SAVE_COMMENT} from '../../src/actions/types';

describe("Comments reducer", () => {
  it("handles action with unknown type", () => {
    expect(commentReducer(undefined, {})).to.eql([]);
  });

  it("handles action of type SAVE_COMMENT", () => {
    const action = { type: SAVE_COMMENT, payload: 'best comment' }
    expect(commentReducer([], action)).to.eql(['best comment']);
  });

});
