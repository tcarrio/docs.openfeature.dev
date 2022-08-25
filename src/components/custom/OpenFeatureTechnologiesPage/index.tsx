import { faCirclePlus, faPlus } from '@fortawesome/free-solid-svg-icons';
import CodeBlock from '@theme/CodeBlock';
import React from 'react';
import { OpenFeatureComponentCardData } from '../OpenFeatureComponentCard/';
import { OpenFeatureComponentTable } from '../OpenFeatureComponentTable/';
import { FontAwesomeCardData, SvgCardData, SvgOrFonticon } from '../SvgOrFonticon/';

export interface Link {
  href: string;
  title: string;
}

export interface InstallInstruction {
  instruction: string;
  codeBlockLanguage: string
}

type TechnologyData = {
  technology: string,
  sdkRepoLink: Link,
  artifact: Link & InstallInstruction,
  hooks: OpenFeatureComponentCardData[],
  providers: OpenFeatureComponentCardData[]
} & (SvgCardData | FontAwesomeCardData);

const addNewProvider: OpenFeatureComponentCardData = {
  iconDefinition: faCirclePlus,
  title: 'Add yours...',
  description: 'Don\'t see what you\'re looking for? Add your own provider!',
  href: 'https://docs.openfeature.dev/docs/reference/concepts/provider/#implementing-providers',
  showLast: true
};

const addNewHook: OpenFeatureComponentCardData = {
  iconDefinition: faCirclePlus,
  title: 'Add yours...',
  description: 'Don\'t see what you\'re looking for? Add your own hook!',
  href: 'https://docs.openfeature.dev/docs/reference/concepts/hooks#implementing-hooks',
  showLast: true
};

export class OpenFeatureTechnologiesPage extends React.Component<TechnologyData> {
  override render() {

    const props = {
      ...this.props,
      providers: [
        ...this.props.providers,
        addNewProvider
      ],
      hooks: [
        ...this.props.hooks,
        addNewHook
      ]
    } as TechnologyData & Partial<SvgCardData & FontAwesomeCardData>;
   
    return <>
      <div>
        <SvgOrFonticon size={25} svg={ props.svg } iconDefinition={ props.iconDefinition } />
        <h2 style={{ display: 'inline', marginLeft: 10 }}>SDK</h2>
      </div>
      
      <p>
        <b>Repository: </b><a href={props.sdkRepoLink.href}>{props.sdkRepoLink.title}</a>
        <br />
        <b>Artifact: </b><a href={props.artifact.href}>{props.artifact.title}</a>
        <br />
        <b>Install: </b>
        <CodeBlock language={ props.artifact.codeBlockLanguage }>{props.artifact.instruction}</CodeBlock>
      </p>
      
      <h3>Providers</h3>
      <p>Available {props.technology} providers. Providers connect the <i>evaluation API</i> which <i>application authors</i> use, to a backend that resolves flag values.</p>

      <OpenFeatureComponentTable items={ props.providers } />

      <h3>Hooks</h3>
      <p>Available {props.technology} hooks. Hooks add behavior at well-defined points during the <i>flag evaluation lifecycle</i>.</p>

      <OpenFeatureComponentTable items={ props.hooks } />
    </>;
  }
}
