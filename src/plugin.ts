import plugin from 'tailwindcss/plugin';

export const BOOL = ['false', 'true'];
export const ARIA = {
  activedescendant: ['true'],
  atomic: BOOL,
  autocomplete: ['inline', 'list', 'both'],
  busy: BOOL,
  checked: [...BOOL, 'mixed'],
  controls: ['true'],
  current: [...BOOL, 'page', 'step', 'location', 'date', 'time'],
  describedby: ['true'],
  details: ['true'],
  disabled: BOOL,
  dropeffect: ['none', 'copy', 'execute', 'link', 'move', 'popup'],
  errorMessage: ['true'],
  errormessage: ['true'],
  expanded: BOOL,
  flowto: ['true'],
  grabbed: BOOL,
  haspopup: ['menu', 'listbox', 'tree', 'grid', 'dialog', 'true'],
  hidden: BOOL,
  invalid: [...BOOL, 'grammar', 'spelling'],
  labelledby: ['true'],
  level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  live: ['off', 'assertive', 'polite'],
  modal: BOOL,
  multiline: BOOL,
  multiselectable: BOOL,
  orientation: ['horizontal', 'vertical'],
  owns: ['true'],
  placeholder: ['true'],
  posinset: ['true'],
  pressed: [...BOOL, 'mixed'],
  readonly: BOOL,
  relevant: ['additions-text', 'additions', 'all', 'removals', 'text'],
  required: BOOL,
  roledescription: ['true'],
  rowcount: ['true'],
  rowindex: ['true'],
  rowspan: ['true'],
  selected: BOOL,
  setsize: ['true'],
  sort: ['none', 'ascending', 'descending', 'other'],
  valuemax: ['true'],
  valuemin: ['true'],
  valuenow: ['true'],
  valuetext: ['true'],
};

export type Aria = () => ReturnType<typeof plugin>;
export const aria: Aria = () => plugin(({ addVariant }) => {
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
