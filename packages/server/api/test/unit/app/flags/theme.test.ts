import { describe, expect, it } from 'vitest';

import { defaultTheme } from '../../../../src/app/flags/theme';

describe('defaultTheme', () => {
  it('uses the STS white-label defaults', () => {
    expect(defaultTheme.websiteName).toBe('STS');
    expect(defaultTheme.logos.fullLogoUrl).toContain('data:image/svg+xml');
    expect(defaultTheme.logos.logoIconUrl).toContain('data:image/svg+xml');
    expect(defaultTheme.logos.favIconUrl).toContain('data:image/svg+xml');
    expect(defaultTheme.logos.fullLogoUrl).not.toContain('activepieces');
    expect(defaultTheme.logos.logoIconUrl).not.toContain('activepieces');
    expect(defaultTheme.logos.favIconUrl).not.toContain('activepieces');
  });
});
