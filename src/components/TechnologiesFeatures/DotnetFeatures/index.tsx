import React from 'react';
import { OpenFeatureTechnologiesPage } from '../../custom/OpenFeatureTechnologiesPage';
import CSharpNoFillSvg from '@site/static/img/c-sharp-no-fill.svg';

export class DotnetFeatures
 extends React.Component {
  override render() {
    return <OpenFeatureTechnologiesPage 
      technology=".NET"
      svg={CSharpNoFillSvg}
      sdkRepoLink={{
        title: 'Github repository',
        href: 'https://github.com/open-feature/golang-sdk'
      }}
      artifact={{
        title: 'Github repository',
        href: 'https://github.com/open-feature/golang-sdk',
        instruction: 'Install-Package OpenFeature',
        codeBlockLanguage: 'powershell'
      }}
      providers={[]}
      hooks={[]}
      />;
  }
}
