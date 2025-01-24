# Tailwind CSS ARIA

A Tailwind CSS plugin that adds support for all modern ARIA attributes. It also
provides support to `group`, `peer` and negated variants.

## Installation

Install the plugin with:

```sh
bun add -d tw-aria
```

Link the plugin in your CSS using the [`@plugin` directive](https://tailwindcss.com/docs/functions-and-directives#plugin-directive):

```css
/* global.css */
@plugin "tw-aria";
```

For v3 or v4 with `tailwind.config.{ts,js}`, use:

```typescript
import type { Config } from 'tailwindcss';
import twAria from 'tw-aria';

export default {
  plugins: [twAria()],
  // ... rest of the configuration
} satisfies Config;
```

## Generated variants

<details>
  <summary>List of generated variants</summary>

| **ARIA Attributes**          | **Group ARIA Attributes**          | **Peer ARIA Attributes**          |
| ---------------------------- | ---------------------------------- | --------------------------------- |
| aria-atomic                  | group-aria-atomic                  | peer-aria-atomic                  |
| aria-autocomplete-both       | group-aria-autocomplete-both       | peer-aria-autocomplete-both       |
| aria-autocomplete-inline     | group-aria-autocomplete-inline     | peer-aria-autocomplete-inline     |
| aria-autocomplete-list       | group-aria-autocomplete-list       | peer-aria-autocomplete-list       |
| aria-busy                    | group-aria-busy                    | peer-aria-busy                    |
| aria-checked                 | group-aria-checked                 | peer-aria-checked                 |
| aria-checked-mixed           | group-aria-checked-mixed           | peer-aria-checked-mixed           |
| aria-current                 | group-aria-current                 | peer-aria-current                 |
| aria-current-date            | group-aria-current-date            | peer-aria-current-date            |
| aria-current-location        | group-aria-current-location        | peer-aria-current-location        |
| aria-current-page            | group-aria-current-page            | peer-aria-current-page            |
| aria-current-step            | group-aria-current-step            | peer-aria-current-step            |
| aria-current-time            | group-aria-current-time            | peer-aria-current-time            |
| aria-disabled                | group-aria-disabled                | peer-aria-disabled                |
| aria-dropeffect-copy         | group-aria-dropeffect-copy         | peer-aria-dropeffect-copy         |
| aria-dropeffect-execute      | group-aria-dropeffect-execute      | peer-aria-dropeffect-execute      |
| aria-dropeffect-link         | group-aria-dropeffect-link         | peer-aria-dropeffect-link         |
| aria-dropeffect-move         | group-aria-dropeffect-move         | peer-aria-dropeffect-move         |
| aria-dropeffect-none         | group-aria-dropeffect-none         | peer-aria-dropeffect-none         |
| aria-dropeffect-popup        | group-aria-dropeffect-popup        | peer-aria-dropeffect-popup        |
| aria-errormessage            | group-aria-errormessage            | peer-aria-errormessage            |
| aria-expanded                | group-aria-expanded                | peer-aria-expanded                |
| aria-grabbed                 | group-aria-grabbed                 | peer-aria-grabbed                 |
| aria-haspopup                | group-aria-haspopup                | peer-aria-haspopup                |
| aria-haspopup-dialog         | group-aria-haspopup-dialog         | peer-aria-haspopup-dialog         |
| aria-haspopup-grid           | group-aria-haspopup-grid           | peer-aria-haspopup-grid           |
| aria-haspopup-listbox        | group-aria-haspopup-listbox        | peer-aria-haspopup-listbox        |
| aria-haspopup-menu           | group-aria-haspopup-menu           | peer-aria-haspopup-menu           |
| aria-haspopup-tree           | group-aria-haspopup-tree           | peer-aria-haspopup-tree           |
| aria-hidden                  | group-aria-hidden                  | peer-aria-hidden                  |
| aria-invalid                 | group-aria-invalid                 | peer-aria-invalid                 |
| aria-invalid-grammar         | group-aria-invalid-grammar         | peer-aria-invalid-grammar         |
| aria-invalid-spelling        | group-aria-invalid-spelling        | peer-aria-invalid-spelling        |
| aria-level-1                 | group-aria-level-1                 | peer-aria-level-1                 |
| aria-level-10                | group-aria-level-10                | peer-aria-level-10                |
| aria-level-2                 | group-aria-level-2                 | peer-aria-level-2                 |
| aria-level-3                 | group-aria-level-3                 | peer-aria-level-3                 |
| aria-level-4                 | group-aria-level-4                 | peer-aria-level-4                 |
| aria-level-5                 | group-aria-level-5                 | peer-aria-level-5                 |
| aria-level-6                 | group-aria-level-6                 | peer-aria-level-6                 |
| aria-level-7                 | group-aria-level-7                 | peer-aria-level-7                 |
| aria-level-8                 | group-aria-level-8                 | peer-aria-level-8                 |
| aria-level-9                 | group-aria-level-9                 | peer-aria-level-9                 |
| aria-live-assertive          | group-aria-live-assertive          | peer-aria-live-assertive          |
| aria-live-off                | group-aria-live-off                | peer-aria-live-off                |
| aria-live-polite             | group-aria-live-polite             | peer-aria-live-polite             |
| aria-multiline               | group-aria-multiline               | peer-aria-multiline               |
| aria-multiselectable         | group-aria-multiselectable         | peer-aria-multiselectable         |
| aria-not-atomic              | group-aria-not-atomic              | peer-aria-not-atomic              |
| aria-not-busy                | group-aria-not-busy                | peer-aria-not-busy                |
| aria-not-checked             | group-aria-not-checked             | peer-aria-not-checked             |
| aria-not-current             | group-aria-not-current             | peer-aria-not-current             |
| aria-not-disabled            | group-aria-not-disabled            | peer-aria-not-disabled            |
| aria-not-expanded            | group-aria-not-expanded            | peer-aria-not-expanded            |
| aria-not-grabbed             | group-aria-not-grabbed             | peer-aria-not-grabbed             |
| aria-not-hidden              | group-aria-not-hidden              | peer-aria-not-hidden              |
| aria-not-invalid             | group-aria-not-invalid             | peer-aria-not-invalid             |
| aria-not-multiline           | group-aria-not-multiline           | peer-aria-not-multiline           |
| aria-not-multiselectable     | group-aria-not-multiselectable     | peer-aria-not-multiselectable     |
| aria-not-pressed             | group-aria-not-pressed             | peer-aria-not-pressed             |
| aria-not-readonly            | group-aria-not-readonly            | peer-aria-not-readonly            |
| aria-not-required            | group-aria-not-required            | peer-aria-not-required            |
| aria-not-selected            | group-aria-not-selected            | peer-aria-not-selected            |
| aria-orientation-horizontal  | group-aria-orientation-horizontal  | peer-aria-orientation-horizontal  |
| aria-orientation-vertical    | group-aria-orientation-vertical    | peer-aria-orientation-vertical    |
| aria-pressed                 | group-aria-pressed                 | peer-aria-pressed                 |
| aria-pressed-mixed           | group-aria-pressed-mixed           | peer-aria-pressed-mixed           |
| aria-readonly                | group-aria-readonly                | peer-aria-readonly                |
| aria-relevant-additions      | group-aria-relevant-additions      | peer-aria-relevant-additions      |
| aria-relevant-additions-text | group-aria-relevant-additions-text | peer-aria-relevant-additions-text |
| aria-relevant-all            | group-aria-relevant-all            | peer-aria-relevant-all            |
| aria-relevant-removals       | group-aria-relevant-removals       | peer-aria-relevant-removals       |
| aria-relevant-text           | group-aria-relevant-text           | peer-aria-relevant-text           |
| aria-required                | group-aria-required                | peer-aria-required                |
| aria-selected                | group-aria-selected                | peer-aria-selected                |
| aria-sort-ascending          | group-aria-sort-ascending          | peer-aria-sort-ascending          |
| aria-sort-descending         | group-aria-sort-descending         | peer-aria-sort-descending         |
| aria-sort-none               | group-aria-sort-none               | peer-aria-sort-none               |
| aria-sort-other              | group-aria-sort-other              | peer-aria-sort-other              |

</details>

> Credits to [tailwind-aria](https://github.com/mellambias/tailwind-aria)
