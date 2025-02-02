import { aria, ARIA } from './plugin';

describe('plugin', () => {
  it('generates correct variants for each ARIA attribute', () => {
    const mockAddVariant = vi.fn();
    aria().handler({ addVariant: mockAddVariant } as any);

    const variants = mockAddVariant.mock.calls.map((call) => call[0]);

    Object.entries(ARIA).forEach(([key, values]) => {
      values.forEach((value) => {
        const standardVariant = value === 'true'
          ? `aria-${key}`
          : value === 'false'
            ? `aria-not-${key}`
            : `aria-${key}-${value}`;

        // Group and peer variants
        const groupVariant = `group-${standardVariant}`;
        const peerVariant = `peer-${standardVariant}`;

        // Check each variant is generated
        expect(variants).toContain(standardVariant);
        expect(variants).toContain(groupVariant);
        expect(variants).toContain(peerVariant);
      });
    });
  });

  it('generates only the filtered types', () => {
    const mockAddVariant = vi.fn();
    aria({
      rowcount: true,
      rowindex: true,
      rowspan: true,
    }).handler({ addVariant: mockAddVariant } as any);

    const variants = mockAddVariant.mock.calls.map((call) => call[0]);

    (['rowindex', 'rowcount', 'rowspan'] as (keyof typeof ARIA)[]).forEach((key) => {
      ARIA[key].forEach((value) => {
        const standardVariant = value === 'true'
          ? `aria-${key}`
          : value === 'false'
            ? `aria-not-${key}`
            : `aria-${key}-${value}`;

        // Group and peer variants
        const groupVariant = `group-${standardVariant}`;
        const peerVariant = `peer-${standardVariant}`;

        // Check each variant is generated
        expect(variants).toContain(standardVariant);
        expect(variants).toContain(groupVariant);
        expect(variants).toContain(peerVariant);
      });
    });

    // 3 => Chosen variants
    // 3 => base class, peer and group
    expect(mockAddVariant).toHaveBeenCalledTimes(3 * 3);
  });
});
