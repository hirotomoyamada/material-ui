import * as React from 'react';
import TopLayoutCareers from 'docs/src/modules/components/TopLayoutCareers';
import * as pageProps from 'docs/pages/careers/react-engineer-docs-infra.md?muiMarkdown';

export default function Page() {
  return <TopLayoutCareers {...pageProps} />;
}
