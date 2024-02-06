import { v4 as uuidv4 } from 'uuid';

export const initialTodos = [
  {
    id: uuidv4(),
    name: 'Clean Room',
    description: 'clean clean clean.',
    createdAt: new Date().toISOString(),
    complete: true
  },
  {
    id: uuidv4(),
    name: 'Buy Groceries',
    description: 'Eggs, Bacon, Milk.',
    createdAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    name: 'Task 1',
    description: '• Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
      '• Nunc aliquet bibendum enim facilisis gravida.\n' +
      '• Morbi posuere purus vitae quam blandit placerat.\n' +
      '• Cras pulvinar ipsum at luctus tristique.\n' +
      '• Donec dignissim gravida sem, ut cursus dolor mollis sed.\n' +
      '• Pellentesque rhoncus quis sapien sit amet molestie.\n' +
      '• Fusce at ipsum eros. Vivamus consequat dictum elit, non varius justo.\n' +
      '• Duis bibendum nunc sit amet commodo sollicitudin.\n' +
      '• Curabitur sit amet nunc nec risus eleifend lobortis et at ipsum.\n' +
      '• Suspendisse id lacinia arcu, eu tristique sem.',
    createdAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    name: 'Task 2',
    description: '• Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
      '• Nunc aliquet bibendum enim facilisis gravida.\n' +
      '• Morbi posuere purus vitae quam blandit placerat.\n' +
      '• Cras pulvinar ipsum at luctus tristique.\n' +
      '• Donec dignissim gravida sem, ut cursus dolor mollis sed.\n' +
      '• Pellentesque rhoncus quis sapien sit amet molestie.\n' +
      '• Fusce at ipsum eros. Vivamus consequat dictum elit, non varius justo.\n' +
      '• Duis bibendum nunc sit amet commodo sollicitudin.\n' +
      '• Curabitur sit amet nunc nec risus eleifend lobortis et at ipsum.\n' +
      '• Suspendisse id lacinia arcu, eu tristique sem.',
    createdAt: new Date().toISOString(),
    complete: true
  },
  {
    id: uuidv4(),
    name: 'Task 3',
    description: '• Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
      '• Nunc aliquet bibendum enim facilisis gravida.\n' +
      '• Morbi posuere purus vitae quam blandit placerat.\n' +
      '• Cras pulvinar ipsum at luctus tristique.\n' +
      '• Donec dignissim gravida sem, ut cursus dolor mollis sed.\n' +
      '• Pellentesque rhoncus quis sapien sit amet molestie.\n' +
      '• Fusce at ipsum eros. Vivamus consequat dictum elit, non varius justo.\n' +
      '• Duis bibendum nunc sit amet commodo sollicitudin.\n' +
      '• Curabitur sit amet nunc nec risus eleifend lobortis et at ipsum.\n' +
      '• Suspendisse id lacinia arcu, eu tristique sem.',
    createdAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    name: 'Task 4',
    description: '• Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
      '• Nunc aliquet bibendum enim facilisis gravida.\n' +
      '• Morbi posuere purus vitae quam blandit placerat.\n' +
      '• Cras pulvinar ipsum at luctus tristique.\n' +
      '• Donec dignissim gravida sem, ut cursus dolor mollis sed.\n' +
      '• Pellentesque rhoncus quis sapien sit amet molestie.\n' +
      '• Fusce at ipsum eros. Vivamus consequat dictum elit, non varius justo.\n' +
      '• Duis bibendum nunc sit amet commodo sollicitudin.\n' +
      '• Curabitur sit amet nunc nec risus eleifend lobortis et at ipsum.\n' +
      '• Suspendisse id lacinia arcu, eu tristique sem.',
    createdAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    name: 'Task 5',
    description: '• Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
      '• Nunc aliquet bibendum enim facilisis gravida.\n' +
      '• Morbi posuere purus vitae quam blandit placerat.\n' +
      '• Cras pulvinar ipsum at luctus tristique.\n' +
      '• Donec dignissim gravida sem, ut cursus dolor mollis sed.\n' +
      '• Pellentesque rhoncus quis sapien sit amet molestie.\n' +
      '• Fusce at ipsum eros. Vivamus consequat dictum elit, non varius justo.\n' +
      '• Duis bibendum nunc sit amet commodo sollicitudin.\n' +
      '• Curabitur sit amet nunc nec risus eleifend lobortis et at ipsum.\n' +
      '• Suspendisse id lacinia arcu, eu tristique sem.',
    createdAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    name: 'Task 6',
    description: '• Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
      '• Nunc aliquet bibendum enim facilisis gravida.\n' +
      '• Morbi posuere purus vitae quam blandit placerat.\n' +
      '• Cras pulvinar ipsum at luctus tristique.\n' +
      '• Donec dignissim gravida sem, ut cursus dolor mollis sed.\n' +
      '• Pellentesque rhoncus quis sapien sit amet molestie.\n' +
      '• Fusce at ipsum eros. Vivamus consequat dictum elit, non varius justo.\n' +
      '• Duis bibendum nunc sit amet commodo sollicitudin.\n' +
      '• Curabitur sit amet nunc nec risus eleifend lobortis et at ipsum.\n' +
      '• Suspendisse id lacinia arcu, eu tristique sem.',
    createdAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    name: 'Task 7',
    description: '• Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
      '• Nunc aliquet bibendum enim facilisis gravida.\n' +
      '• Morbi posuere purus vitae quam blandit placerat.\n' +
      '• Cras pulvinar ipsum at luctus tristique.\n' +
      '• Donec dignissim gravida sem, ut cursus dolor mollis sed.\n' +
      '• Pellentesque rhoncus quis sapien sit amet molestie.\n' +
      '• Fusce at ipsum eros. Vivamus consequat dictum elit, non varius justo.\n' +
      '• Duis bibendum nunc sit amet commodo sollicitudin.\n' +
      '• Curabitur sit amet nunc nec risus eleifend lobortis et at ipsum.\n' +
      '• Suspendisse id lacinia arcu, eu tristique sem.',
    createdAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    name: 'Buy Groceries',
    description: '• Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
      '• Nunc aliquet bibendum enim facilisis gravida.\n' +
      '• Morbi posuere purus vitae quam blandit placerat.\n' +
      '• Cras pulvinar ipsum at luctus tristique.\n' +
      '• Donec dignissim gravida sem, ut cursus dolor mollis sed.\n' +
      '• Pellentesque rhoncus quis sapien sit amet molestie.\n' +
      '• Fusce at ipsum eros. Vivamus consequat dictum elit, non varius justo.\n' +
      '• Duis bibendum nunc sit amet commodo sollicitudin.\n' +
      '• Curabitur sit amet nunc nec risus eleifend lobortis et at ipsum.\n' +
      '• Suspendisse id lacinia arcu, eu tristique sem.',
    createdAt: new Date().toISOString(),
  }
]
