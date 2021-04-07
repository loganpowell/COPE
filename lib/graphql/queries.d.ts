export const getAsset: "\n  query GetAsset($id: ID!) {\n    getAsset(id: $id) {\n      id\n      node_id\n      createdAt\n      type\n      name\n      content\n      _version\n      _deleted\n      _lastChangedAt\n      updatedAt\n      owner\n    }\n  }\n";
export const listAssets: "\n  query ListAssets(\n    $filter: ModelAssetFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    listAssets(filter: $filter, limit: $limit, nextToken: $nextToken) {\n      items {\n        id\n        node_id\n        createdAt\n        type\n        name\n        content\n        _version\n        _deleted\n        _lastChangedAt\n        updatedAt\n        owner\n      }\n      nextToken\n      startedAt\n    }\n  }\n";
export const assetsByNode: "\n  query AssetsByNode(\n    $node_id: ID\n    $createdAt: ModelStringKeyConditionInput\n    $sortDirection: ModelSortDirection\n    $filter: ModelAssetFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    AssetsByNode(\n      node_id: $node_id\n      createdAt: $createdAt\n      sortDirection: $sortDirection\n      filter: $filter\n      limit: $limit\n      nextToken: $nextToken\n    ) {\n      items {\n        id\n        node_id\n        createdAt\n        type\n        name\n        content\n        _version\n        _deleted\n        _lastChangedAt\n        updatedAt\n        owner\n      }\n      nextToken\n      startedAt\n    }\n  }\n";
export const assetsByTypeName: "\n  query AssetsByTypeName(\n    $type: AssetType\n    $nameCreatedAt: ModelAssetAssets_by_type_nameCompositeKeyConditionInput\n    $sortDirection: ModelSortDirection\n    $filter: ModelAssetFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    AssetsByTypeName(\n      type: $type\n      nameCreatedAt: $nameCreatedAt\n      sortDirection: $sortDirection\n      filter: $filter\n      limit: $limit\n      nextToken: $nextToken\n    ) {\n      items {\n        id\n        node_id\n        createdAt\n        type\n        name\n        content\n        _version\n        _deleted\n        _lastChangedAt\n        updatedAt\n        owner\n      }\n      nextToken\n      startedAt\n    }\n  }\n";
export const syncAssets: "\n  query SyncAssets(\n    $filter: ModelAssetFilterInput\n    $limit: Int\n    $nextToken: String\n    $lastSync: AWSTimestamp\n  ) {\n    syncAssets(\n      filter: $filter\n      limit: $limit\n      nextToken: $nextToken\n      lastSync: $lastSync\n    ) {\n      items {\n        id\n        node_id\n        createdAt\n        type\n        name\n        content\n        _version\n        _deleted\n        _lastChangedAt\n        updatedAt\n        owner\n      }\n      nextToken\n      startedAt\n    }\n  }\n";
export const sync_Assets: "\n  query Sync_Assets(\n    $filter: Model_AssetFilterInput\n    $limit: Int\n    $nextToken: String\n    $lastSync: AWSTimestamp\n  ) {\n    sync_Assets(\n      filter: $filter\n      limit: $limit\n      nextToken: $nextToken\n      lastSync: $lastSync\n    ) {\n      items {\n        id\n        node_id\n        createdAt\n        type\n        name\n        content\n        _version\n        _deleted\n        _lastChangedAt\n        updatedAt\n        owner\n      }\n      nextToken\n      startedAt\n    }\n  }\n";
export const listNodes: "\n  query ListNodes(\n    $filter: ModelNodeFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    listNodes(filter: $filter, limit: $limit, nextToken: $nextToken) {\n      items {\n        id\n        status\n        type\n        createdAt\n        updatedAt\n        _version\n        _deleted\n        _lastChangedAt\n        owner\n      }\n      nextToken\n      startedAt\n    }\n  }\n";
export const getNode: "\n  query GetNode($id: ID!) {\n    getNode(id: $id) {\n      id\n      status\n      type\n      createdAt\n      updatedAt\n      _version\n      _deleted\n      _lastChangedAt\n      assets {\n        nextToken\n        startedAt\n      }\n      _assets {\n        nextToken\n        startedAt\n      }\n      owner\n      edges {\n        nextToken\n        startedAt\n      }\n    }\n  }\n";
export const nodesByTypeStatus: "\n  query NodesByTypeStatus(\n    $type: NodeType\n    $statusCreatedAt: ModelNodeNodes_by_type_status_createdAtCompositeKeyConditionInput\n    $sortDirection: ModelSortDirection\n    $filter: ModelNodeFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    nodesByTypeStatus(\n      type: $type\n      statusCreatedAt: $statusCreatedAt\n      sortDirection: $sortDirection\n      filter: $filter\n      limit: $limit\n      nextToken: $nextToken\n    ) {\n      items {\n        id\n        status\n        type\n        createdAt\n        updatedAt\n        _version\n        _deleted\n        _lastChangedAt\n        owner\n      }\n      nextToken\n      startedAt\n    }\n  }\n";
export const syncNodes: "\n  query SyncNodes(\n    $filter: ModelNodeFilterInput\n    $limit: Int\n    $nextToken: String\n    $lastSync: AWSTimestamp\n  ) {\n    syncNodes(\n      filter: $filter\n      limit: $limit\n      nextToken: $nextToken\n      lastSync: $lastSync\n    ) {\n      items {\n        id\n        status\n        type\n        createdAt\n        updatedAt\n        _version\n        _deleted\n        _lastChangedAt\n        owner\n      }\n      nextToken\n      startedAt\n    }\n  }\n";
export const listEdges: "\n  query ListEdges(\n    $filter: ModelEdgeFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    listEdges(filter: $filter, limit: $limit, nextToken: $nextToken) {\n      items {\n        id\n        type\n        createdAt\n        weight\n        _version\n        _deleted\n        _lastChangedAt\n        updatedAt\n        owner\n      }\n      nextToken\n      startedAt\n    }\n  }\n";
export const getEdge: "\n  query GetEdge($id: ID!) {\n    getEdge(id: $id) {\n      id\n      type\n      createdAt\n      weight\n      _version\n      _deleted\n      _lastChangedAt\n      updatedAt\n      owner\n      nodes {\n        nextToken\n        startedAt\n      }\n    }\n  }\n";
export const edgesByTypeWeight: "\n  query EdgesByTypeWeight(\n    $type: EdgeType\n    $weightCreatedAt: ModelEdgeEdges_by_type_weightCompositeKeyConditionInput\n    $sortDirection: ModelSortDirection\n    $filter: ModelEdgeFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    edgesByTypeWeight(\n      type: $type\n      weightCreatedAt: $weightCreatedAt\n      sortDirection: $sortDirection\n      filter: $filter\n      limit: $limit\n      nextToken: $nextToken\n    ) {\n      items {\n        id\n        type\n        createdAt\n        weight\n        _version\n        _deleted\n        _lastChangedAt\n        updatedAt\n        owner\n      }\n      nextToken\n      startedAt\n    }\n  }\n";
export const syncEdges: "\n  query SyncEdges(\n    $filter: ModelEdgeFilterInput\n    $limit: Int\n    $nextToken: String\n    $lastSync: AWSTimestamp\n  ) {\n    syncEdges(\n      filter: $filter\n      limit: $limit\n      nextToken: $nextToken\n      lastSync: $lastSync\n    ) {\n      items {\n        id\n        type\n        createdAt\n        weight\n        _version\n        _deleted\n        _lastChangedAt\n        updatedAt\n        owner\n      }\n      nextToken\n      startedAt\n    }\n  }\n";
export const syncNodeEdges: "\n  query SyncNodeEdges(\n    $filter: ModelNodeEdgeFilterInput\n    $limit: Int\n    $nextToken: String\n    $lastSync: AWSTimestamp\n  ) {\n    syncNodeEdges(\n      filter: $filter\n      limit: $limit\n      nextToken: $nextToken\n      lastSync: $lastSync\n    ) {\n      items {\n        id\n        edge_id\n        node_id\n        _version\n        _deleted\n        _lastChangedAt\n        createdAt\n        updatedAt\n        owner\n      }\n      nextToken\n      startedAt\n    }\n  }\n";