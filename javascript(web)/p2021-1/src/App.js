import Breadcrumb from './components/Breadcrumb.js';
import Nodes from './components/Nodes.js';

export default function App({ $target }) {
  const state = {
    isRoot: false,
    nodes: [],
    depth: []
  };

  const breadcrumb = new Breadcrumb({ $target, initialState: state.depth });
  const nodes = new Nodes({ $target });
}
