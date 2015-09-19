export default {
  background(state, props) {
    return {};
  },
  props: {
    'patternId': ':patternId'
  },
  title(state, props) {
    return state.patterns.byId[props.patternId].name;
  },
  type: 'Pattern'
};
