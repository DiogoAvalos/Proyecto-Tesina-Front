export interface TreeNode {
  id: string;
  children: TreeNode[];
  isExpanded?:boolean;
}

export interface DropInfo {
    targetId: string;
    action?: string;
}

export var demoData: TreeNode[] = [
  {
     id:'Item 1',
     children: []
  },
  {
     id:'Item 2',
     children: [
      {
         id:'Item 2.1',
         children: []
      },
      {
         id:'Item 2.2',
         children: []
      },
      {
         id:'Item 2.3',
         children: [
            {
               id:'Item 2.3.1',
               children: []
            },
            {
               id:'Item 2.3.2',
               children: []
            },
            {
               id:'Item 2.3.3',
               children: []
            }
         ]
      },
      {
         id:'Item 3',
         children: []
      },
      {
         id:'Item 4',
         children: []
      }
   ]
  },
  {
     id:'Item 3',
     children: []
  },
  {
     id:'Item 4',
     children: []
  }
]
