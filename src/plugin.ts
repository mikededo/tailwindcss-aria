import plugin from 'tailwindcss/plugin';

export const BOOL = ['false', 'true'];
export const ARIA = {
  atomic: BOOL,
  autocomplete: ['inline', 'list', 'both'],
  busy: BOOL,
  checked: [...BOOL, 'mixed'],
  current: [...BOOL, 'page', 'step', 'location', 'date', 'time'],
  disabled: BOOL,
  dropeffect: ['none', 'copy', 'execute', 'link', 'move', 'popup'],
  errormessage: ['true'],
  expanded: BOOL,
  grabbed: BOOL,
  haspopup: ['menu', 'listbox', 'tree', 'grid', 'dialog', 'true'],
  hidden: BOOL,
  invalid: [...BOOL, 'grammar', 'spelling'],
  level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  live: ['off', 'assertive', 'polite'],
  multiline: BOOL,
  multiselectable: BOOL,
  orientation: ['horizontal', 'vertical'],
  pressed: [...BOOL, 'mixed'],
  readonly: BOOL,
  relevant: ['additions-text', 'additions', 'all', 'removals', 'text'],
  required: BOOL,
  selected: BOOL,
  sort: ['none', 'ascending', 'descending', 'other'],
};

export const aria = () => plugin(({ addVariant }) => {
  let key: keyof typeof ARIA;
  for (key in ARIA) {
    if (ARIA[key] instanceof Function) {
      continue;
    }

    ARIA[key].forEach((element: number | string) => {
      const selector = element === 'true'
        ? `aria-${key}`
        : element === 'false'
          ? `aria-not-${key}`
          : `aria-${key}-${element}`;

      addVariant(selector, [`[aria-${key}="${element}"] &`, `&[aria-${key}="${element}"]`]);
      addVariant(`group-${selector}`, `.group[aria-${key}="${element}"] &`);
      addVariant(`peer-${selector}`, `.peer[aria-${key}="${element}"] ~ &`);
    });
  }
});
