export default function Nodes({ $app, initialState, onClick, onBackClick }) {
  let state = initialState;
  this.onClick = onClick;
  this.onBackClick = onBackClick;
  this.$element = document.createElement('div');
  this.$element.className = 'Nodes';
  $app.appendChild(this.$element);

  this.setState = (nextState) => {
    state = nextState;
    this.render();
  };

  this.render = () => {
    if (state.nodes) {
      const nodesTemplate = state.nodes
        .map((node) => {
          const iconPath =
            node.type === 'FILE' ? './assets/file.png' : './assets/directory.png';

          return `
          <div style="background-color:green" class="Node" data-node-id="${node.id}">
            <img src="${iconPath}" />
            <div>${node.name}</div>
          </div>
        `;
        })
        .join('');

      this.$element.innerHTML = !state.isRoot
        ? `<div class="Node"><img src="/assets/prev.png"></div>${nodesTemplate}`
        : nodesTemplate;
    }
    // this.$element.querySelectorAll('.Node').forEach(($node) => {
    //   $node.addEventListener('click', (e) => {
    //     // dataset을 통해 data-로 시작하는 attribute를 꺼내올 수 있음
    //     const { nodeId } = e.target.dataset;

    //     if (!nodeId) {
    //       this.onBackClick();
    //       return;
    //     }

    //     const selectedNode = state.nodes.find((node) => node.id === nodeId);

    //     if (selectedNode) {
    //       this.onClick(selectedNode);
    //     }
    //   });
    // });
  };

  this.render();

  this.$element.addEventListener('click', (e) => {
    console.log(e.target);
    const $node = e.target.closest('.Node');

    if ($node) {
      const { nodeId } = e.target.dataset;

      if (!nodeId) {
        this.onBackClick();
        return;
      }

      const selectedNode = state.nodes.find((node) => node.id === nodeId);

      if (selectedNode) {
        this.onClick(selectedNode);
      }
    }
  });
}
