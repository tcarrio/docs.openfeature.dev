import { faGolang, faJava, faSquareJs } from '@fortawesome/free-brands-svg-icons';
import CSharpNoFillSvg from '@site/static/img/c-sharp-no-fill.svg';
import React from 'react';
import { OpenFeatureComponentTable } from '../custom/OpenFeatureComponentTable';

// high level component for SDK table rendering, so we can avoid putting too much TS in .mdx files.
export class TechnologiesTable extends React.Component {
  override render() {
    return (
      <OpenFeatureComponentTable
        items={[
          {
            href: '/docs/reference/technologies/java',
            iconDefinition: faJava,
            title: 'Java',
            description: 'Components for Java',
          },
          {
            href: '/docs/reference/technologies/javascript',
            iconDefinition: faSquareJs,
            title: 'JavaScript',
            description: 'Components for JavaScript',
          },
          {
            href: '/docs/reference/technologies/dotnet',
            title: '.NET',
            description: 'Components for .NET',
            svg: CSharpNoFillSvg,
          },
          {
            href: '/docs/reference/technologies/golang',
            iconDefinition: faGolang,
            title: 'Go',
            description: 'Components for Go',
          },
        ]}
      />
    );
  }
}
