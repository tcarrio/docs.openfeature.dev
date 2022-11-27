import { faPhp } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { OpenFeatureTechnologiesPage } from '../../custom/OpenFeatureTechnologiesPage';
import FlagdSvg from '@site/static/img/flagd-no-fill.svg';
import SplitSvg from '@site/static/img/split-no-fill.svg';
import CloudbeesSvg from '@site/static/img/cloudbees-no-fill.svg';

export class PhpFeatures extends React.Component {
  override render() {
    return (
      <OpenFeatureTechnologiesPage
        technology="PHP"
        iconDefinition={faPhp}
        sdkRepoLink={{
          title: 'Github repository',
          href: 'https://github.com/open-feature/php-sdk',
        }}
        artifact={{
          title: 'Packagist',
          href: 'https://packagist.org/packages/open-feature/sdk',
          instruction: `
composer require open-feature/sdk
        `,
          codeBlockLanguage: 'shell',
        }}
        providers={[
          {
            title: 'CloudBees Provider',
            description: 'A provider for CloudBees',
            href: 'https://github.com/open-feature/php-sdk-contrib/tree/main/src/CloudBees',
            svg: CloudbeesSvg,
          },
          {
            title: 'flagd Provider',
            description: 'A provider for flagd',
            href: 'https://github.com/open-feature/php-sdk-contrib/tree/main/src/Flagd',
            svg: FlagdSvg,
          },
          {
            title: 'Split Provider',
            description: 'A provider for Split',
            href: 'https://github.com/open-feature/php-sdk-contrib/tree/main/src/Split',
            svg: SplitSvg,
          },
        ]}
        hooks={[]}
      />
    );
  }
}
