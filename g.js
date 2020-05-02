



<div className="tree"  style={{ width: 380 }}>
 <div style={{ height: 200 }}>
        <SortableTree rowHeight={50} scaffoldBlockPxWidth={15}
          treeData={this.state.treeData}
          onChange={treeData => this.setState({ treeData })}
          theme={FileExplorerTheme}
        />
        </div>
</div>

<div className="tree1" style={{ width: 380 }}>
 <div style={{ height: 200 }}>
        <SortableTree rowHeight={50} scaffoldBlockPxWidth={15}
          treeData={this.state.treeData1}
          onChange={treeData1 => this.setState({ treeData1 })}
          theme={FileExplorerTheme}
        />
        </div>
</div>
