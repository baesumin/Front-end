import { fetchFileOrDirectory } from './api.js';
import Breadcrumb from './components/Breadcrumb.js';
import ImageView from './components/ImageView.js';
import Loading from './components/Loading.js';
import Nodes from './components/Nodes.js';

export default function App({ $app }) {
  this.state = {
    isRoot: false,
    nodes: [],
    depth: [],
    selectedNodeImage: null,
    isLoading: false
  };
  const loading = new Loading({ $app, initialState: this.state.isLoading });
  const imageView = new ImageView({
    $app,
    initialState: this.state.selectedNodeImage
  });
  console.log(this.state.nodes);
  const breadcrumb = new Breadcrumb({ $app, initialState: this.state.depth });
  const nodes = new Nodes({
    $app,
    initialState: [],
    onClick: async (node) => {
      try {
        if (node.type === 'DIRECTORY') {
          const nextNodes = await fetchFileOrDirectory(node.id);
          this.setState({
            ...this.state,
            depth: [...this.state.depth, node],
            nodes: nextNodes
          });
        } else if (node.type === 'FILE') {
          this.setState({
            ...this.state,
            selectedNodeImage: node.filePath
          });
        }
      } catch (e) {}
    },
    onBackClick: async () => {
      try {
        // 이전 state를 복사하여 처리
        const nextState = { ...this.state };
        nextState.depth.pop();

        const prevNodeId =
          nextState.depth.length === 0
            ? null
            : nextState.depth[nextState.depth.length - 1].id;

        // root로 온 경우이므로 root 처리
        if (prevNodeId === null) {
          const rootNodes = await fetchFileOrDirectory();
          this.setState({
            ...nextState,
            isRoot: true,
            nodes: rootNodes
          });
        } else {
          const prevNodes = await fetchFileOrDirectory(prevNodeId);

          this.setState({
            ...nextNodes,
            isRoot: false,
            nodes: prevNodes
          });
        }
      } catch (e) {
        // 에러처리
      }
    }
  });

  this.setState = (nextState) => {
    this.state = nextState;
    breadcrumb.setState(this.state.depth);
    nodes.setState({
      isRoot: this.state.isRoot,
      nodes: this.state.nodes
    });
    imageView.setState(this.state.selectedNodeImage);
    loading.setState(this.state.isLoading);
  };

  const init = async () => {
    try {
      this.setState({
        ...this.state,
        isLoading: true
      });
      const rootNodes = await fetchFileOrDirectory();
      this.setState({
        ...this.state,
        isRoot: true,
        nodes: rootNodes
      });
    } catch (e) {
      alert(e.message);
    } finally {
      this.setState({
        ...this.state,
        isLoading: false
      });
    }
  };
  init();
}
