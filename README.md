# Compare by load time

simple counter page via different ways to create

| Folder          | Load time | Bundle size |
| --------------- | --------- | ----------- |
| preact          | 30ms      | 17.2kb      |
| react           | 40ms      | 146kb       |
| svelte          | 30ms      | 20kb        |
| vanila          | 25ms      | 3.5kb       |
| vanila-ts       | 30ms      | 3.75kb      |
| web-components  | 25ms      | 4.25kb      |
| web-components2 | 25ms      | 4.25kb      |

```web-components was created with shadow-dom
web-components was create without shadow-dom```